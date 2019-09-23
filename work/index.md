---
layout: default
title: Gilmation - Our Work
og_title: "Gilmation - Our Work"
og_url: https://gilmation.com
og_description: "Gilmation - Our Work"
og_image: https://gilmation.com/images/gilmation-logo-no-phrase.png
---
<div class="content-header"></div>
<div class="pure-g page-content">
  <div class="pure-u-1 block">
    <h2>{{ page.title }}</h2>
  </div>
</div>
{% for item in site.data.work %}
  <div class="pure-g page-content">
    <div class="pure-u-sm-1-2 pure-u-lg-1-2 work">
      <div class="pure-g">
        <div class="pure-u-sm-1-2 pure-u-lg-1-2">
          <img src="/images/{{ item.image1 }}" alt="{{ item.client1 }}" title="{{ item.client1 }}" class="pure-img">
        </div>
        <div class="pure-u-sm-1-2 pure-u-lg-1-2">
          <h3>{{ item.client1 }}</h3>
          <p>{{ item.desc1 }}</p>
        </div>
      </div>
    </div>
    <div class="pure-u-sm-1-2 pure-u-lg-1-2 work">
      <div class="pure-g">
        <div class="pure-u-sm-1-2 pure-u-lg-1-2">
          <img src="/images/{{ item.image2 }}" alt="{{ item.client2 }}" title="{{ item.client2 }}" class="pure-img">
        </div>
        <div class="pure-u-sm-1-2 pure-u-lg-1-2">
          <h3>{{ item.client2 }}</h3>
          <p>{{ item.desc2 }}</p>
        </div>
      </div>
    </div>
  </div>
{% endfor %}
<div class="pure-g page-content bottom-of-page-padding">
  <div class="pure-u-1 pure-u-lg-1-3 block">
  </div>
</div>