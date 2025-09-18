---
lang: en
permalink: /en/services/
layout: base.njk
templateEngineOverride: njk
title: "Technological Solutions for Your Business"
subtitle: "Choose the partnership model that best suits your goals - continuous IT support or complex project implementation."
card1_title: "IT Outsourcing & Managed Services"
card1_desc: "We act as your dedicated IT team and partner, managing your technology so you can focus on business growth."
card1_list:
  - item: "Daily IT Support (Helpdesk)"
  - item: "Proactive Monitoring & Administration"
  - item: "Cybersecurity Management"
  - item: "Data Protection & Recovery"
  - item: "Strategic IT Consulting"
card2_title: "System Integration & Projects"
card2_desc: "We design and implement complex IT infrastructure to achieve your business's most ambitious goals."
card2_list:
  - item: "IT Infrastructure Projects"
  - item: "Cloud Transformation"
  - item: "Security Systems Implementation"
  - item: "Communication Solutions"
---
<section class="page-section">
    <div class="container">
        <div class="section-title text-center" data-aos="fade-up">
            <h1>{{ title }}</h1>
            <p>{{ subtitle }}</p>
        </div>
        <div class="service-hub-grid" data-aos="fade-up" data-aos-delay="200">
            <a href="/en/services/managed-services/" class="hub-card glass-panel">
                <h2>{{ card1_title }}</h2>
                <p>{{ card1_desc }}</p>
                {% if card1_list %}
                <ul class="hub-card-list">
                    {% for point in card1_list %}
                    <li>{{ point.item }}</li>
                    {% endfor %}
                </ul>
                {% endif %}
                <span class="hub-card-cta">Details →</span>
            </a>
            <a href="/en/services/projects/" class="hub-card glass-panel">
                <h2>{{ card2_title }}</h2>
                <p>{{ card2_desc }}</p>
                {% if card2_list %}
                <ul class="hub-card-list">
                    {% for point in card2_list %}
                    <li>{{ point.item }}</li>
                    {% endfor %}
                </ul>
                {% endif %}
                <span class="hub-card-cta">Details →</span>
            </a>
        </div>
    </div>
</section>