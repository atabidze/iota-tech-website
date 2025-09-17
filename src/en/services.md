---
lang: en
permalink: /en/services/
layout: base.njk
# The fields below are managed from the Admin Panel
title: Technological Solutions for Your Business
subtitle: Choose the partnership model that best suits your goals - continuous IT support or complex project implementation.
card1_title: IT Outsourcing & Managed Services
card1_desc: (Text to be edited from the Admin Panel will go here)
card2_title: System Integration & Projects
card2_desc: (Text to be edited from the Admin Panel will go here)
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
                <span class="hub-card-cta">View Services →</span>
            </a>
            <a href="/en/services/projects/" class="hub-card glass-panel">
                <h2>{{ card2_title }}</h2>
                <p>{{ card2_desc }}</p>
                <span class="hub-card-cta">View Projects →</span>
            </a>
        </div>
    </div>
</section>

{# You can add the "Why Iota?" section here in the future #}