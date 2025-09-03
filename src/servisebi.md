---
title: "ჩვენი სერვისები "
layout: base.njk
permalink: /services/index.html
service_categories:
  - id: cat1
    title: I. მომხმარებელთა და სამუშაო ადგილების მართვა
    sub_services:
      - name: ტექნიკური მხარდაჭერა (Help Desk)
      - name: ადგილზე მომსახურება (On-site Support)
    details_link: ""
  - id: cat2
    title: II. ქსელური ინფრასტრუქტურა
    sub_services:
      - name: ლოკალური ქსელის (LAN) და უსადენო ქსელის (Wi-Fi) დაგეგმვა და მართვა
      - name: ქსელური მოწყობილობების კონფიგურაცია
    details_link: ""
---

<section class="services-page-section">
    <div class="container">
        <div class="services-page-layout">
            <aside class="services-nav" data-aos="fade-right">
                <h3>კატეგორიები</h3>
                <ul>
                    {% for category in service_categories %}
                        <li><a href="#{{ category.id }}">{{ category.title | replace("I. ", "") | replace("II. ", "") | replace("III. ", "") | replace("IV. ", "") | replace("V. ", "") | replace("VI. ", "") | replace("VII. ", "") | replace("VIII. ", "") }}</a></li>
                    {% endfor %}
                </ul>
            </aside>

            <div class="services-content">
                {% for category in service_categories %}
                    <div id="{{ category.id }}" class="service-category" data-aos="fade-up">
                        <h2>{{ category.title }}</h2>
                        <ul>
                            {% for service in category.sub_services %}
                                <li>{{ service.name }}</li>
                            {% endfor %}
                        </ul>
                        {% if category.details_link %}
                            <a href="{{ category.details_link }}" class="details-link">დეტალურად →</a>
                        {% endif %}
                    </div>
                {% endfor %}
            </div>
        </div>
    </div>
</section>
