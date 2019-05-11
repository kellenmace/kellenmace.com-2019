---
title: Get All Super Admin Users in WordPress
date: "2019-01-07T18:07:47.121Z"
featuredImage: "./crowd-at-concert.jpg"
---

WordPress’ `get_super_admins()` function can be used to get the logins for all the users on the current site. Its return value is in array that looks like: `[ 'maryann123', 'johnsmith456', 'annie-mcarthur' ]`. If you want `WP_User` objects for each of those users though, you can use the `get_users()` function and pass in `get_super_admins()` as the `login__in` argument, like this:

`gist:5c46f969b020012e13409e1874d67c6b`

## Get Non-Super Admins

If you want to do the opposite and get all non-Super Admins, you can use `login__not_in` instead, like this:

`gist:19a44872b916592269d3dcad27a18f95`
