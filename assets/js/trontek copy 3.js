gsap.registerPlugin(ScrollTrigger);
Splitting();
jQuery(document).ready(function ($) {


  function HeaderFade() {
    const menubar = document.querySelector("#header .cursor-pointer i");
    const logo = document.querySelector("#header a img");
    const button = document.querySelector("#header .topBottom a");

    ScrollTrigger.create({
      onUpdate: (self) => {
        const currentScrollY = self.scroll();
        const scrollDirection = self.direction;
        // console.log("currentScrollY", currentScrollY)

        if (currentScrollY >= 100 && scrollDirection === 1) {
          // Scrolling down - hide logo
          gsap.to(logo, {
            opacity: 0,
            y: -20, // Move up
            duration: 0.2,
            ease: "power1.out",
          });
        } else if (currentScrollY < 10) {
          // Only show logo when near the top
          gsap.to(logo, {
            opacity: 1,
            y: 0, // Reset position
            duration: 0.2,
            ease: "power1.out",
          });
        }

        // Menu and button animations
        if (scrollDirection === -1) {
          gsap.to(menubar, {
            opacity: 1,
            y: 0, // Reset position
            duration: 0.2,
            ease: "power1.out",
          });
          gsap.to(button, {
            opacity: 1,
            y: 0, // Reset position
            duration: 0.2,
            ease: "power1.out",
          });
        } else if (scrollDirection === 1) {
          gsap.to(menubar, {
            opacity: 0,
            // Move left
            duration: 0.1,
            ease: "power1.out",
          });
          gsap.to(button, {
            opacity: 0,
            // Move right
            duration: 0.1,
            ease: "power1.out",
          });
        }
      },
    });
  }
  HeaderFade();

  function MenuToggle() {
    $("#openMenu").click(function () {
      $(".menu").addClass("active");
    });

    $("#closeMenu").click(function () {
      $(".menu").removeClass("active")
    })
  }
  MenuToggle()

  function accordian(sA) {
    $(`${sA} .accordion-header`).click(function () {
      // Remove 'active' class from all headers and close their contents
      $(`${sA} .accordion-header`).not(this).removeClass('active').next().slideUp(200);
      $(this).toggleClass('active').next().slideToggle(200);
    });
  }
  accordian('.accordion');

  function productAccordian() {
    $(`.product-accordian-header`).click(function () {
      // Remove 'active' class from all headers and close their contents
      $(`.product-accordian-header`).not(this).removeClass('active').next().slideUp(200);
      $(this).toggleClass('active').next().slideToggle(200);
    });
  }
  productAccordian();

  function initializeFeatureToggles() {
    // Open the first accordion by default
    // const $firstBtn = $('.features-btn').first();
    // const $firstIcon = $firstBtn.find('.toggle-icon');
    // const $firstBody = $firstBtn.next('.features-body');

    // Set the active classes and initial icon for the first accordion
    // $firstIcon.addClass('active').html('<i class="fas fa-minus"></i>');
    // $firstBody.addClass('active');

    // Add click event to feature buttons
    $('.features-btn').click(function () {
      const $btn = $(this); // The clicked button
      const $icon = $btn.find('.toggle-icon'); // The icon inside the button
      const $body = $btn.next('.features-body'); // The associated body content

      // Toggle the active state of the icon and the body
      $icon.toggleClass('active');
      $body.toggleClass('active');
      $icon.html($icon.hasClass('active') ? '<i class="fas fa-minus"></i>' : '<i class="fas fa-plus"></i>');
    });
  }
  initializeFeatureToggles()

  function SaveElectricity() {
    $(".cost-save-btn").on("click", function () {
      $(".cost-save-btn").removeClass("active");
      $(".cost-save-item").removeClass("active");

      $(this).addClass("active");

      // Find the index of the clicked button
      const index = $(".cost-save-btn").index(this);

      // Add active class to the corresponding item
      $(".cost-save-item").eq(index).addClass("active");
    });
  }
  SaveElectricity()

  function swiperSliders() {
    // Home 
    var heroSliderThumbs = new Swiper(".heroSliderThumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const heroSlider = new Swiper('.heroSlider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      spaceBetween: 0,
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: heroSliderThumbs,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });

    // Product
    var productSliderThumbs = new Swiper(".productSliderThumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const productSlider = new Swiper('.productSlider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      spaceBetween: 0,
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: productSliderThumbs,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    });
    // featuresSlider
    const featuresSlider = new Swiper('.featuresSlider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      spaceBetween: 10,
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    // greenFuture
    const greenFuture = new Swiper('.greenFuture', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 20,
      speed: 1000,
      spaceBetween: 10,
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    });
  }
  swiperSliders();

  function gradienAnimation() {
    const gradientBoxs = document.querySelectorAll(".gradient-box");
    console.log("gradientBoxs", gradientBoxs)

    // Pin the engineer section
    ScrollTrigger.create({
      trigger: ".bg-text",
      start: "top top",
      end: `+=${gradientBoxs.length * 170}`, // Adjust end based on number of gradient boxes
      pin: true,
      markers: false, // Remove markers in production
    });
    // Pin the engineer section
    ScrollTrigger.create({
      trigger: ".pin-box",
      start: "center 50%",
      end: `+=${gradientBoxs.length * 170}`, // Adjust end based on number of gradient boxes
      pinSpacing: false,
      pin: true,
      // markers: true, // Remove markers in production
    });




    gradientBoxs.forEach((box, i) => {
      gsap.from(box, {
        opacity: i == 0 ? 1 : 0,
        y: 50, // Optional: Add vertical motion for 
        // better effect
        duration: 2.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: box,
          start: "top 50%", // Adjust trigger points
          end: "bottom 40%",
          scrub: true,
          markers: false,
          stagger: true,
          onLeave: () => {
            // Fade the current box out
            gsap.to(box, { opacity: i == 4 ? 1 : 0, duration: 0.5 });
          },
        },
      });
    });
  }

  // Call the function
  gradienAnimation();


});

