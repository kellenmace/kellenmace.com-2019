---
title: Remove Custom Post Type Slug from Permalinks
date: "2014-05-28T12:40:32.169Z"
description: Remove Custom Post Type Slug from Permalinks in WordPress easily with these two code snippets.
featuredImage: "./chain-link-fence.jpg"
headerOpacity: "0.8"
---

If you create a custom post type in WordPress, its slug will be added to the permalink (URL) structure by default. This can be desirable for grouping types of posts together, but it can also result in longer, harder-to-remember URLs, not to mention articles that don't rank as highly on Google [according to Yoast](https://yoast.com/articles/wordpress-seo/), who is an authority on WordPress search engine optimization (SEO). In this post, I'll cover how to safety and properly remove the custom post type slug from your permalinks.

Recently, I began creating a number of sites for a racing company that puts on 5K, 10K, marathon, and other distance races and fun runs. For these sites, I created a custom post type called `race`. This resulted in permalinks such as `example.com/race/race-title`. As you can see, this is not nearly as clean, easy to remember, or search engine optimized as having permalinks like `example.com/race-title` would be. I found a great post on the [WordPress.com VIP](http://vip.wordpress.com/) site on how to remove custom post types from permalinks that I followed. It appears that that post has been deleted though, so I'll outline the process below.

1. Create your custom post type (unless already created). This can be done very easily by using the great, free [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/) plugin.

1. [Create a plugin](https://codex.wordpress.org/Writing_a_Plugin) for our new code to live in (yes, it could go in your theme's functions.php file, but then it'd be lost if the theme were changed!).

1. Filter the permalink for our custom post type so that all published posts don’t have the slug in their URLs:
`gist:a79dfde1e5a14d51a8014d880dac52e7`

1. At this point, trying to view the link would result in a 404 (Page Not Found) error. That’s because WordPress only knows that Posts and Pages can have URLs like `domain.com/post-name/` or `domain.com/page-name/`. We need to teach it that our custom post type's posts can also have URLs like `domain.com/cpt-post-name/`.
`gist:fae42a47342d0ee4fe4a`

That's it! Just change both instances of `race` in these code samples to the slug of your custom post type, and replace `gp_` with whatever function prefix you'd like (your initials would be fine), and you should be all set. Going to `Settings` > `Permalinks` and saving the permalink structure to end in `/%postname%/` may also be necessary.
