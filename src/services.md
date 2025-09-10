---
layout: base.njk
title: IOTA Tech
hero_title: ინოვაციური IT გადაწყვეტილებები თქვენი ბიზნესისთვის
hero_subtitle: ჩვენ ვქმნით უნიკალურ ვებ-გვერდებს, მობილურ აპლიკაციებსა და პროგრამულ უზრუნველყოფას, რათა დავეხმაროთ თქვენს კომპანიას ზრდასა და განვითარებაში.
templateEngineOverride: njk, md
---

<section class="hero-section">
    <div class="container hero-content" data-aos="fade-in">
        <h1>{{ hero_title }}</h1>
        <p>{{ hero_subtitle }}</p>
        <a href="/contact/" class="cta-button">დაგვიკავშირდით</a>
    </div>
</section>

<section id="home-services" class="home-services-section">
    <div class="container">
        <div class="section-title text-center" data-aos="fade-up">
            <h2>ჩვენი სერვისები</h2>
            <p>გთავაზობთ სრულ IT მომსახურებას, რომელიც დაგეხმარებათ იყოთ კონკურენტუნარიანი ციფრულ სამყაროში.</p>
        </div>
        
        <div class="services-grid">
            {# მთავარ გვერდზე ვაჩვენებთ პირველ 4 სერვისს, დალაგებულს რიგითობის მიხედვით #}
            {%- for item in collections.services | sortBy('data.sort_order') | slice(0, 4) -%}
                <a href="{{ item.url }}" class="service-card glass-panel" data-aos="fade-up" data-aos-delay="{{ loop.index0 * 100 }}">
                    <div class="card-header">
                        <div class="card-icon">
                            {% if item.data.icon %}
                                {% include "animated-icons/" + item.data.icon + ".svg" %}
                            {% endif %}
                        </div>
                        <h3 class="card-title">{{ item.data.title }}</h3>
                    </div>
                    <span class="card-link">დეტალურად →</span>
                </a>
            {%- endfor -%}
        </div>

        <div class="view-all-services" data-aos="fade-up">
            <a href="/services/" class="cta-button-secondary">ყველა სერვისის ნახვა</a>
        </div>
    </div>
</section>