jQuery(document).ready(function ($) {
  function bannerAnimation() {
    gsap.from(".topBottom", {
      y: -50,
      delay: 1,
      opacity: 0,
      stagger: 0.2
    })
    gsap.from(".hero-slider-content p, .hero-slider-content h1", {
      delay: 1.5,
      y: 10,
      opacity: 0,
      stagger: 0.3
    })
    gsap.from(".hero-slider-content div", {
      delay: 2,
      opacity: 0,

    })
  }
  bannerAnimation()

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#engineer-section",
      // markers: true, // For debugging purposes, remove in production
      start: "top 50%",
      end: "center 50%",
      scrub: true,
    },
  });

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
            start: "top 60%", // Adjusted start point for better isolation
            end: "45% 60%",
            scrub: true,
            markers: false, // Enable for debugging
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





  function cardAnimation() {
    // GSAP Hover Animation
    const groups = document.querySelectorAll(".power-items");

    groups.forEach((box, index) => {
      const img = box.querySelector("img"); // Get the image inside the box

      // Add mouseenter event listener
      box.addEventListener("mouseenter", () => {
        gsap.to(img, {
          rotateY: index % 2 === 0 ? -10 : 15, // Tilt on Y-axis
          rotateX: index % 2 === 0 ? -12 : 8, // Tilt on X-axis
          scale: 1.07, // Slight zoom-in effect
          duration: 0.8, // Smooth transition
          ease: "power3.out", // Smooth easing
          filter: "brightness(0) blur(0px)"
        });
      });

      // Add mouseleave event listener
      box.addEventListener("mouseleave", () => {
        gsap.to(img, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          filter: "brightness(1) blur(0px)"
        });
      });
    });

  }
  cardAnimation()


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
        markers: false, // Debugging
      },
    });

    homeTl.to(".luxurious-bg .anime-container", {
      opacity: 1,
      y: "-290px",
      duration: 2.5,
      ease: "power1.out",
      stagger: 0.1,
    });
  }

  function imageBlurdAnimation() {
    let homeTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".luxurious-bg",
        start: "top 50%",
        end: "60% 80%",
        scrub: true,
        // markers: true,
      },
    });
  
    homeTl
      .to(".luxurious-bg", {
        "--blur-amount": "0px", // Update blur variable
        // "--scale-amount": "1", // Update scale variable
        duration: 1, // Animation duration
      },"start")
      .to(".fade-text", {
        opacity: 1, // Fade in text
        duration: 1,
        ease: "power4.out",
      },"start");
  }
  
  imageBlurdAnimation();
  
  
  
  
  


  function AboutPageAnimation() {
    let svgTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutLineSection",
        start: "top 80%", // Trigger animation when the section is 80% visible
        end: "top 30%", // End animation when the section scrolls out of view
        scrub: true, // Smooth scrubbing effect
      },
    });

    svgTl.to(".line1", {
      height: "152px", // Start from height 0
      duration: 2, // Duration of the animation
      ease: "power4.inOut", // Smooth easing
      scrub: true,
      stagger: true
    })
      .to(".circle1", {
        ease: "power1.inOut",
        // markers: true,
        opacity: 1,
      })
      .to(".features-line", {
        ease: "power1.inOut",
        // markers: true,
        width: "5vw",
        scrub: true,
        stagger: true
      })
      .to(".line2", {
        height: "405px", // Start from height 0
        duration: 2, // Duration of the animation
        ease: "power4.inOut", // Smooth easing
        scrub: true,
        stagger: true
      }, "=+2")
      .to(".circle2", {
        ease: "power1.inOut",
        // markers: true,
        opacity: 1,
      })
  }

  // AboutPageAnimation()
});
















