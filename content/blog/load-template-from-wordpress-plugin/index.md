---
title: Load Template From WordPress Plugin
date: "2015-12-11T17:07:48.121Z"
featuredImage: "./rulers.jpg"
headerOpacity: "0.5"
---

You can load a template file from your plugin using the `template_include` filter, with code similar to this:

`gist:7f4c893576333d589c1b`

If you’re looking for something more robust that checks the child and parent themes before falling back to the plugin template, check out [Gamajo Template Loader](https://github.com/GaryJones/Gamajo-Template-Loader).