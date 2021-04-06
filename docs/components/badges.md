---
tags: component
title: Badges
layout: main-layout.11ty.js
---

{% for color in theme-colors %}
<span class="badge badge-{{ color }}">{{ color }}</span>
{% endfor %}

{% for color in theme-colors %}
<span class="badge badge-pill badge-{{ color }}">{{ color }}</span>{% endfor %}

{% for color in theme-colors %}
<a href="#" class="badge badge-{{ color }}">{{ color }}</a>{% endfor %}
