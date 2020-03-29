---
title: Delete Transients with prefix in WordPress
date: "2020-02-27T06:31:00.121Z"
featuredImage: "./glasses-on-laptop.jpg"
headerOpacity: "0.5"
---

Often in WordPress development, you need to save transients to the database that have dynamic names, like this:

`gist:12a6ca6dc05a88f1f2d4dc65c042fc1d`

This results in dynamically created transient keys such as `km_post_count_project_2020_03`.

That makes deleting them when you need to do cache invalidation difficult, though. You need to somehow call `delete_transient()` for all the transient keys that could _possibly_ exist.

## The Looping Method

One option is to use a series of loops to construct every possible transient key and call `delete_transient()` on each one, like this:

`gist:938ef95049819b6a1978422d41ea2d7f`

In some cases, that works well. In other cases, it's cumbersome and unwieldy. Wouldn't it be easier if we could just run a 1-liner function to delete all transients from the database that begin with the prefix `km_post_count_` and call it a day? That's what the functions in the next section do.

## The Delete-Transients-By-Prefix Method

`7d8f3b4c48cef3fd68ebc8606415d7dd`

Once that code is in place, you can simply run `delete_transients_with_prefix( 'km_post_count_' )` to delete all transients with that prefix from the database.

## Two Words of Caution

1. Since these functions search for and delete all transients that begin with the prefix you provide, make sure that you don’t have any other transient keys that begin with the same thing. For instance, if I were to save data with transient keys like `km_post_count_*` and `km_post_count_featured_*`, those would both be deleted if I were to call `delete_transients_with_prefix( 'km_post_count_' )`.
1. Because the `get_transient_keys_with_prefix()` function searches the database for transients, it can’t be used on sites that have a persistent object cache in place, such as Redis or Memcached. If a persistent object cache is being used, transients are stored in memory rather than in the database, so trying to find them in the database won't work. If you are using a persistent object cache, you should use the looping method described above, or something similar to construct all possible transient keys and call `delete_transient()` on each one.
