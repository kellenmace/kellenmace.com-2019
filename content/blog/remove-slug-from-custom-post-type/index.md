---
title: Remove Slug from Custom Post Type
date: "2014-05-28T12:40:32.169Z"
description: Remove Slug from Custom Post Type URLs in WordPress
featuredImage: "./chain-link-fence.jpg"
headerOpacity: "0.8"
---

If you create a custom post type in WordPress, its slug will be added to the URL structure by default. So if the CPT slug is "my-cpt-slug", the URLs will look like this: `example.com/my-cpt-slug/post-name`. This can be desirable for grouping types of posts together, but it can also result in longer, harder-to-remember URLs, not to mention articles that don't rank as highly on Google [according to Yoast](https://yoast.com/articles/wordpress-seo/), who is an authority on WordPress search engine optimization (SEO). In this post, I'll cover how to safety and properly remove the custom post type slug from your URLs.

Recently, I began creating a number of sites for a racing company that puts on 5K, 10K, marathon, and other distance races and fun runs. For these sites, I created a custom post type called `race`. This resulted in URLs such as `example.com/race/race-title`. As you can see, this is not nearly as clean, easy to remember, or search engine optimized as having URLs like `example.com/race-title` would be. I found a great Remove Slug from Custom Post Type post on the [WordPress.com VIP](http://vip.wordpress.com/) site that I followed and it worked great. It appears that that post has been deleted though, so I'll outline the process below.

## Steps to Remove Slug from Custom Post Type

1. Create a new file named `km-remove-slug-from-custom-post-type.php` in the `/plugins/` folder for your site. 
1. Paste in this code, replacing the references to `my-cpt-slug` with the slug of your custom post type:
`gist:38e3d26d1c2e50e8d64fe30605d16b59`

That's it! The first function tells WordPress to remove the slug from the URLs it creates for the CPT's posts. The second function tells WordPress that posts, pages, and your CPT can all have URLs that don't include the post type slug. So that means that when a request comes in, all of these will resolve correctly, for instance: `example.com/post-name/`, `example.com/page-name/`, `example.com/cpt-post-name/`.

## FAQ / Troubleshooting

> Can I put this code in the `functions.php` file of my theme?

Yes, that will work, but just be careful - if the theme were ever changed, these URL structure changes would be lost! Creating a standalone plugin for that purpose as recommended in the article above is best practice.

> My CPT URLs aren't loading

You may want to try going to `Settings` > `Permalinks` and saving the permalink structure to end in `/%postname%/`.

> I have other issues!

There are 100+ comments below from folks trying to get this working in various ways. Check them out!

![comments](./comments.png)
