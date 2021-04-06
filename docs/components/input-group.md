---
tags: component
title: Input Group
layout: main-layout.11ty.js
---

<label for="basic-url">Your vanity URL</label>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1">https://example.com/users/</span>
  </div>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon1">
</div>

<label for="amount">Amount (to the nearest dollar)</label>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon2">$</span>
  </div>
  <input type="text" class="form-control" id="amount" aria-describedby="basic-addon2">
   <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>

<label for="small-example">Small sized input group</label>

<div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  </div>
  <input type="text" class="form-control" id="small-example" aria-describedby="inputGroup-sizing-sm">
</div>

<label for="default-example">Default sized input group</label>

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
  </div>
  <input type="text" class="form-control" id="default-example" aria-describedby="inputGroup-sizing-default">
</div>

<label for="large-example">Large sized input group</label>

<div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
  </div>
  <input type="text" class="form-control" id="large-example" aria-describedby="inputGroup-sizing-lg">
</div>
