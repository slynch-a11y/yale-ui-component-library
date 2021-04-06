---
tags: component
title: Cards
layout: main-layout.11ty.js
---

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="{{ '/assets/img/handsome-dan.jpg' | relative_url }}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<br>
<div class="card mb-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<div class="card mb-3">
  <div class="card-header">
      Featured
  </div>
  <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card mb-3">
  <div class="card-header">
      Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 mt-0 border-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source
                Title</cite></footer>
    </blockquote>
  </div>
  </div>
</div>
<div class="col-12">
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="{{ '/assets/img/harkness-tower.jpg' | relative_url }}" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
 </div>
<div class="card-group mb-3">
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a group of cards with supporting text below as a natural lead-in to
            additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a group of cards with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a group of cards with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first two to show that equal
            height action.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>
</div>
<div class="card-deck mb-3">
<div class="card custom-card-cap dark-blue">
    <div class="card-body">
        <h3 class="card-title text-yale">Card title</h3>
        <p class="card-text">This is a card with a blue card cap and a link.</p>
      <a href="#" class="card-link">Card link</a>
    </div>
</div>
<div class="card custom-card-cap dark-blue">
    <div class="card-body">
        <h3 class="card-title text-yale">Card title</h3>
        <p class="card-text">This is a card with a blue card cap and a link. This content is a little bit longer.</p>
        <a href="#" class="card-link">Card link</a>
    </div>
</div>
<div class="card custom-card-cap dark-blue">
    <div class="card-body">
        <h3 class="card-title text-yale">Card title</h3>
        <p class="card-text">This is a card with a blue card cap and a link. This card has even longer content than the first two to show that equal
            height action.</p>
        <a href="#" class="card-link">Card link</a>    </div>
</div>
<div class="card-deck mt-3 mb-3">
<div class="card text-center custom-card-cap green">
    <span class="fa fa-universal-access mt-5 text-success" aria-hidden="true"  style="font-size: 3.5rem;"></span>
    <div class="card-body">
        <h2 class="card-title text-success">Card Title</h2>
        <p class="card-text">This is a card with an icon and card cap. Text is centered with a card link.</p>
       <a href="#" class="card-link">Card link</a>
    </div>
</div>
<div class="card text-center custom-card-cap orange">
 <span class="fa fa-universal-access mt-5 text-warning" aria-hidden="true"  style="font-size: 3.5rem;"></span>
    <div class="card-body">
        <h2 class="card-title text-warning">Card Title</h2>
        <p class="card-text">This is a card with an icon and card cap. Text is centered with a card link.</p>
        <a href="#" class="card-link">Card link</a>
    </div>
</div>
<div class="card text-center custom-card-cap blue">
 <span class="fa fa-universal-access mt-5 text-primary" aria-hidden="true"  style="font-size: 3.5rem;"></span>
    <div class="card-body">
        <h2 class="card-title text-primary">Card Title</h2>
        <p class="card-text">This is a card with an icon and card cap. Text is centered with a card link.</p>
        <a href="#" class="card-link">Card link</a>
    </div>
</div>
