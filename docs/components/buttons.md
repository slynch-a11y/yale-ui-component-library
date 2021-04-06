---
tags: component
title: Buttons
layout: main-layout.11ty.js
---

{% for color in theme-colors %}
<button type="button" class="btn btn-{{ color }}">{{ color }}</button>{% endfor %}

{% for color in theme-colors %}
<button type="button" class="btn btn-outline-{{ color }}">{{ color }}</button>{% endfor %}

{% for color in theme-colors %}
<button type="button" class="btn btn-{{ color }}" disabled>{{ color }}</button>{% endfor %}

<p>
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-primary">Default button</button>
    <button type="button" class="btn btn-primary btn-sm">Small button</button>
</p>

<p>
    <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
</p>
