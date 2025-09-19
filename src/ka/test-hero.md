---
layout: "base.njk"
title: "Hero ანიმაციის ტესტი"
permalink: "/test-hero/"
---

{# --- ახალი Hero სექცია --- #}
<section class="hero-section full-height">
    <div class="container hero-container">
        <div class="hero-content" data-aos="fade-right">
            <p class="hero-subtitle">გადაწყვეტილებები მომთხოვნი ბიზნესისთვის</p>
            <h1 class="hero-title">IT ინტეგრატორი<br>კომპანია</h1>
            <p class="hero-description">კომპანია გთავაზობთ სრულყოფილ გადაწყვეტილებებს მსხვილი და საშუალო ბიზნესისთვის.</p>
        </div>
        <div class="hero-animation" data-aos="fade-left" data-aos-duration="1000">
            <svg id="blob-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <path id="blob-path" fill="url(#gradient)" filter="url(#glow)">
                    <animate attributeName="d"
                             dur="15s"
                             repeatCount="indefinite"
                             values="M444,242.5Q413,235,394.5,257.5Q376,280,378,323Q380,366,354,394.5Q328,423,289,429Q250,435,214.5,422Q179,409,139,394Q99,379,84.5,344.5Q70,310,51,280Q32,250,56.5,219Q81,188,96.5,152.5Q112,117,151,91Q190,65,220,70.5Q250,76,282.5,88Q315,100,345,123.5Q375,147,409.5,173.5Q444,200,444,242.5Z;
                             M431.5,249.5Q429,249,410,277.5Q391,306,375.5,340Q360,374,330,391.5Q300,409,265,420Q230,431,195,422.5Q160,414,124.5,396Q89,378,74.5,344Q60,310,48,280Q36,250,47,215.5Q58,181,87.5,159.5Q117,138,149,116Q181,94,215.5,88.5Q250,83,285,93.5Q320,104,352.5,122Q385,140,408.5,170Q432,200,431.5,249.5Z;
                             M438,245.5Q421,241,408,269Q395,297,372.5,331Q350,365,317.5,380.5Q285,396,252.5,417Q220,438,183.5,433Q147,428,114,405Q81,382,65,346.5Q49,311,31,280.5Q13,250,38.5,221Q64,192,77.5,157.5Q91,123,129.5,104.5Q168,86,209,79Q250,72,284,84.5Q318,97,351,117Q384,137,411,168.5Q438,200,438,245.5Z;
                             M444,242.5Q413,235,394.5,257.5Q376,280,378,323Q380,366,354,394.5Q328,423,289,429Q250,435,214.5,422Q179,409,139,394Q99,379,84.5,344.5Q70,310,51,280Q32,250,56.5,219Q81,188,96.5,152.5Q112,117,151,91Q190,65,220,70.5Q250,76,282.5,88Q315,100,345,123.5Q375,147,409.5,173.5Q444,200,444,242.5Z;
                             "/>
                </path>
                <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style="stop-color: #0d00ff; stop-opacity: 0.8"/>
                    <stop offset="100%" style="stop-color: #020024; stop-opacity: 0.8"/>
                </radialGradient>
            </svg>
        </div>
    </div>
</section>