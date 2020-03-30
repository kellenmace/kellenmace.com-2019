---
title: Get Uploads Directory Path in WordPress
date: "2017-04-21T19:49:22.121Z"
featuredImage: "./code-editor.jpg"
headerOpacity: "0.7"
---

The following function can be used to get the absolute path to the WordPress uploads directory:

`gist:4499fdb2d495713ef827d1e113e91b90`

It will return a path to where the WordPress `/uploads/` directory is, whether it’s in the default location or whether an `UPLOADS` constant has been defined to specify an alternate location. The path it returns will look something like:

```
/path/to/wordpress/wp-content/uploads/
```
