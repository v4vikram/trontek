function lenisScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Smooth easing
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  gsap.registerPlugin(ScrollTrigger);
  lenis.on("scroll", ScrollTrigger.update);
}
lenisScroll();

// =========== Animations ===========
// Initialize Splitting.js
Splitting();
jQuery(document).ready(function ($) {
  const navbar = document.querySelector("#header");

  // GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  
  ScrollTrigger.create({
    onUpdate: (self) => {
      const currentScrollY = self.scroll();
      const scrollDirection = self.direction;

      if (currentScrollY > 300 && scrollDirection === 1) {
        // Scrolling down: Hide the navbar
        gsap.to(navbar, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      } else if (scrollDirection === -1) {
        // Scrolling up: Show the navbar immediately
        gsap.to(navbar, {
          opacity: 1,
          duration: 0.2, // Faster response when scrolling up
          ease: "power1.out",
        });
      }

      lastScrollY = currentScrollY;
    },
  });

  // GSAP ScrollTrigger Animation for Text Reveal
  gsap.utils.toArray(".split-text").forEach((title) => {
    console.log(title);
    const lines = title.querySelectorAll(".word, .char");

    gsap.from(lines, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%", // Start animation when the section is near the viewport
        end: "top 20%",
        markers: false, // Show markers for debugging
        scrub: true, // Smooth scrubbing with Lenis
      },
      yPercent: 100, // Move lines from below
      opacity: 0,
      duration: 1,
      stagger: 0.05, // Delay between each word or character
      ease: "power4.out",
    });
  });

  ScrollTrigger.create({
    trigger: "#engineer-section",
    start: "top top", // Pin when top of #engineer-section touches the top of the viewport
    end: "bottom center", // Unpin when bottom of #engineer-section reaches the center of the viewport
    pin: true, // Pin the section
    markers: true, // Show markers for debugging
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#engineer-section",
      markers: true, // For debugging purposes
      start: "top 50%", // Adjust as needed
      end: "center 50%", // Adjust as needed
      scrub: 3, // Smooth scrolling effect with a slight delay
    },
  });

  // First Animation: #trontek-wrapper
  tl.fromTo(
    "#trontek-wrapper",
    {
      x: "150%", // Start offscreen to the right
      opacity: 0, // Fully transparent
    },
    {
      x: "0%", // Move to the original position
      opacity: 1, // Fully visible
      ease: "power1.out", // Smoother easing
    }
  );

  // Second Animation: .anime-box elements with stagger
  tl.fromTo(
    ".anime-box",
    {
      x: "100%", // Start offscreen to the right
      opacity: 0, // Fully transparent
    },
    {
      x: "0%", // Move to the original position
      opacity: 1, // Fully visible
      stagger: 0.5, // Delay between animations for each box
      ease: "power1.out", // Smooth easing for each element
    }
  );

});

jQuery(document).ready(function ($) {
  $("#toggleMenu").click(function () {
    $(this).toggleClass("active");
  });
});
