---
title: Edit Slug Button Missing in WordPress
date: "2016-09-12T20:20:41.121Z"
featuredImage: "./wordpress-wallpaper.png"
headerOpacity: "0.6"
---

If somewhere in the code for a WordPress site there is a filter hooked to `post_link` that’s replacing the URL so that it no longer contains the `%postname%` placeholder, WordPress will assume there’s nothing to edit. It will therefore output the permalink on the post edit screen without the edit button next to it, and the permalink’s slug won’t be editable.

For an example of how to fix this, see the filters below. The top function one keeps the `%postname%` placeholder if it exists in the URL, or else uses the Post Name if there is one, or else uses the Post Title. The second function is to fix the post preview URLs so that they go to the correct preview URL rather than the one that the top function outputs.

In order to use these, you’ll need to change quite a bit in order to target the post types you want in both, and build the URLs the way you want them in the top function. In order for the custom URLs to work on the site, you’ll also likely need to implement a new URL rewrite rule using [`add_rewrite_rule()`](https://developer.wordpress.org/reference/functions/add_rewrite_rule/).

`gist:d7faa44fa274ee4ae3983c63e24e2b7f`
