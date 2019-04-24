---
title: Require Post Title for Custom Post Type
date: "2015-06-23T14:13:30.121Z"
---

In this post, I’ll outline how to make the post title field required for a custom post type in WordPress. By default, if a user leaves the title field blank, WordPress will still allow the post to be published or updated. What we want to do is prevent the custom post type from being published/updated until it has a valid title, and let the user know they need to enter one.

First we need to enqueue our javascript file by adding the code below to the functions.php file:

`gist:d56c3ad5cdd2821331ec`

Just be sure to change the `assets/js/<filename>` to the path where you’ll put the javascript file below on your web server, and change `post_summary` to the name of your custom post type.

Next, create a new file named `km_dashboard_admin.js` in a text editor and paste in this code:

`gist:30ccbd887f181306bc1b`

If a title hasn’t been entered, we’re showing the user a popup box that says “A title is required.” and then putting the focus on the title field so they can enter one. Upload that javascript file to the path you specified when you enqueued it, above.

That’s it! If you want to require post titles for multiple post types, you can change the km_load_admin_scripts() function to contain the snippet below, with your post types in the list:

`gist:0b19507aa21757e6efbe`