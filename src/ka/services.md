---
lang: ka
permalink: /services/
translationKey: servicesPage
layout: base.njk
title: სერვისები
---

<section class="services-page-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h1>ყველა სერვისი</h1>
            <p>გაეცანით ჩვენს სერვისებს, რომლებიც დაგეხმარებათ გააუმჯობესოთ თქვენი კომპანიის ეფექტურობა და უსაფრთხოება.</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.services | where("data.lang", lang) -%}
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
            {%- endfor -%}
        </div>
    </div>
</section>