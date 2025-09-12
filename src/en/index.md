---
lang: en
permalink: /en/
layout: base.njk
title: Home
hero_title: Move Into the New Age of IOTA Technology
hero_subtitle: We offer innovative technological solutions for the growth and development of your business.
---

<section class="hero-section">
  <div class="container" data-aos="fade-up">
    <h1>{{ hero_title }}</h1>
    <p class="section-title-p">{{ hero_subtitle }}</p>
  </div>
</section>

<section id="home-services" class="services-page-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Explore our services that will help you improve your company's efficiency and security.</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            {% set serviceCounter = 0 %}
            {%- for service in collections.services -%}
                {# 1. Check the language; 2. Check that the service has a title #}
                {%- if service.data.lang == lang and service.data.title -%}
                    {% if serviceCounter < 4 %}
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
                        {% set serviceCounter = serviceCounter + 1 %}
                    {% endif %}
                {%- endif -%}
            {%- endfor -%}
        </div>
    </div>
</section>