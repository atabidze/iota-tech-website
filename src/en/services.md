---
lang: en
permalink: /en/services/
translationKey: servicesPage
layout: base.njk
title: Services
---

<section class="services-page-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h1>All Services</h1>
            <p>Explore our services that will help you improve your company's efficiency and security.</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services -%}
                {%- if service.data.lang == lang -%}
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
                {%- endif -%}
            {%- endfor -%}
        </div>
    </div>
</section>