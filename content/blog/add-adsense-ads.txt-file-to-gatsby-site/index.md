---
title: How to Add an AdSense ads.txt file to a Gatsby site
date: "2019-07-08T21:16:57.121Z"
featuredImage: "./gatsby.jpg"
headerOpacity: "0.5"
---

If you have a site built on [Gatsby.js](https://www.gatsbyjs.org/) and have received a notification that you need to add an `ads.txt` file to the root of the site, this is how to add it:

1. Log into [AdSense](https://www.google.com/adsense/)
1. Click `Fix Now` on the banner at the top telling you to add an `ads.txt` file, then click the `Download` link to download the `ads.txt` file to your computer.
1. Open up your Gatsby project's main folder. Create a `/static/` folder at the top level of your project if you don't have one already.
1. Drop the `ads.txt` file into it: `/static/ads.txt`. This file will be copied into your site's `/public/` folder during the build process.
1. Commit the changes and deploy the site.
1. After the deployment finishes, check your site to confirm that you can navigate to the `ads.txt` file in a browser and see its contents. Example: `https://example.com/ads.txt`
1. Google's documentation says "It may take a few days for your changes to be reflected in AdSense", so wait a few days. Then the notifications about adding an ads.txt file should disappear, and AdSense will start referencing that file.
