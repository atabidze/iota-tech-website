---
title: ჩვენი სერვისები
layout: base.njk
permalink: /services/index.html
---

<section class="services-section">
    <div class="container">
        <div class="section-title" data-aos="fade-up">
            <h1>ჩვენი სერვისები</h1>
        </div>
        <div class="service-list">
            {# ეს კოდი ახლა უშეცდომოდ წამოიღებს ყველა სერვისს #}
            {% for service in collections.services %}
            <div class="service-row glass-panel" data-aos="fade-up" data-aos-delay="{{ service.data.aos_delay | default(0) }}">
                <div class="service-icon-container">
                    <div class="icon-bg {{ service.data.icon_color }}">
                        {% if service.data.icon == "mobile" %}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2H7C5.9 2 5.01 2.9 5.01 4L5 20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 18H7V6H17V18Z" fill="white"/></svg>
                        {% elif service.data.icon == "security" %}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 12H19C18.47 16.11 15.73 19.78 12 20.93V12H5V6.3L12 3.19V12Z" fill="white"/></svg>
                        {% elif service.data.icon == "consulting" %}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H4V4H20V6ZM20 18H4V12H20V18ZM18 14H6V16H18V14ZM22 10H2V8H22V10Z" fill="white"/></svg>
                        {% else %}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18Z" fill="white"/></svg>
                        {% endif %}
                    </div>
                </div>
                <div class="service-text">
                    <h3>{{ service.data.title }}</h3>
                    <p>{{ service.data.description }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>