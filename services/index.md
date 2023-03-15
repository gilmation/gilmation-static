---
layout: default
title: Gilmation - Services
og_title: "Gilmation - Services"
og_url: https://gilmation.com
og_description: "Gilmation - Our Services"
og_image: https://gilmation.com/images/gilmation-logo-no-phrase.png
---
<div class="content-header"></div>
<div class="pure-g page-content">
  <div class="pure-u-1 block">
    <h2>Services</h2>
  </div>
</div>
<div class="pure-g page-content">
  <div class="pure-u-1 block">
      <p>The following are simple, concise overviews of the types of services that we provide (our one page synopsis is also available for download . The list is not meant to be exhaustive.</p>
      <p>Its goal is to describe what we do and how we go about doing it, without resorting to reams of "techie speak", lists of all the technologies that we have ever worked with or acronym littered hyperbole.</p>
      <p>This list in conjunction with the examples of our work should give you good idea of how we can combine our services. As part of your initial contact with us, we ask to work closely with you to define exactly what it is you need and how we can go about achieving it together.</p>
  </div>
</div>
{% for item in site.data.services %}
  <div class="pure-g page-content">
    <div class="pure-u-sm-1-2 pure-u-lg-1-2 block service">
      <h3>{{ item.service1 }}</h3>
      <p>{{ item.desc1 }}</p>
    </div>
    <div class="pure-u-sm-1-2 pure-u-lg-1-2 block service">
      <h3>{{ item.service2 }}</h3>
      <p>{{ item.desc2 }}</p>
    </div>
  </div>
{% endfor %}
<div class="pure-g page-content bottom-of-page-padding">
  <div class="pure-u-1 pure-u-lg-1-3 block">
  </div>
</div>