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
                    {% for service_item in collections.services %}
                        <li>
                            {# --- იკონი დაბრუნდა მარცხენა მენიუში --- #}
                            {% if service_item.data.icon %}
                                <div class="nav-icon-wrapper">
                                    {% include "animated-icons/" + service_item.data.icon + ".svg" %}
                                </div>
                            {% endif %}
                            <a href="#{{ service_item.data.slug }}">{{ service_item.data.title }}</a>
                        </li>
                    {% endfor %}
                </ul>
            </aside>
            <div class="services-content">
                {% for service_item in collections.services %}
                    <div id="{{ service_item.data.slug }}" class="service-category" data-aos="fade-up">
                        <div class="category-title-wrapper">
                            {# --- იკონი წაიშალა მარჯვენა სექციიდან --- #}
                            <h2>{{ service_item.data.title }}</h2>
                        </div>
                        <ul>
                            {% if service_item.data.service_list %}
                                {% for service in service_item.data.service_list %}
                                    <li>{{ service }}</li>
                                {% endfor %}
                            {% endif %}
                        </ul>
                        <a href="{{ service_item.url }}" class="details-link">დეტალურად →</a>
                    </div>
                {% endfor %}
            </div>
        </div>
    </div>
</section>