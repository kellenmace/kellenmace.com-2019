---
title: How to Add an Adsense ads.txt file to a Gatsby site
date: "2019-07-08T21:16:57.121Z"
featuredImage: "./gatsby.jpg"
headerOpacity: "0.6"
---

If you have a site built on [Gatsby.js](https://www.gatsbyjs.org/) and are seeing a notification in Google Adwords about adding an `ads.txt` file to the root of the site, this is how to add it:

1. Open up the code repository for your site in a text editor.
1. Inside of the `/static/` directory, create a new file named `ads.txt`.
1. Follow [these Google Adsense instructions](https://support.google.com/adsense/answer/7532444?hl=en#create) for what text to add to `ads.txt`.
1. Save the file, commit the change and deploy the site.
1. After the deployment finishes, check your site to confirm that you can navigate to the `ads.txt` file in a browser and see its contents. Example: `https://example.com/ads.txt`
