document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('vanta-hero-bg')) {
    VANTA.FOG({
      el: "#vanta-hero-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0x2300ff,
      midtoneColor: 0x250072,
      lowlightColor: 0x200040,
      baseColor: 0x121212,
      blurFactor: 0.60,
      speed: 1.20,
      zoom: 0.80
    });
  }
});