---
title: Clear Selectize Control on Dropdown Click
date: "2015-09-16T18:05:00.121Z"
featuredImage: "./color-options.jpg"
---

If you’re using [Selectize](https://github.com/selectize/selectize.js/) to power your dropdown menus, you may find yourself wishing that when the user clicks the dropdown menu, the current value in the control would be cleared, leaving behind only a blinking cursor and the dropdown menu. This would make it very clear that the two options available to them are to start typing or click a dropdown item. However, the default Selectize behavior is to leave the previously selected value in the control with the cursor at the end of it so that the user has to know to hit backspace before they can begin typing, which is a bit counterintuitive.

Here’s how to clear a selectize control on dropdown click:

`gist:238b44c70761be964b6b`

Further documentation is available here:  
https://github.com/selectize/selectize.js/blob/master/docs/api.md