---
lang: ka
permalink: /services/projects/
layout: base.njk
title: სისტემური ინტეგრაცია და პროექტები
---
<section class="services-page-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h1>სისტემური ინტეგრაცია და პროექტები</h1>
            <p>განახორციელეთ კომპლექსური ტექნოლოგიური პროექტები ჩვენს გუნდთან ერთად.</p>
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
                            მეტის ნახვა →
                        </div>
                    </a>
                {%- endif -%}
            {%- endfor -%}
        </div>
    </div>
</section>