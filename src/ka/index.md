---
lang: ka
permalink: /
layout: base.njk
title: დიაგნოსტიკა
---

<section style="padding-top: 150px; color: white; background: #111; font-family: monospace; font-size: 14px; line-height: 1.6;">
    <div class="container">
        <h1>დიაგნოსტიკის გვერდი</h1>
        
        <hr style="border-color: #444;">
        <h2>`collections.services` ანალიზი:</h2>
        <p>სერვისების რაოდენობა სულ: <strong>{{ collections.services | length }}</strong></p>
        
        <hr style="border-color: #444;">
        
        {% for service in collections.services %}
            <div style="background: #222; padding: 15px; border-radius: 5px; margin-bottom: 15px;">
                <h3>სერვისის ფაილი: {{ service.inputPath }}</h3>
                <pre><code>
---
fileSlug: {{ service.fileSlug }}
url: {{ service.url }}
lang: {{ service.data.lang }}
title: {{ service.data.title }}
sort_order: {{ service.data.sort_order }}
icon: {{ service.data.icon }}
translationKey: {{ service.data.translationKey }}
---
                </code></pre>
            </div>
        {% endfor %}
        
    </div>
</section>