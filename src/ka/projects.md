---
lang: ka
permalink: /services/projects/
layout: base.njk
title: სისტემური ინტეგრაცია და პროექტები
---
<section class="page-section">
    <div class="container">
        <div class="section-title text-center" data-aos="fade-up">
            <h1>სისტემური ინტეგრაცია და პროექტები</h1>
            <p>განახორციელეთ კომპლექსური ტექნოლოგიური პროექტები ჩვენს გუნდთან ერთად.</p>
        </div>
        <div class="accordion-wrapper" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services -%}
                {%- if service.data.lang == lang and service.data.category == 'projects' -%}
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