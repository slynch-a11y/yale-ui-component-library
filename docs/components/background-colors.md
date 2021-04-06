---
tags: component
title: Background Colors
layout: main-layout.11ty.js
---

{% for color in theme-colors %}

<div class="bg-{{ color }} pl-4 p-2">
<h3>Background Color class="bg-{{color}}"</h3>
<p>This is a background style based on the <strong>{{color}}</strong> theme color and <a href="#">this is a link</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis sapien lorem, rhoncus ultricies orci iaculis vitae. Phasellus ipsum erat, imperdiet non porttitor vitae, eleifend sed ex.</p>
</div>
{% endfor %}
