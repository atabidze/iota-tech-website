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
        <div class="service-list">
            {% for service in collections.services %}
            <div class="service-row glass-panel" data-aos="fade-up" data-aos-delay="{{ service.data.aos_delay }}">
                <div class="service-icon-container">
                    <div class="icon-bg {{ service.data.icon_color }}">
                        <i data-lucide="{{ service.data.icon | default('help-circle') }}"></i>
                    </div>
                </div>
                <div class="service-text">
                    <h3>{{ service.data.title }}</h3>
                    <p>{{ service.data.description }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>