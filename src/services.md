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
                    {% for category in collections.categories %}
                        <li><a href="#{{ category.data.slug }}">{{ category.data.title }}</a></li>
                    {% endfor %}
                </ul>
            </aside>
            <div class="services-content">
                {% for category in collections.categories %}
                    <div id="{{ category.data.slug }}" class="service-category" data-aos="fade-up">
                        <div class="category-title-wrapper">
                            {% if category.data.icon %}
                                <i data-lucide="{{ category.data.icon }}"></i>
                            {% endif %}
                            <h2>{{ category.data.title }}</h2>
                        </div>
                        <ul>
                            {% if category.data.services %}
                                {% for service in category.data.services %}
                                    <li>
                                        {% if service.icon %}
                                            <i data-lucide="{{ service.icon }}"></i>
                                        {% endif %}
                                        <span>{{ service.name }}</span>
                                    </li>
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