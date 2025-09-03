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
                    {# შევცვალეთ კოლექციის სახელი #}
                    {% for category in collections.categories %}
                        <li><a href="#{{ category.fileSlug }}">{{ category.data.kategoriis_dasaxeleba | replace("I. ", "") | replace("II. ", "") | replace("III. ", "") | replace("IV. ", "") | replace("V. ", "") | replace("VI. ", "") | replace("VII. ", "") | replace("VIII. ", "") }}</a></li>
                    {% endfor %}
                </ul>
            </aside>

            <div class="services-content">
                {# შევცვალეთ კოლექციის სახელი #}
                {% for category in collections.categories %}
                    <div id="{{ category.fileSlug }}" class="service-category" data-aos="fade-up">
                        <h2>{{ category.data.kategoriis_dasaxeleba }}</h2>
                        <ul>
                            {% for service in category.data.servisebis_sia %}
                                <li>{{ service.name }}</li>
                            {% endfor %}
                        </ul>
                        <a href="/services/{{ category.fileSlug }}/" class="details-link">დეტალურად →</a>
                    </div>
                {% endfor %}
            </div>
        </div>
    </div>
</section>