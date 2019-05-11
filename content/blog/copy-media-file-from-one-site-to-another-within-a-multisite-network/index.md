---
title: Copy Media File From One Site to Another Within a Multisite Network
date: "2016-05-05T18:21:54.121Z"
featuredImage: "./network.jpg"
headerOpacity: "0.7"
---

This class shows how to copy a file from one site to other sites within the same WordPress multisite network. This code uses [`wp_handle_sideload()`](https://developer.wordpress.org/reference/functions/wp_handle_sideload/) to copy the file to all the sites on the network without attaching them to posts. If you DO want to attach the file to a post when it is sideloaded, you may want to consider using [`media_sideload_image()`](https://developer.wordpress.org/reference/functions/media_sideload_image/) instead.

`gist:51e925e8a93d1d805e5d2c765e625873`
