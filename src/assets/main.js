// ეს კოდი იმუშავებს მხოლოდ იმ გვერდზე, სადაც #vanta-hero-bg ელემენტი არსებობს.
if (document.getElementById('vanta-hero-bg')) {
  VANTA.FOG({
    el: "#vanta-hero-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x2300ff, // მთავარი ლურჯი ფერი
    midtoneColor: 0x250072,   // შუალედური მუქი ლურჯი
    lowlightColor: 0x200040,  // ყველაზე მუქი იისფერი-ლურჯი
    baseColor: 0x121212,      // ფონის ფერი, ემთხვევა საიტის ფონს
    blurFactor: 0.60,
    speed: 1.20,
    zoom: 0.80
  });
}