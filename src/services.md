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
                        {# ბმული მარცხენა მენიუში #}
                        <li><a href="#{{ category.fileSlug }}">{{ category.data.kategoriis_dasaxeleba }}</a></li>
                    {% endfor %}
                </ul>
            </aside>

            <div class="services-content">
                {% for category in collections.categories %}
                    <div id="{{ category.fileSlug }}" class="service-category" data-aos="fade-up">
                        <h2>{{ category.data.kategoriis_dasaxeleba }}</h2>
                        <ul>
                            {# ვამოწმებთ, რომ სერვისების სია არსებობს #}
                            {% if category.data.servisebis_sia %}
                                {% for service in category.data.servisebis_sia %}
                                    <li>{{ service.name }}</li>
                                {% endfor %}
                            {% endif %}
                        </ul>
                        {# "დეტალურად" ბმული, რომელიც იყენებს Eleventy-ს გენერირებულ მისამართს #}
                        <a href="{{ category.url }}" class="details-link">დეტალურად →</a>
                    </div>
                {% endfor %}
            </div>
        </div>
    </div>
</section>