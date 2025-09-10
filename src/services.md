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
            {% for item in collections.services %}
                <a href="{{ item.url }}" class="service-card glass-panel" data-aos="fade-up" data-aos-delay="{{ loop.index0 * 100 }}">
                    <div class="card-header">
                        <div class="card-icon">
                            {% if item.data.icon %}
                                 {# --- მთავარი შესწორება: გადავცემთ slug-ს, რომ ID იყოს უნიკალური --- #}
                                 {% include "animated-icons/" + item.data.icon + ".svg" with { slug: item.data.slug } %}
                            {% endif %}
                        </div>
                        <h3 class="card-title">{{ item.data.title }}</h3>
                    </div>
                    <span class="card-link">დეტალურად →</span>
                </a>
            {% endfor %}
        </div>
    </div>
</section>