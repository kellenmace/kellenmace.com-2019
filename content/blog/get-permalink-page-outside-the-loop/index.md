---
title: Get Permalink of Page Outside of The Loop
date: "2015-07-17T16:12:30.121Z"
featuredImage: "../remove-custom-post-type-slug-from-permalinks/chain-link-fence.jpg"
headerOpacity: "0.8"
---

Let’s say you have some WordPress code that’s looping through all your posts and outputting some of their data to the webpage. How would you get the permalink of the page outside of The Loop (as in, what’s in the browser’s address bar) rather than the post you’re currently looping through?

Typically you can use WordPress’ `get_permalink()` function, but if you’re inside of The Loop, that function returns the permalink of each post as it’s looping through them. To get the permalink for the page OUTSIDE of the loop you’re currently in, you can use this:

```
get_permalink( get_queried_object_id() );
```

`get_queried_object_id()` will get the ID of the object (post/page/whatever) of the webpage you’re on, then passing that to `get_permalink()` will result in getting it’s permalink. Problem solved!

## Example

For one example, I was recently building a site for which I needed to loop through all Staff post type entries and include a button on each of them that if clicked, would submit a form using a `$_GET` request back to that same webpage. I used this code to get the correct permalink for the `action=""` attribute of the form:

`gist:9fb1e465a6b104b38bbd`

Handy dandy.