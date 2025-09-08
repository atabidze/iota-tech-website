---
title: ჩვენი სერვისები
layout: base.njk
permalink: /services/index.html
---

<section class="services-page-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h1>ჩვენი სერვისები</h1>
            <p>გაეცანით ჩვენს მიერ შემოთავაზებულ IT გადაწყვეტილებებს, რომლებიც მორგებულია თქვენი ბიზნესის უნიკალურ საჭიროებებზე.</p>
        </div>
        
        <div class="services-grid">
            {% for category in collections.services %}
                <!-- თითოეული სერვისი არის ცალკე, კლიკვადი ბარათი -->
                <a href="{{ category.url }}" class="service-card glass-panel" data-aos="fade-up" data-aos-delay="{{ loop.index0 * 100 }}">
                    <div class="card-icon">
                        {% if category.data.icon %}
                            {% include "animated-icons/" + category.data.icon + ".svg" %}
                        {% endif %}
                    </div>
                    <h3 class="card-title">{{ category.data.title }}</h3>
                    <span class="card-link">დეტალურად →</span>
                </a>
            {% endfor %}
        </div>
    </div>
</section>