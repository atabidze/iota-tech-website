---
lang: en
permalink: /en/
translationKey: homePage
layout: base.njk
title: Home
---

<section class="hero-section">
  <div class="container" data-aos="fade-up">
    <h1>Move Into the New Age of IOTA Technology</h1>
    <p class="section-title-p">We offer innovative technological solutions for the growth and development of your business.</p>
  </div>
</section>

<section id="home-services" class="services-page-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Explore our services that will help you improve your company's efficiency and security.</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services | reverse | slice(0, 4) -%}
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
                        Learn More →
                    </div>
                </a>
            {%- endfor -%}
        </div>
    </div>
</section>