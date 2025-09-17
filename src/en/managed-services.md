---
lang: en
permalink: /en/services/managed-services/
layout: base.njk
title: IT Outsourcing & Managed Services
---
<section class="page-section">
    <div class="container">
        <div class="section-title text-center" data-aos="fade-up">
            <h1>IT Outsourcing & Managed Services</h1>
            <p>Discover seamless IT support services for your business stability.</p>
        </div>
        <div class="service-content-wrapper" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services -%}
                {%- if service.data.lang == lang and service.data.category == 'managed-services' -%}
                    <article class="service-full-item">
                        <header class="service-full-header">
                            <div class="service-full-icon">
                            {% if service.data.icon %}
                                {% include "animated-icons/" + service.data.icon + ".svg" %}
                            {% endif %}
                            </div>
                            <h2>{{ service.data.title }}</h2>
                        </header>
                        <div class="service-full-description">
                            {{ service.data.general_description | markdownify | safe }}
                        </div>
                        {% if service.data.detailed_list %}
                        <ul class="service-detailed-list">
                            {% for item in service.data.detailed_list %}
                            <li>{{ item.point }}</li>
                            {% endfor %}
                        </ul>
                        {% endif %}
                    </article>
                {%- endif -%}
            {%- endfor -%}
        </div>
    </div>
</section>