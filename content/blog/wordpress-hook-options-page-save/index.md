---
title: WordPress Hook After Options Page Save
date: "2016-04-28T15:22:18.121Z"
featuredImage: "./code-editor.jpg"
headerOpacity: "0.7"
---

If you want to hook into WordPress when an options page is saved and access the values that were entered, you can use `update_option_{$option}`.

Let'€™s say for my options page, I added the setting like this:

`register_setting( km_my_cool_options, km_my_cool_options );`

I could then hook into when the options page is saved and access the old & new values like this:

`gist:b375f624404ed2f0cdfea328e7ce8a39`
