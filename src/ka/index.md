---
lang: ka
permalink: /
translationKey: homePage
layout: base.njk
title: მთავარი
---

<section class="hero-section">
  <div class="container" data-aos="fade-up">
    <h1>Move Into the New Age of IOTA Technology</h1>
    <p class="section-title-p">ჩვენ გთავაზობთ ინოვაციურ ტექნოლოგიურ გადაწყვეტილებებს თქვენი ბიზნესის ზრდისა და განვითარებისთვის.</p>
  </div>
</section>

<section id="home-services" class="services-page-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h2>ჩვენი სერვისები</h2>
            <p>გაეცანით ჩვენს სერვისებს, რომლებიც დაგეხმარებათ გააუმჯობესოთ თქვენი კომპანიის ეფექტურობა და უსაფრთხოება.</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services | where("data.lang", lang) | reverse | slice(0, 4) -%}
                <a href="{{ service.url }}" class="service-card glass-panel">
                    <div class="card-header">
                        <div class="card-icon">
                        {% if service.data.icon %}
                            {% include "animated-icons/" + service.data.icon + ".svg" %}
                        {% endif %}
                        </div>
                        <h3 class="card-title">{{ service.data.title }}</h3>
                    </div>
                    <div class="card-link">
                        მეტის ნახვა →
                    </div>
                </a>
            {%- endfor -%}
        </div>
    </div>
</section>