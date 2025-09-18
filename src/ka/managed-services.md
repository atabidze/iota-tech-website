---
lang: ka
permalink: /services/managed-services/
layout: base.njk
title: IT აუთსორსინგი და მართვადი სერვისები
---
<section class="services-page-section">
    <div class="container">
        <div class="section-title text-center" data-aos="fade-up">
            <h1>IT აუთსორსინგი და მართვადი სერვისები</h1>
            <p>აღმოაჩინეთ უწყვეტი IT მხარდაჭერის სერვისები თქვენი ბიზნესის სტაბილურობისთვის.</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            {%- for service in collections.managed_services | getAndSortServices(lang) -%}
                <a href="{{ service.url }}" class="service-card glass-panel">
                    <div class="card-header">
                        <div class="card-icon">
                        {% if service.data.icon %}
                            {% lucide service.data.icon %}
                        {% endif %}
                        </div>
                        <h3 class="card-title">{{ service.data.title }}</h3>
                    </div>
                    <div class="card-link">
                        დეტალურად →
                    </div>
                </a>
            {%- endfor -%}
        </div>
    </div>
</section>