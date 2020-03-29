---
title: Get Term Being Edited on term.php WordPress Admin Page
date: "2018-04-03T16:25:49.121Z"
featuredImage: "./electrical-wires.jpg"
headerOpacity: "0.5"
---

The function below can be used for getting the `WP_Term` object for the term that'€™s currently being edited on the `term.php` page in the WordPress admin. Just make sure that when you call this, the global `$taxnow` variable has been set. Using 'Pâ€™s `admin_init` hook, or anything that fires after that point will work.

`gist:3af3bb6a0f60930501c08c06b1defa7d`

## Example Usage

`gist:fbac1975728c2d1cacb03d9b54bd6a88`
