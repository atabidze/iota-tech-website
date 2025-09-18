---
lang: ka
permalink: /services/
layout: base.njk
templateEngineOverride: njk
title: "ტექნოლოგიური გადაწყვეტილებები თქვენი ბიზნესისთვის"
subtitle: "აირჩიეთ პარტნიორობის მოდელი, რომელიც ყველაზე მეტად შეესაბამება თქვენს მიზნებს - უწყვეტი IT მხარდაჭერა თუ კომპლექსური პროექტის განხორციელება."
card1_title: "IT აუთსორსინგი და მართვადი სერვისები"
card1_desc: "ჩვენ ვხდებით თქვენი კომპანიის სრულფასოვანი IT გუნდი და პარტნიორი, რომელიც ზრუნავს ტექნოლოგიებზე, რათა თქვენ შეძლოთ ბიზნესის ზრდაზე ფოკუსირება."
card1_list:
  - item: "ყოველდღიური IT მხარდაჭერა (Helpdesk)"
  - item: "პროაქტიული მონიტორინგი და ადმინისტრირება"
  - item: "კიბერუსაფრთხოების მართვა"
  - item: "მონაცემთა დაცვა და აღდგენა"
  - item: "სტრატეგიული IT კონსულტაცია"
card2_title: "სისტემური ინტეგრაცია და პროექტები"
card2_desc: "ჩვენ ვქმნით და ვნერგავთ კომპლექსურ IT ინფრასტრუქტურას თქვენი ბიზნესის ამბიციური მიზნებისთვის."
card2_list:
  - item: "IT ინფრასტრუქტურის პროექტები"
  - item: "ქლაუდ ტრანსფორმაცია"
  - item: "უსაფრთხოების სისტემების დანერგვა"
  - item: "საკომუნიკაციო გადაწყვეტილებები"
---
<section class="page-section">
    <div class="container">
        <div class="section-title text-center" data-aos="fade-up">
            <h1>{{ title }}</h1>
            <p>{{ subtitle }}</p>
        </div>
        <div class="service-hub-grid" data-aos="fade-up" data-aos-delay="200">
            <a href="/services/managed-services/" class="hub-card glass-panel">
                <h2>{{ card1_title }}</h2>
                <p>{{ card1_desc }}</p>
                {% if card1_list %}
                <ul class="hub-card-list">
                    {% for point in card1_list %}
                    <li>{{ point.item }}</li>
                    {% endfor %}
                </ul>
                {% endif %}
                <span class="hub-card-cta">სრულად →</span>
            </a>
            <a href="/services/projects/" class="hub-card glass-panel">
                <h2>{{ card2_title }}</h2>
                <p>{{ card2_desc }}</p>
                {% if card2_list %}
                <ul class="hub-card-list">
                    {% for point in card2_list %}
                    <li>{{ point.item }}</li>
                    {% endfor %}
                </ul>
                {% endif %}
                <span class="hub-card-cta">სრულად →</span>
            </a>
        </div>
    </div>
</section>