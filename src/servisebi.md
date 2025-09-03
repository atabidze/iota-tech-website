---
title: ჩვენი სერვისები
layout: base.njk
permalink: /services/index.html
---

<section class="services-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h1>ჩვენი სერვისები</h1>
        </div>
        <div class="service-list">
            {% for service in collections.services %}
            <div class="service-row glass-panel" data-aos="fade-up" data-aos-delay="{{ service.data.aos_delay | default(0) }}">
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