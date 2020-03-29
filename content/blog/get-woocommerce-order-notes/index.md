---
title: Get All WooCommerce Order Notes
date: "2016-11-17T21:16:02.121Z"
featuredImage: "./woocommerce-logo.jpg"
headerOpacity: "0.3"
---

I'€™ve seen posts and documentation online for how to get just the customer notes for an order, but no great ones for how to get all WooCommerce order notes. He'eâ€™s my solution for that:

`gist:730a34b4d29449446d4379b9caadee22`

You just pass that function the order ID (post ID) for any order and it returns an array of all the notes, or an empty array if there are none.
