---
title: Get the Excerpt by Post ID in WordPress
date: "2016-09-06T18:55:41.121Z"
featuredImage: "./woman-on-laptop.jpg"
---

The `get_the_excerpt()` [entry in the WordPress Codex](https://codex.wordpress.org/Function_Reference/get_the_excerpt) says that it returns “…either a user-supplied excerpt, that is returned unchanged, or an automatically generated word-counted trimmed-down version of the full post content” (although [the more up-to-date WordPress Developer Resources entry](https://developer.wordpress.org/reference/functions/get_the_excerpt/) has no such language). I find that calling `get_the_excerpt()` doesn’t work when a post has post content but not a post excerpt. It just returns an empty string, without trying to trim down the post content to automatically create an excerpt as the Codex description would lead you to believe.

The function below can be used to get the excerpt for a post, whether it has a post excerpt already, or it has to generate one using the post content. You can limit the number of words in the excerpt by passing in a `$num_of_words` argument.

`gist:6209d5f1e465cdcc800e690b472f8f16`
