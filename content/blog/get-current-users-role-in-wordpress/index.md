---
title: Get Current User’s Role in WordPress
date: "2016-01-02T18:13:20.121Z"
featuredImage: "./crowd-at-concert.jpg"
---

There’s no WordPress function to directly get the current user’s role, so I typically include my own function to serve that purpose, similar to the one below

This function is pretty versatile since if you pass a specific user’s ID or a WP_User object to it, it will return that user’s role. If you pass nothing to it, you’ll get the role of the current user instead.

`gist:ff068164a6d0aaf23679dbcb7698fff0`

Note that if a user has multiple roles assigned to them, this function will only return the first role.