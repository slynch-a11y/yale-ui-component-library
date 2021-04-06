---
tags: component
title: Tooltips and Popovers
layout: main-layout.11ty.js
---

## Examples

### Tooltip

<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip content">
  Tooltip on top
</button>

<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip content">
  Tooltip on bottom
</button>

### Dismissable Popover

<a tabindex="0" class="btn btn-lg btn-info" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible Popover" data-content="Popover content should be concise and not contain essential information."><i class="fa fa-info-circle"></i> Hint</a>
