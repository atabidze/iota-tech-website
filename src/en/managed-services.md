---
lang: en
permalink: /en/services/managed-services/
layout: base.njk
title: IT Outsourcing & Managed Services
---
<section class="services-page-section">
    <div class="container">
        <div class="section-title text-center" data-aos="fade-up">
            <h1>IT Outsourcing & Managed Services</h1>
            <p>Discover seamless IT support services for your business stability.</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services -%}
                {%- if service.data.lang == lang and service.data.category == 'managed-services' -%}
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
                            Details →
                        </div>
                    </a>
                {%- endif -%}
            {%- endfor -%}
        </div>
    </div>
</section>