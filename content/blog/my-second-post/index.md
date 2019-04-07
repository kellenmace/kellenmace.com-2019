---
title: My Second Post!
date: "2015-05-06T23:46:37.121Z"
featuredImage: "./code.png"
---

Wow! I love blogging so much already.

`gist:bf86ba5d19557c00c7171b5581323158`

Did you know that "despite its name, salted duck eggs can also be made from
chicken eggs, though the taste and texture will be somewhat different, and the
egg yolk will be less rich."?
([Wikipedia Link](http://en.wikipedia.org/wiki/Salted_duck_egg))

Yeah, I didn't either.

<p>WordPress’&nbsp;<code>get_super_admins()</code> function can be used to get the logins for all the users on the current site. Its return value is in array that looks like: <code>[ ‘maryann123’, ‘johnsmith456’, ‘annie-mcarthur’ ]</code>. If you want <code>WP_User</code> objects for each of those users though, you can use <code>get_users()</code>&nbsp;function and pass in&nbsp;<code>get_super_admins()</code>&nbsp;as the <code>‘login__in</code>‘ argument, like this:</p>

`gist:bf86ba5d19557c00c7171b5581323158`

<h2>Get non-Super Admins</h2>
<p>If you want to do the opposite and get all non-Super Admins, you can use <code>‘login__not_in’</code> instead, like this:</p>

`gist:bf86ba5d19557c00c7171b5581323158`
									