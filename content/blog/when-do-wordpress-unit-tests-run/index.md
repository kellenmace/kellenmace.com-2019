---
title: When do WordPress Unit Tests Run (At Which Hook?)
date: "2019-06-27T12:17:18.121Z"
featuredImage: "../get-menu-modified-date-wordpress/apple-watch.jpg"
headerOpacity: "0.6"
---

Writing unit tests for a WordPress plugin recently had me wondering:

> When do WordPress unit tests run?

Meaning, at what point during the WordPress lifecycle are unit tests executed?

I ran some tests and determined that most of the action hooks that run during a typical WordPress page load are also run during unit testing, up to and including the `posts_selection` hook. The `wp` hook that comes after that is never reached.

## List of Action Hooks that Run

Here is a full breakdown of which action hooks run when PHPUnit unit tests are executed.

Using the list of action hooks from WP's [Action Reference page](https://codex.wordpress.org/Plugin_API/Action_Reference), the hooks shown with a strikethrough are never run, and those without a strikethrough are run.

~~muplugins\_loaded~~  
registered\_taxonomy  
registered\_post\_type  
plugins\_loaded  
sanitize\_comment\_cookies  
setup\_theme  
load\_textdomain  
after\_setup\_theme  
auth\_cookie\_malformed  
~~auth\_cookie\_valid~~  
set\_current\_user  
init  
widgets\_init  
register\_sidebar  
wp\_register\_sidebar\_widget  
wp\_default\_scripts  
wp\_default\_styles  
~~admin\_bar\_init~~  
~~add\_admin\_bar\_menus~~  
wp\_loaded  
~~parse\_request~~  
~~send\_headers~~  
parse\_query  
pre\_get\_posts  
posts\_selection  
~~wp~~  
...and no hooks fire after this point.

So with that knowledge, you can expect that:
* Code that is hooked to `plugins_loaded`/`init`/etc. will be reflected in your unit tests.
* Code hooked to a hook that is crossed out in the list above or something after `posts_selection` will not be reflected in your unit tests.

## What About the Rest?

Unit Tests are meant to be used to test individual units (classes/methods/functions) of your code in isolation. In order to test functionality during the rest of the WordPress lifecycle, you can take a look at setting up end-to-end tests using [Codeception](https://codeception.com/for/wordpress).
