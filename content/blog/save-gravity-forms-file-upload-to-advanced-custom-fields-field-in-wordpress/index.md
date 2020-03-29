---
title: Save Gravity Forms File Upload to Advanced Custom Fields Field in WordPress
date: "2016-09-09T15:29:44.121Z"
featuredImage: "../advanced-custom-fields-metabox-priority-for-top-above-publish/acf.jpg"
headerOpacity: "0.5"
---

Using the [Gravity Forms + Custom Post Types](https://wordpress.org/plugins/gravity-forms-custom-post-types/) WordPress plugin to map your Gravity-Forms-generated posts to a custom post type is very handy, but I noticed that it doesn'€™t seem to work with file uploads. This is because by default, Gravity Forms saves files to `/wp-content/uploads/gravity_forms` and stores their URLs. ACF on the other hand, saves files to the WP Media Library and stores their attachment IDs. The class below can be used to solve problem this by doing the following:

- After the form has been submitted, get the file from the GF uploads directory and insert it into the WordPress Media Library.
- Update the post to save the attachment ID in the ACF form field, so ACF knows where to look for it.
- Delete the original file that was uploaded to the GF uploads directory.

Be sure to change line 53 to reflect the ID of your Gravity Form, and lines 62 & 63 to reflect the Gravity Forms an ACF field IDs that you want to map to one another.

`gist:d64ed91218c291f4c7667a68a5ac79f7`
