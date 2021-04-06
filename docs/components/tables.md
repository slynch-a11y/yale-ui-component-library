---
tags: component
title: Tables
layout: main-layout.11ty.js
---

## Examples

### Basic Tables (With and Without Borders)

<div class="table-responsive">
    <table class="mb-3" tabindex="0">
        <caption>Yale Students by Gender</caption>
        <tbody>
            <tr>
                <th scope="col">Division</th>
                <th scope="col">Male</th>
                <th scope="col">Female</th>
                <th scope="col">Total</th>
                <th scope="col">% International*</th>
            </tr>
            <tr>
                <th scope="row">Yale College</th>
                <td>2,902</td>
                <td>2,844</td>
                <td>5,746</td>
                <td>11%</td>
            </tr>
            <tr>
                <th scope="row">Special (Degree &amp; Non-Degree)</th>
                <td>23</td>
                <td>6</td>
                <td>29</td>
                <td>0%</td>
            </tr>
            <tr>
                <th scope="row">Graduate School of Arts &amp; Sciences</th>
                <td>1,572</td>
                <td>1,386</td>
                <td>2,958</td>
                <td>37%</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="table-responsive">
    <table class="table-borderless mb-3" tabindex="0">
        <caption> Students </caption>
        <tbody>
            <tr>
                <th scope="col">Degree</th>
                <th scope="col">Men</th>
                <th scope="col">Women</th>
                <th scope="col">Total</th>
                <th scope="col">% Who are International</th>
            </tr>
            <tr>
                <th scope="row">Bachelors</th>
                <td>673</td>
                <td>686</td>
                <td>1,359</td>
                <td>9%</td>
            </tr>
            <tr>
                <th scope="row">Masters &amp; Post-Masters Certificates</th>
                <td>1,124</td>
                <td>1,153</td>
                <td>2,277</td>
                <td>32%</td>
            </tr>
            <tr>
                <th scope="row">Doctorates</th>
                <td>359</td>
                <td>350</td>
                <td>709</td>
                <td>17%</td>
            </tr>
            <tr>
                <th scope="row">Research &amp; Scholarship</th>
                <td>190</td>
                <td>185</td>
                <td>375</td>
                <td>26%</td>
            </tr>
            <tr>
                <th scope="row">Professional Practice</th>
                <td>169</td>
                <td>165</td>
                <td>334</td>
                <td>8%</td>
            </tr>
        </tbody>
    </table>
</div>

### Tables Using `thead` (With and Without Borders)

<div class="table-responsive">
    <table class="mb-3" tabindex="0">
        <caption>Table with <code>thead</code></caption>
        <thead>
            <tr>
                <th scope="col">Division</th>
                <th scope="col">Male</th>
                <th scope="col">Female</th>
                <th scope="col">Total</th>
                <th scope="col">% International*</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Yale College</th>
                <td>2,902</td>
                <td>2,844</td>
                <td>5,746</td>
                <td>11%</td>
            </tr>
            <tr>
                <th scope="row">Special (Degree &amp; Non-Degree)</th>
                <td>23</td>
                <td>6</td>
                <td>29</td>
                <td>0%</td>
            </tr>
            <tr>
                <th scope="row">Graduate School of Arts &amp; Sciences</th>
                <td>1,572</td>
                <td>1,386</td>
                <td>2,958</td>
                <td>37%</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="table-responsive">
    <table class="table-borderless mb-3" tabindex="0">
        <caption>Borderless Table with <code>thead</code></caption>
        <thead>
            <tr>
                <th scope="col">Degree</th>
                <th scope="col">Men</th>
                <th scope="col">Women</th>
                <th scope="col">Total</th>
                <th scope="col">% Who are International</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Bachelors</th>
                <td>673</td>
                <td>686</td>
                <td>1,359</td>
                <td>9%</td>
            </tr>
            <tr>
                <th scope="row">Masters &amp; Post-Masters Certificates</th>
                <td>1,124</td>
                <td>1,153</td>
                <td>2,277</td>
                <td>32%</td>
            </tr>
            <tr>
                <th scope="row">Doctorates</th>
                <td>359</td>
                <td>350</td>
                <td>709</td>
                <td>17%</td>
            </tr>
            <tr>
                <th scope="row">Research &amp; Scholarship</th>
                <td>190</td>
                <td>185</td>
                <td>375</td>
                <td>26%</td>
            </tr>
            <tr>
                <th scope="row">Professional Practice</th>
                <td>169</td>
                <td>165</td>
                <td>334</td>
                <td>8%</td>
            </tr>
        </tbody>
    </table>
</div>

### Table Using the `yale-table` Class

<div class="table-responsive">
    <table class="yale-table">
        <tbody>
            <tr>
                <th>Division</th>
                <th>Male</th>
                <th>Female</th>
                <th>Total</th>
                <th>%International*</th>
            </tr>
            <tr>
                <td>Yale College</td>
                <td>2,775</td>
                <td>2,678</td>
                <td>5,453</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>Special (Degree &amp; Non-Degree)</td>
                <td>18</td>
                <td>6</td>
                <td>24</td>
                <td>4%</td>
            </tr>
            <tr>
                <td>Graduate School of Arts &amp; Sciences</td>
                <td>1,552</td>
                <td>1,374</td>
                <td>2,926</td>
                <td>34%</td>
            </tr>
        </tbody>
    </table>
</div>
