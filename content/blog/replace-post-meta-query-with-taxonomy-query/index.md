---
title: Replace Post Meta Query with Taxonomy Query
date: "2015-09-06T17:52:27.121Z"
featuredImage: "./motorcycle-blur.jpg"
headerOpacity: "0.6"
---

In this post, I'll cover how to replace a post meta query with a taxonomy query. Why, you ask? WordPress' postmeta database table is not optimized for queries, so querying for posts based on their post meta like the below is inefficient.

`gist:dad55b6dbef45da3e171`

A much more efficient way to do this is to query by taxonomy terms instead, since the database tables related to taxonomies ARE optimized for queries. To make that switch, we first need to remove the `staff_include_on` metabox and fields from elsewhere in our code, and instead provide those options as taxonomy terms.

`gist:fabe89541fbf8d2fb606`

We'll also add this bit of code to add our three desired taxonomy terms to the database, just in case they're not there already:

`gist:4df298450ef8a664b3ee`

In this example, when the site admin is creating/editing a `Staff` post, they'll be able to select from the three `include_staff_on_page` taxonomy terms:

1. `executive_committee`
1. `our_people`
1. `our_stories`

Now when we want to get the posts that have the `executive_committee` taxonomy term for example, we can use this much more efficient query:

`gist:de9af863689faeea6395`
