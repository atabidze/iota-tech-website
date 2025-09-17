---
lang: en
permalink: /en/services/projects/
layout: base.njk
title: System Integration & Projects
---
<section class="services-page-section">
    <div class="container">
        <div class="section-title text-center" data-aos="fade-up">
            <h1>System Integration & Projects</h1>
            <p>Implement complex technological projects with our team.</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services -%}
                {%- if service.data.lang == lang and service.data.category == 'projects' -%}
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