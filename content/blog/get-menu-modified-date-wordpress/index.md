---
title: Get Menu Modified Date in WordPress
date: "2018-02-23T18:23:54.121Z"
---

WordPress doesn’t store a last modified date for navigation menus, so I created the set of functions below for keeping track of when menus were last updated.

Whenever a menu is created or updated, a timestamp will be saved for it. You can then get the date modified timestamp for any menu using `wds_get_menu_modified_timestamp( $menu_id )`.

Note that these functions keep track of last modified dates for WordPress menus themselves, not for the individual menu items inside. If you need the date modified for individual menu items, you can use [`get_the_modified_date()`](https://developer.wordpress.org/reference/functions/get_the_modified_date/).

`gist:8620815f7b5e4dc9127979f456810711`
