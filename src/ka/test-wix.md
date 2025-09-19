---
layout: "base.njk"
title: "Wix დიზაინის ტესტი"
permalink: "/test-wix/"
---

<div class="wix-style-wrapper">
    <section class="hero-section-wix">
        <div id="wix-tsparticles" class="wix-tsparticles"></div>
        <div class="container" data-aos="fade-up">
            <h1 class="hero-title-wix">INNOVATION & TECHNOLOGY</h1>
            <p class="hero-subtitle-wix">We Are the Architects of the Future</p>
        </div>
    </section>

    <section class="services-section-wix">
        <div class="container">
            <div class="section-title text-center" data-aos="fade-up">
                <h2>Our Services</h2>
            </div>
            <div class="services-grid-wix">
                <div class="wix-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="wix-card-icon">{% lucide 'server-cog' %}</div>
                    <h3 class="wix-card-title">Managed Services</h3>
                    <p class="wix-card-desc">Full lifecycle management of your IT infrastructure and services.</p>
                </div>
                <div class="wix-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="wix-card-icon">{% lucide 'shield-check' %}</div>
                    <h3 class="wix-card-title">Cyber Security</h3>
                    <p class="wix-card-desc">Protecting your digital assets with advanced security solutions.</p>
                </div>
                <div class="wix-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="wix-card-icon">{% lucide 'wifi' %}</div>
                    <h3 class="wix-card-title">Network Solutions</h3>
                    <p class="wix-card-desc">Designing and implementing robust and scalable network architectures.</p>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('wix-tsparticles')) {
    tsParticles.load('wix-tsparticles', {
      fpsLimit: 60,
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 1, random: { enable: true, minimumValue: 0.5 } },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }
});
</script>