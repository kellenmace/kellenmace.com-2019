---
title: Advanced Custom Fields Metabox Priority for Top, Above Publish
date: "2016-05-11T18:19:04.121Z"
featuredImage: "../advanced-custom-fields-metabox-priority-for-top-above-publish/acf.jpg"
---

By default, all Advanced Custom Fields metaboxes with a position/context of “side” are given a priority of “core” which means that they’ll be positioned below the WordPress Publish, Categories and Tags metaboxes, and possibly others. The function below can be used to bump up a priority of a metabox to “high” so that it appears at the very top of the side column (in two-column view).

`gist:e88a4f93fd84217f5c720fccab668507`

Just be sure to change ‘My Field Group’ to the name of the Advanced Custom Fields field group whose priority you want to change.
