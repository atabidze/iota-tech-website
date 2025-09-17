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
        <div class="accordion-wrapper" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services -%}
                {%- if service.data.lang == lang and service.data.category == 'managed-services' -%}
                    <div class="accordion-item">
                        <button class="accordion-header" aria-expanded="false">
                            <div class="service-full-icon">
                            {% if service.data.icon %}
                                {% include "animated-icons/" + service.data.icon + ".svg" %}
                            {% endif %}
                            </div>
                            <span class="accordion-title">{{ service.data.title }}</span>
                            <span class="accordion-indicator">+</span>
                        </button>
                        <div class="accordion-panel" hidden>
                            <div class="accordion-content">
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
                            </div>
                        </div>
                    </div>
                {%- endif -%}
            {%- endfor -%}
        </div>
    </div>
</section>