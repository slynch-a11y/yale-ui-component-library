---
tags: component
title: Forms
layout: main-layout.11ty.js
---

<form>
    <div class="form-group">
        <label for="exampleInputEmail1" class="label-required">Email address</label>
        <input type="email" required autocomplete="email" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1" class="label-required">Password</label>
        <input type="password" required autocomplete="current-password" class="form-control" id="exampleInputPassword1"
            placeholder="Password">
    </div>
</form>

<div class="form-group">
<label for="fname">First Name:</label>
<input type="text" name="fname" id="fname" class="form-control">
</div>

<fieldset class="form-group">
    <legend>Radio buttons in a fieldset with a legend</legend>
    <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1"
                checked="">
            Option one is this and that—be sure to include why it's great
        </label>
    </div>
    <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
            Option two can be something else and selecting it will deselect option one
        </label>
    </div>
    <div class="form-check disabled">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3"
                disabled="">
            Option three is disabled
        </label>
    </div>
</fieldset>

<form>
  <div class="form-group">
    <label for="exampleSelect1">Example select</label>
      <select class="form-control" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
  </div>

  <div class="form-group">
    <label for="exampleSelect2">Example multiple select</label>
      <select multiple="" class="form-control" id="exampleSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
  </div>
                
  <div class="form-group">
    <label for="exampleTextarea">Example textarea</label>
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
  </div>
                
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
    <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line. </small>
  </div>
                
  <div class="form-group">
    <fieldset>
     <label class="control-label" for="readOnlyInput">Readonly input</label>
     <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input here…" readonly="">
    </fieldset>
  </div>
                
  <div class="form-group has-success">
    <label class="form-control-label" for="inputValid">Valid input</label>
    <input type="text" value="correct value" class="form-control is-valid" id="inputValid">
    <div class="valid-feedback">Success! You've done it.</div>
  </div>

  <div class="form-group has-danger">
    <label class="form-control-label" for="inputInvalid">Invalid input</label>
    <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid">
    <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
  </div>

  <div class="form-group">
    <label class="col-form-label col-form-label-lg" for="inputLarge">Large input</label>
    <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" id="inputLarge">
  </div>

  <div class="form-group">
    <label class="col-form-label" for="inputDefault">Default input</label>
    <input type="text" class="form-control" placeholder="Default input" id="inputDefault">
  </div>

  <div class="form-group">
    <label class="col-form-label col-form-label-sm" for="inputSmall">Small input</label>
    <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall">
  </div>
</form>

<form>
  <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck1">
      <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
  </div>
  <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
      <label class="custom-control-label" for="customCheckDisabled">Check this disabled checkbox</label>
  </div>
  <fieldset>
      <legend>Custom Radio Buttons</legend>
      <div class="custom-control custom-radio">
          <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
          <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
      </div>
      <div class="custom-control custom-radio">
          <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
          <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
      </div>
      <div class="custom-control custom-radio">
          <input type="radio" id="radio3" name="customRadio" id="customRadioDisabled"
              class="custom-control-input" disabled>
          <label class="custom-control-label" for="customRadioDisabled">Disabled Radio Button</label>
      </div>
  </fieldset>
  <fieldset>
      <legend>Inline Custom Radio Buttons</legend>
      <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="customRadioInline1" name="customRadioInline1"
              class="custom-control-input">
          <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="customRadioInline2" name="customRadioInline1"
              class="custom-control-input">
          <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom
              radio</label>
      </div>
  </fieldset>
  <div class="form-group">
      <label for="customSelect">Custom Select</label>
      <select id="customSelect" class="custom-select">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
      </select>
  </div>
  <div class="custom-file">
      <input type="file" class="custom-file-input" id="customFile">
      <label class="custom-file-label" for="customFile">Choose file</label>
  </div>
  <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="customSwitch1">
      <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
  </div>
  <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
      <label class="custom-control-label" for="customSwitch2">Disabled switch element</label>
  </div>
  <div class="form-group">
      <label for="customRange1">Example range</label>
      <input type="range" class="custom-range" id="customRange1">
  </div>
</form>
