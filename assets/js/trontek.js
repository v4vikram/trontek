gsap.registerPlugin(ScrollTrigger);
Splitting();
jQuery(document).ready(function ($) {
  function HeaderFade() {
    const navbar = document.querySelector("#header");
    ScrollTrigger.create({
      onUpdate: (self) => {
        const currentScrollY = self.scroll();
        const scrollDirection = self.direction;

        if (currentScrollY > 50 && scrollDirection === 1) {
          gsap.to(navbar, {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
          });
        } else if (scrollDirection === -1) {
          gsap.to(navbar, {
            opacity: 1,
            duration: 0.2,
            ease: "power1.out",
          });
        }

        lastScrollY = currentScrollY;
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

  function process() {
    // const processItems = document.querySelectorAll(".anime-items");



    processItems.forEach((section, i) => {
      gsap.from(section, {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 50%",
          pin: true,
          scrub: true,
          markers: false,
          onEnter: () => {
            // Fade in the current section
            gsap.to(section, { opacity: 1, duration: 1 });

            // Fade out the previous section if it exists
            // if (i > 0) {
            //   gsap.to(processItems[i - 1], { opacity: 0 });
            // }
          },
          onLeave: () => {
            // Fade out the current section
            gsap.to(section, { opacity: 0, duration: 0.5 });
          },
          // onEnterBack: () => {
          //   // Fade in the current section
          //   gsap.to(section, { opacity: 1, duration: 1 });

          //   // Fade out the next section if it exists
          //   if (i < processItems.length - 1) {
          //     gsap.to(processItems[i + 1], { opacity: 0, duration: 0.5 });
          //   }
          // },
          // onLeaveBack: () => {
          //   // Fade out the current section
          //   gsap.to(section, { opacity: 0, duration: 1 });
          // },
        },
      });
    });

    // Pin the middle column
    // const processWrapper = document.querySelector(".process-left-wrapper");

    // if (processWrapper) {
    //   const totalHeight = processWrapper.scrollHeight - window.innerHeight * 0.8;

    //   ScrollTrigger.create({
    //     trigger: ".pin-box2",
    //     pin: true,
    //     start: "0 1%",
    //     end: `+=${totalHeight}`, // Pin until the total height of all process items
    //     scrub: true,
    //   });
    // }
  }

  // Call the function
  // process();

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
    // GSAP ScrollTrigger Animation for Multiple Sections
    gsap.utils.toArray(".split-text").forEach((title) => {
      const section = title.closest("section"); // Get the parent section for each title
      const lines = title.querySelectorAll(".word, .char"); // Target words and characters
      const subheading = section.querySelector(".subHeadingAnime"); // Target subheading within the section
      const subPara = section.querySelector(".sub-para"); // Target subheading within the section
      const learnMore = section.querySelector(".learn-more"); // Target subheading within the section

      if (lines.length && section) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section, // Use the parent section as the trigger
            // markers: true, // For debugging, remove in production
            start: "top 50%",
            end: "center 50%",
            scrub: true,
          },
        });

        // Split-text animation
        tl.from(lines, {
          yPercent: 100, // Move lines from below
          opacity: 0,
          duration: 1,
          stagger: 0.05, // Delay between each word or character
          ease: "power4.out",
        });

        // Subheading animation (after split-text animation)
        if (subheading) {
          tl.from(subheading, {
            y: 100, // Slide in from left
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          });
        }
        if (subPara) {
          tl.from(subPara, {
            y: 0, // Slide in from left
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          });
        }
        if (learnMore) {
          tl.from(learnMore, {
            y: 0, // Slide in from left
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          });
        }

      } else {
        console.warn("No lines or subheading found or section missing for:", title);
      }
    });
  }
  HeadingAnimation()

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
          filter: "brightness(1) blur(0px)"
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

  function HomePageAnimation(){
    let homeTl = gsap.timeline({
      scrollTrigger:{
        trigger:".luxurious-bg img",
        start:"top top",
        end:"bottom top",
        markers:false,
        pinSpacing: false,
        pin:false,
        invalidateOnRefresh: true
      }
    })
    homeTl.to('.luxurious-bg .anime-container',{
      opacity: 1,
      y:"-400px",
      scrub:true,
      duration: 1, // Add duration to control the speed of the animation
      stagger: 0.3
    })
   
  }
  // HomePageAnimation()

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
        markers: true,
        opacity: 1,
      })
      .to(".features-line", {
        ease: "power1.inOut",
        markers: true,
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
        markers: true,
        opacity: 1,
      })
  }

  // AboutPageAnimation()
});
















