---
tags: component
title: Accessible Flyout Menu
layout: main-layout.11ty.js
---

<p>
<button class="fa fa-bars btn btn-primary d-inline-block d-lg-none" data-toggle='collapse' data-target="#navExample" aria-label="Show Navigation"></button>
</p>

<div class="collapse d-lg-block" id="navExample">
<nav class="accessible-flyout-menu" aria-label="example flyout menu">

<ul class="menu">
  <li class="menu-item">
    <a href="#" class="menu-item-link">Menu Item 1</a>
  </li>
  <li class="menu-item has-submenu">
      <a href="#" class="menu-item-link">Menu Item 2</a>
      <ul class="submenu" id="flyoutSubmenu">
        <li class="submenu-item"><a href="#" class="submenu-item-link">Submenu Item 1</a></li>
        <li class="submenu-item"><a href="#" class="submenu-item-link">Submenu Item 2</a></li>
        <li class="submenu-item"><a href="#" class="submenu-item-link">Submenu Item 3</a></li>
      </ul>
  </li>
  <li class="menu-item has-submenu">
        <a href="#" class="menu-item-link">Menu Item 3</a>
        <ul class="submenu" id="flyoutSubmenu2">
          <li class="submenu-item"><a href="#" class="submenu-item-link">Submenu Item 1</a></li>
          <li class="submenu-item"><a href="#" class="submenu-item-link">Submenu Item 2</a></li>
          <li class="submenu-item"><a href="#" class="submenu-item-link">Submenu Item 3</a></li>
        </ul>
    </li>
    <li class="menu-item">
        <a href="#" class="menu-item-link">Menu Item 4</a>
      </li>
</ul>

</nav>
</div>
