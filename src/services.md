---
layout: base.njk
title: ჩვენი სერვისები
---

<section class="services-list-section">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <h1>ჩვენი სერვისები</h1>
            <p>ჩვენ გთავაზობთ ინოვაციურ ტექნოლოგიურ გადაწყვეტილებებს თქვენი ბიზნესის ზრდისა და ეფექტურობისთვის.</p>
        </div>

        <div class="service-cards-container" data-aos="fade-up" data-aos-delay="200">
            {% for service in collections.services %}
                <a href="{{ service.url }}" class="service-card-link">
                    <div class="service-card glass-panel">
                        <div class="card-icon">
                            {% if service.data.icon %}
                                {% include "animated-icons/" + service.data.icon + ".svg" %}
                            {% endif %}
                        </div>
                        <h3>{{ service.data.title }}</h3>
                        <p>{{ service.data.summary }}</p>
                        <span class="read-more">
                            გაიგე მეტი
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                    </div>
                </a>
            {% endfor %}
        </div>
    </div>
</section>