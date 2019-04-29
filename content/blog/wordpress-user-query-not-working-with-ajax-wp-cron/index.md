---
title: WordPress User Query Not Working with AJAX/WP-Cron
date: "2019-03-05T19:40:24.121Z"
featuredImage: "../get-current-users-role-in-wordpress/crowd.jpg"
---

Recently, I was trying to do a user query on a WordPress site, but found that the query wasn’t able to fetch the users I wanted it to. This was because when an AJAX request or a WP-Cron job is being executed, there is no currently logged in user, so any parts of a user query that require elevated permissions/user capabilities can’t be run.

As a workaround, I was able to temporarily switch the current user to one of the super admins on the site, run the user query, then switch the current user back immediately afterward. My code for doing so is below.

`gist:edbf3845f5e52fd3464a36e2318bfea4`
