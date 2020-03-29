---
title: Check if User Exists by ID in WordPress
date: "2016-08-26T18:26:37.121Z"
featuredImage: "../get-users-capabilities-in-wordpress/subway-crowd.jpg"
headerOpacity: "0.8"
---

WordPress has a built in `username_exists()` function to check if a user exists by their username, but there isn't a similar function for checking if a user exists by their user ID. I've seen posts online where folks suggest a way of doing that with a direct database query using `$wpdb`. While that works, the function below is a bit simpler and uses a native WordPress function to accomplish the same thing.

You can pass it the user ID to check and it will return `true` if that user exists, or `false` if not.

`gist:6d5533ca07f770bae38c740bf1046a93`
