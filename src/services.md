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
                        {# --- მთავარი შესწორება: ვიყენებთ slug-ს ფაილის სახელის ნაცვლად --- #}
                        <li><a href="#{{ category.data.slug }}">{{ category.data.kategoriis_dasaxeleba }}</a></li>
                    {% endfor %}
                </ul>
            </aside>

            <div class="services-content">
                {% for category in collections.categories %}
                    <div id="{{ category.data.slug }}" class="service-category" data-aos="fade-up">
                        <h2>{{ category.data.kategoriis_dasaxeleba }}</h2>
                        <ul>
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