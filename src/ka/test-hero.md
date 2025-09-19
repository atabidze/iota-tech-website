---
layout: "base.njk"
title: "Hero ანიმაციის ტესტი"
permalink: "/test-hero/"
---

<section class="hero-section full-height">
    <div class="container hero-container">
        <div class="hero-content" data-aos="fade-right">
            <p class="hero-subtitle">გადაწყვეტილებები მომთხოვნი ბიზნესისთვის</p>
            <h1 class="hero-title">IT ინტეგრატორი<br>კომპანია</h1>
            <p class="hero-description">კომპანია გთავაზობთ სრულყოფილ გადაწყვეტილებებს მსხვილი და საშუალო ბიზნესისთვის.</p>
        </div>
        <div class="hero-animation" id="vanta-hero-bg"></div>
    </div>
</section>

<script>
  // ეს კოდი გაეშვება მხოლოდ ამ გვერდზე
  VANTA.FOG({
    el: "#vanta-hero-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x0022ff, // უფრო მკვეთრი ლურჯი
    midtoneColor: 0x000d66,   // ღრმა ლურჯი
    lowlightColor: 0x05001a,   // ძალიან მუქი ლურჯი
    baseColor: 0x121212,
    blurFactor: 0.75,         // მეტი "სითხის" ეფექტისთვის
    speed: 0.8,               // ოდნავ ნელი მოძრაობა
    zoom: 1.5                 // მთავარი პარამეტრი, ქმნის "ბურთის" ეფექტს
  });
</script>