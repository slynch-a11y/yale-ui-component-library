---
tags: component
title: Carousel
layout: main-layout.11ty.js
---

## Example of Captions Below Carousel

<section class="bd-example" aria-roledescription="carousel" aria-label="visit Yale">
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-inner" aria-live="polite">
      <div class="carousel-item active" role="group"
           aria-roledescription="slide"
           aria-label="1 of 3">
        <img src="{{ '/assets/img/1.png' | relative_url }}" class="d-block w-100" alt="Yale">
        <div id="firstSlide" class="carousel-caption d-none">
          <em class="text-muted">Slide 1 of 3</em>
          <p>
            <a href="https://www.yale.edu/about-yale/visiting">Visit Yale</a>
          </p>
        </div>
      </div>
      <div class="carousel-item" role="group"
           aria-roledescription="slide"
           aria-label="2 of 3">
        <img src="{{ '/assets/img/2.png' | relative_url }}" class="d-block w-100" alt="Sterling Memorial Library">
        <div class="carousel-caption d-none">
          <em class="text-muted">Slide 2 of 3</em>
          <p>
            <a href="https://web.library.yale.edu/building/sterling-library">Visit Sterling Memorial Library</a>
          </p>
        </div>
      </div>
      <div class="carousel-item" role="group"
           aria-roledescription="slide"
           aria-label="3 of 3">
        <img src="{{ '/assets/img/3.png' | relative_url }}" class="d-block w-100" alt="Woolsey Hall">
        <div class="carousel-caption d-none">
          <em class="text-muted">Slide 3 of 3</em>
          <p>
            <a href="https://music.yale.edu/concerts/venues/woolsey/">Visit Woolsey Hall</a>
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-control-prev">
      <button data-target="#carouselExampleCaptions" data-slide="prev">
        <span class="carousel-control-prev-icon mt-2" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
    </div>
    <div class="carousel-control-next">
      <button data-target="#carouselExampleCaptions" data-slide="next">
        <span class="carousel-control-next-icon mt-2" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
  <div id="displayText" class="text-center" aria-live="polite"></div>
</section>

## Example of Captions On Carousel

<section class="bd-example" aria-roledescription="carousel" aria-label="Yale">
  <div id="carouselExampleCaptionsOnSlides" class="carousel slide" data-interval="false">
    <div class="carousel-inner" aria-live="polite">
      <div class="carousel-item active" role="group"
           aria-roledescription="slide"
           aria-label="1 of 3">
        <img src="{{ root }}assets/img/1.png" class="d-block w-100" alt="Yale">
        <div class="carousel-caption">
          <p class="sr-only">Slide 1 of 3</p>
          <div>The beautiful Yale campus. </div>
        </div>
      </div>
      <div class="carousel-item" role="group"
           aria-roledescription="slide"
           aria-label="2 of 3">
        <img src="{{ root }}assets/img/2.png" class="d-block w-100" alt="Sterling Memorial Library">
        <div class="carousel-caption">
          <p class="sr-only">Slide 2 of 3</p>
          <div>The nave of Sterling Memorial Library. </div>
        </div>
      </div>
      <div class="carousel-item" role="group"
           aria-roledescription="slide"
           aria-label="3 of 3">
        <img src="{{ root }}assets/img/3.png" class="d-block w-100" alt="Woolsey Hall">
        <div class="carousel-caption">
          <p class="sr-only">Slide 3 of 3</p>
          <div>The ceiling of Woolsey Hall.</div>
        </div>
      </div>
    </div>
    <div class="carousel-control-prev">
      <button data-target="#carouselExampleCaptionsOnSlides" data-slide="prev">
        <span class="carousel-control-prev-icon mt-2" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
    </div>
    <div class="carousel-control-next">
      <button data-target="#carouselExampleCaptionsOnSlides" data-slide="next">
        <span class="carousel-control-next-icon mt-2" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
</section>

## Example of No Visible Captions

<section class="bd-example" aria-roledescription="carousel" aria-label="images of Yale">
  <div id="carouselExampleNoCaptions" class="carousel slide" data-interval="false">
    <div class="carousel-inner" aria-live="polite">
      <div class="carousel-item active" role="group"
           aria-roledescription="slide"
           aria-label="1 of 3">
        <img src="{{ root }}assets/img/1.png" class="d-block w-100" alt="Yale">
        <div class="carousel-caption sr-only">
          <strong>Slide 1 of 3</strong>
          <p>The beautiful Yale campus. </p>
        </div>
      </div>
      <div class="carousel-item" role="group"
           aria-roledescription="slide"
           aria-label="2 of 3">
        <img src="{{ root }}assets/img/2.png" class="d-block w-100" alt="Sterling Memorial Library">
        <div class="carousel-caption sr-only">
          <strong>Slide 2 of 3</strong>
          <p>The nave of Sterling Memorial Library. </p>
        </div>
      </div>
      <div class="carousel-item" role="group"
           aria-roledescription="slide"
           aria-label="3 of 3">
        <img src="{{ root }}assets/img/3.png" class="d-block w-100" alt="Woolsey Hall">
        <div class="carousel-caption sr-only">
          <strong>Slide 3 of 3</strong>
          <p>The ceiling of Woolsey Hall.</p>
        </div>
      </div>
    </div>
    <div class="carousel-control-prev">
      <button data-target="#carouselExampleNoCaptions" data-slide="prev">
        <span class="carousel-control-prev-icon mt-2" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
    </div>
    <div class="carousel-control-next">
      <button data-target="#carouselExampleNoCaptions" data-slide="next">
        <span class="carousel-control-next-icon mt-2" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
</section>
