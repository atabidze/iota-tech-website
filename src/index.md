---
title: Iota-Tech - Advanced IT Solutions
layout: base.njk
hero_title: Move Into the New Age of Accelerated Analytics
hero_subtitle: ჩვენ ვქმნით საიმედო IT ინფრასტრუქტურას ბიზნესებისთვის.
services_title: ჩვენი სერვისები
---

<section class="hero-section">
    <div class="container">
        <h1>{{ hero_title }}</h1>
        <p>{{ hero_subtitle }}</p>
    </div>
</section>

<section class="services-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h2>{{ services_title }}</h2>
        </div>
        <div class="services-grid">
            {# მთავარ გვერდზე ვაჩვენებთ პირველ 4 სერვისს #}
            {%- for item in collections.services | slice(0, 4) -%}
                {# ვამოწმებთ სათაურს, რათა ცარიელი ბარათები არ გამოჩნდეს #}
                {% if item.data.title %}
                    <a href="{{ item.url }}" class="service-card glass-panel" data-aos="fade-up" data-aos-delay="{{ loop.index0 * 100 }}">
                        <div class="card-icon">
                            {% if item.data.icon %}
                                 {% include "animated-icons/" + item.data.icon + ".svg" %}
                            {% endif %}
                        </div>
                        <h3 class="card-title">{{ item.data.title }}</h3>
                        <ul class="card-description">
                            {% for service_item in item.data.service_list %}
                                <li>{{ service_item }}</li>
                            {% endfor %}
                        </ul>
                        <span class="card-link">დეტალურად →</span>
                    </a>
                {% endif %}
            {%- endfor -%}
        </div>
    </div>
</section>
