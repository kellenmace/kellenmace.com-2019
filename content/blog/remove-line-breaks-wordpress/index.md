---
title: Remove Line Breaks in WordPress
date: "2016-06-02T17:13:47.121Z"
featuredImage: "./vertical-lines.jpg"
---

In the WordPress editor, lines that have a line break at the end of them will be turned into an HTML line break tag `<br>` then they are output on the site. This is often desirable, but not always. The functions below show how to remove line breaks in WordPress.

`gist:679716ed6be408a107d352e8458177fc`

You can see that in the first function, I’m limiting this to only run on single posts of the `press-releases` post type. Just change that conditional to apply to your use case and change all instances of `km_` to whatever function prefix you’d like to use.

## Regex

As an alternative, you could try applying a regular expression to the content like in the code below. This could be helpful for removing line breaks before importing a post into the database.

`gist:470c09a7787eb8c5b694d9233c1ee1e6`

Output from the `preg_replace()` above:

```
This is a new paragraph with arbitrarily inserted newlines at a certain width. To keep these from turning into <br>s, we want to replace them the right way.

When there is a double new-line, then we know that it really is a new paragraph, and it is OK to keep both newlines together.
```
