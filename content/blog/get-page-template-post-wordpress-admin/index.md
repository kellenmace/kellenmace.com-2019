---
title: Get Page Template for Post in WordPress Admin
date: "2016-05-05T13:55:49.121Z"
featuredImage: "./blank-page-paint.jpg"
headerOpacity: "0.5"
---

You can get the filename of the page template that the post in the WordPress admin is set to using:

```
$page_template = get_post_meta( $post->ID, '_wp_page_template', true );
```

The function below gets the filename of the page template, then returns `true` if it matches the desired page template, or `false` if not. This is useful if you want to run code in the WordPress admin only for posts that are set to use a particular page template. Just replace `abc-123.php` with the filename of the template you want to check against.

`gist:3630a454aa6a3a30e4ff80b50a5c0a41`

Here’s a more general version of that function that allows you to pass in the filename of a particular page template to check against:

`gist:c6ab8aa769d90f7902d3c12562116fd7`
