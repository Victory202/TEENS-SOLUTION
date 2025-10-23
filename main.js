// === Verse Generator ===
const verses = [
  { text: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."', ref: "Jeremiah 29:11" },
  { text: '"I can do all things through Christ who strengthens me."', ref: "Philippians 4:13" },
  { text: '"Don’t let anyone look down on you because you are young, but set an example for the believers."', ref: "1 Timothy 4:12" },
  { text: '"The Lord is my shepherd; I shall not want."', ref: "Psalm 23:1" },
  { text: '"Trust in the Lord with all your heart and lean not on your own understanding."', ref: "Proverbs 3:5" }
];

function getNewVerse() {
  const verse = verses[Math.floor(Math.random() * verses.length)];
  document.querySelector("#verse blockquote p").innerText = verse.text;
  document.querySelector("#verse blockquote cite").innerText = verse.ref;
}

// Auto rotate verses every 10s
setInterval(getNewVerse, 10000);


// === Hero Slider ===
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slider .slide");
const prevBtn = document.querySelector(".hero-slider .prev");
const nextBtn = document.querySelector(".hero-slider .next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlideFn() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlideFn);
}

setInterval(nextSlide, 8000); // auto change every 8s


// === Gallery Lightbox ===
const galleryImages = document.querySelectorAll("#gallery img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = "100%";
    lightbox.style.height = "100%";
    lightbox.style.background = "rgba(0,0,0,0.9)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.zIndex = 1000;

    const imgClone = document.createElement("img");
    imgClone.src = img.src;
    imgClone.style.maxWidth = "90%";
    imgClone.style.maxHeight = "80%";
    imgClone.style.border = "4px solid white";
    imgClone.style.borderRadius = "8px";

    lightbox.appendChild(imgClone);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => {
      document.body.removeChild(lightbox);
    });
  });
});


// === Smooth Scroll (extra polish) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
