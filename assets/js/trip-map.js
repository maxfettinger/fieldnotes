// Trip maps (trip-map shortcode): each .trip-map-canvas gets a MapTiler map (the SDK's global maptilersdk, loaded
// before this script in head/trip-map.html) with the GeoJSON file of its data-geojson on top. Lines, points and
// areas take their colours from the features' own properties if they have them (the "simplestyle" names: stroke,
// stroke-width, stroke-opacity, marker-color, fill, fill-opacity), else the theme's --route orange; clicking a
// feature shows its name and description (or desc). The map opens on the whole trip.
const theme = getComputedStyle(document.documentElement);
const ACCENT = theme.getPropertyValue("--route").trim() || "#e16c0d";
const own = (name, fallback) => ["coalesce", ["get", name], fallback];
const is = (...types) => ["in", ["geometry-type"], ["literal", types]];

for (const element of document.querySelectorAll(".trip-map-canvas")) {
  draw(element).catch((error) => console.error("trip-map:", error));
}

async function draw(element) {
  const { geojson, mapStyle: style, key } = element.dataset;
  const response = await fetch(geojson);
  if (!response.ok) throw new Error(`Could not load ${geojson}: ${response.status}`);
  const data = await response.json();

  // The trip's extent, from every coordinate of every feature
  const bounds = new maptilersdk.LngLatBounds();
  const extend = (c) => (typeof c[0] === "number" ? bounds.extend(c) : c.forEach(extend));
  for (const feature of data.features ?? [data]) if (feature.geometry) extend(feature.geometry.coordinates);

  const map = new maptilersdk.Map({
    container: element,
    apiKey: key,
    style,
    bounds,
    fitBoundsOptions: { padding: 40 },
    maxPitch: 75,
    terrainControl: true, // 3D: MapTiler's elevation
    fullscreenControl: true,
    scaleControl: "bottom-right",
    geolocateControl: false,
  });
  // Seen from straight above, terrain looks flat: switching 3D on tilts the map, off returns to flat, north up
  map.on("terrain", () => map.easeTo(map.getTerrain() ? { pitch: 60 } : { pitch: 0, bearing: 0 }));

  await map.once("load");
  map.fitBounds(bounds, { padding: 40, duration: 0 }); // again: a globe style fits differently than the constructor

  // The trip above the style's lines and areas, below its labels
  const layers = map.getStyle().layers;
  const labels = layers[layers.findLastIndex((l) => l.type !== "symbol") + 1]?.id;
  map.addSource("trip", { type: "geojson", data });
  map.addLayer({
    id: "trip-areas", type: "fill", source: "trip", filter: is("Polygon", "MultiPolygon"),
    paint: { "fill-color": own("fill", ACCENT), "fill-opacity": own("fill-opacity", 0.2) },
  }, labels);
  const line = { "line-join": "round", "line-cap": "round" };
  map.addLayer({
    id: "trip-lines-casing", type: "line", source: "trip", filter: is("LineString", "MultiLineString"), layout: line,
    paint: { "line-color": "#fff", "line-width": ["+", own("stroke-width", 4), 3], "line-opacity": own("stroke-opacity", 1) },
  }, labels);
  map.addLayer({
    id: "trip-lines", type: "line", source: "trip", filter: is("LineString", "MultiLineString"), layout: line,
    paint: { "line-color": own("stroke", ACCENT), "line-width": own("stroke-width", 4), "line-opacity": own("stroke-opacity", 1) },
  }, labels);
  map.addLayer({
    id: "trip-points", type: "circle", source: "trip", filter: is("Point", "MultiPoint"),
    paint: { "circle-color": own("marker-color", ACCENT), "circle-radius": 5, "circle-stroke-color": "#fff", "circle-stroke-width": 2 },
  });

  // A feature's name and description on click
  for (const id of ["trip-points", "trip-lines", "trip-areas"]) {
    map.on("click", id, ({ features: [feature], lngLat }) => {
      const { name, description, desc } = feature.properties;
      if (!name && !description && !desc) return;
      const content = document.createElement("div");
      if (name) content.append(Object.assign(document.createElement("strong"), { textContent: name }));
      if (description || desc) content.append(Object.assign(document.createElement("p"), { textContent: description || desc }));
      new maptilersdk.Popup({ maxWidth: "260px" }).setLngLat(lngLat).setDOMContent(content).addTo(map);
    });
    map.on("mouseenter", id, () => (map.getCanvas().style.cursor = "pointer"));
    map.on("mouseleave", id, () => (map.getCanvas().style.cursor = ""));
  }
}
