---
tags: component
title: Alerts
layout: main-layout.11ty.js
---

<div class="alert alert-success alert-dismissible fade show" role="alert">
  <h3 class="alert-heading">Dismissible Alert in <strong>success</strong> Theme Color</h3>
    <p>This is an alert style based on the <strong>success</strong> theme color and <a href="#">this is a link</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<h2 id="examples"> Examples</h2>
{% for color in theme-colors %}
<div class="alert alert-{{ color }}">
    <h3 class="alert-heading">Sample Heading in <strong>{{color}}</strong> Theme Color</h3>
    <p>This is an alert style based on the <strong>{{color}}</strong> theme color and <a href="#">this is a
            link</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis sapien lorem, rhoncus
        ultricies orci iaculis vitae. Phasellus ipsum erat, imperdiet non porttitor vitae, eleifend sed ex.</p>
</div>

{% endfor %}
