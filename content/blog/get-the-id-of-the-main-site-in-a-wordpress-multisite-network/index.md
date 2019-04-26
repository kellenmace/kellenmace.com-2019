---
title: Get the ID of the Main Site in a WordPress Multisite Network
date: "2016-04-05T17:00:32.121Z"
---

Here’s how you can get the ID of the main site in a WordPress multisite network. This can be useful for switching to that blog using `switch_to_blog( $blog_id )` to gain access to data from that site, then switching back with `restore_current_blog()` for example.

`gist:d0039e6913a28e1b95f29501591e0147`

## Alternate function for WordPress versions < 4.6.0

For sites running a WordPress version lower than 4.6.0, the function below can be used as an alternative. Note that although the `$current_site` global variable name in the code below makes it look like we’re getting the blog ID for the current site, `$current_site` actually refers to the data WordPress has stored related to the main site specifically, which is what we want.

`gist:99a0d1a3488ab800dc705ed22f1883b1`