---
lang: ka
permalink: /
layout: base.njk
title: დიაგნოსტიკა
---

<section style="padding-top: 150px; color: white; background: #111; font-family: monospace;">
    <div class="container">
        <h1>დიაგნოსტიკის გვერდი</h1>
        
        <hr>
        <h2>`collections.services` ცვლადის ანალიზი:</h2>
        <p>სერვისების რაოდენობა სულ: <strong>{{ collections.services | length }}</strong></p>
        
        <hr>
        <h2>გაფილტრული ქართული სერვისები (KA):</h2>
        {% for service in collections.services %}
            {% if service.data.lang == 'ka' %}
                <pre style="background: #222; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <code>{{ service.data | dump | safe }}</code>
                </pre>
            {% endif %}
        {% endfor %}
        
        <hr>
        <h2>გაფილტრული ინგლისური სერვისები (EN):</h2>
        {% for service in collections.services %}
            {% if service.data.lang == 'en' %}
                <pre style="background: #222; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                    <code>{{ service.data | dump | safe }}</code>
                </pre>
            {% endif %}
        {% endfor %}
        
    </div>
</section>