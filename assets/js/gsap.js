gsap.registerPlugin(ScrollTrigger);
Splitting();
jQuery(document).ready(function ($) {
  function HeadingAnimation() {
    gsap.utils.toArray(".split-text").forEach((title) => {
      const section = title.closest("section"); // Get the parent section
      const lines = title.querySelectorAll(".word, .char");
      const subheading = section.querySelector(".subHeadingAnime");
      const subPara = section.querySelector(".sub-para");
      const learnMore = section.querySelector(".learn-more");
  
      // Skip the luxurious section
      if (section && section.classList.contains("luxurious-bg")) {
        console.log("Skipping HeadingAnimation for luxurious-bg section");
        return;
      }
  
      if (lines.length && section) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section, // Use the parent section
            start: "top 80%", // Adjusted start point for better isolation
            end: "top 50%",
            scrub: true,
            markers: true, // Enable for debugging
          },
        });
  
        // Split-text animation
        tl.from(lines, {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
        });
  
        // Subheading animation
        if (subheading) {
          tl.from(subheading, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          });
        }
        if (subPara) {
          tl.from(subPara, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          });
        }
        if (learnMore) {
          tl.from(learnMore, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out",
          });
        }
      }
    });
  }
  HeadingAnimation();
  
  function imageFixedAnimation() {
    let homeTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".luxurious-bg img", // Ensures only the Luxurious section triggers this
        start: "top top",
        end: "bottom bottom",
        pin: ".luxurious-bg img", // Pin the section (image included)
        pinSpacing: false, // Prevent layout conflicts
        scrub: true,
        invalidateOnRefresh: true,
        markers: true, // Debugging
      },
    });
  
    homeTl.to(".luxurious-bg .anime-container", {
      opacity: 1,
      y: "-200px",
      duration: 1,
      stagger: 0.3,
    });
  }
  
  imageFixedAnimation();
  
});


















