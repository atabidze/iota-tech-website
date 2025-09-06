---
title: ჩვენი სერვისები
layout: base.njk
permalink: /services/index.html
katalogis_dasaxeleba: კატეგორიები
---
<section class="services-page-section">
    <div class="container">
        <div class="services-page-layout">
            <aside class="services-nav" data-aos="fade-right">
                <h3>{{ katalogis_dasaxeleba }}</h3>
                <ul>
                    {% for category in collections.services %}
                        <li>
                            {# --- მთავარი ცვლილება: იკონი გადმოვიტანეთ აქ --- #}
                            {% if category.data.icon %}
                                <div class="nav-icon-wrapper">
                                    {% include "animated-icons/" + category.data.icon + ".svg" %}
                                </div>
                            {% endif %}
                            <a href="#{{ category.data.slug }}">{{ category.data.title }}</a>
                        </li>
                    {% endfor %}
                </ul>
            </aside>
            <div class="services-content">
                {% for category in collections.services %}
                    <div id="{{ category.data.slug }}" class="service-category" data-aos="fade-up">
                        <div class="category-title-wrapper">
                            {# --- იკონი წაიშალა აქედან --- #}
                            <h2>{{ category.data.title }}</h2>
                        </div>
                        <ul>
                            {% if category.data.service_list %}
                                {% for service in category.data.service_list %}
                                    <li>{{ service }}</li>
                                {% endfor %}
                            {% endif %}
                        </ul>
                        <a href="{{ category.url }}" class="details-link">დეტალურად →</a>
                    </div>
                {% endfor %}
            </div>
        </div>
    </div>
</section>