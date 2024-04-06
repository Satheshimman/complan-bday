const envelope = document.querySelector(".envelope-wrapper");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
});

var typed = new Typed(".text", {
  strings: [
    "Lusee...",
    "Pakki...",
    "Eruma...",
    "Madu...",
    "Paithiyam...",
    "Sandakarii...",
    "Care Taker",
    "Stress Buster",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
