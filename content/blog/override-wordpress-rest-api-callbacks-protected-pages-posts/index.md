---
title: Override WordPress REST API Callbacks for Protected Pages or Posts
date: "2018-07-07T18:40:44.121Z"
featuredImage: "./wp-rest-api.jpg"
headerOpacity: "0.8"
---

I was recently working on a headless WordPress project. It has a React frontend that uses the WP REST API to communicate with the WP backend. I had some pages that I needed to only be accessible to logged-in users, and was looking for a way to lock down access to those pages. By default, WordPress allows anybody (logged-in and logged-out users alike) to fetch `page` data from REST API requests like these:

```
domain.com/wp-json/wp/v2/pages/123
```

```
domain.com/wp-json/wds/v1/page?slug=some-page-slug
```

What we’ll do in the following code snippets is modify that behavior so that the REST API only exposes protected `page`s to logged in users. Note that the examples below show checking if a `_is_protected_content` post meta key is set to true to determine whether the `page` is protected, but you could just as easily check if the `page` has a certain category/tag/taxonomy term/etc. instead, if needed.

## Set up a custom REST API controller class for the Page post type

When WordPress registers its built-in `page` and `post` post types, it sets both of them up to use the `WP_REST_Posts_Controller` class to handle REST API requests. We’ll add a filter to set the `page` post type to use a `KM_REST_Pages_Controller` class that we’ll create instead.

`gist:a21628da0d9c25f2090f16cece826ef6`

Once that’s in place, we can now define our `KM_REST_Pages_Controller` class. It will extend the `WP_REST_Posts_Controller` class and inherit all of its functionality, except for the `get_item_permissions_check()` method, which we will override. Our version of that method will include an additional check to make sure the current user should be able to access the post before allowing them to. The only new code here is on lines 20-30 – all the rest of the code is identical to the `get_item_permissions_check()` method inside of the `WP_REST_Posts_Controller` class.

`gist:242a53ce2a583004ee5687cde0b5d2aa`

Now, when a REST API request for an individual `page`, like `domain.com/wp-json/wp/v2/pages/123` comes in, WordPress will serve up that `page`’s content if the user is logged in. Otherwise, an error response will be given with a message of `Sorry, you are not allowed to view posts in this post type`.

## Limit Pages REST API requests to users with the required permissions

At this point, requests for `page`s (plural) are still not protected. To fix that, we’ll implement a filter to tell WordPress that whenever it’s about to query the database for a REST API request for `page`s, the the user isn’t logged in, it should exclude protected `page`s from the query.

`gist:42d8d48c9f90df7b3fce11d8b3c355a0`

Now requests for `page`s (a.k.a. `page` post collection requests) like `domain.com/wp-json/wds/v1/page?slug=some-page-slug` are also protected. If a user is logged in, they’ll get all `page`s in the response. If they’re not, they’ll only get the `page`s that are not protected in the response.

## Checking for a User’s Role or Capabilities Instead

In these examples, I’m simply checking if the user is currently logged in to determine whether protected content should be included in the response. If you want to take things a step further and check whether the user has a certain role or certain capabilities, you can use checks like `current_user_can( 'administrator' )`, `current_user_can( 'edit_posts' )`, and so on. More info on roles and capabilities is available here: <https://codex.wordpress.org/Roles_and_Capabilities>.

## Modifying the Post post type Response

The code snippets I’ve shared involve modifying the REST API response for `page`s, but the same could easily be done for `post`s, as well. To do that, you would need to:

1. Change `if ( 'page' !== $name )` to `if ( 'post' !== $name )` on line 15 of the first snippet
1.Change the `KM_REST_Pages_Controller` class name in the first and second code snippets to something like `KM_REST_Pages_Controller` instead.
1. Change `add_filter( 'rest_page_query'` on line 32 of the third code snippet to `add_filter( 'rest_page_query'`.

I hope some folks find this useful! Happy coding.
