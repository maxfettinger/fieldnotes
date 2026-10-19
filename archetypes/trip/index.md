---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
summary: ""
build:
  publishResources: false   # publish only the photo sizes the galleries use, not your originals
---

When, where to, and how far.

{{ "{{<" }} trip-map geojson="route.geojson" caption="" {{ ">}}" }}

## The first part

A few sentences about it. Put its photos in a folder next to this file, named like the gallery below.

{{ "{{<" }} gallery "part-1" {{ ">}}" }}
