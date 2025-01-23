gsap.registerPlugin(ScrollTrigger);

jQuery(document).ready(function ($) {
  console.log($('.place-card')[0])
  // $('place-card.place-card-large').parent().css("display","none")
  $("#openMenu").click(function () {
    $(".menu").addClass("active");
  });

  $("#closeMenu").click(function(){
    $(".menu").removeClass("active")
  })

// Function to handle accordion functionality
function accordian(sA) {
  // Add click event for accordion headers
  $(`${sA} .accordion-header`).click(function () {
    // Remove 'active' class from all headers and close their contents
    $(`${sA} .accordion-header`).not(this).removeClass('active').next().slideUp(200);
    // Toggle the clicked header's active state and its content
    $(this).toggleClass('active').next().slideToggle(200);
  });
}
accordian('.accordion');

function productAccordian(sA) {
  // Add click event for accordion headers
  $(`.product-accordian-header`).click(function () {
    // Remove 'active' class from all headers and close their contents
    $(`.product-accordian-header`).not(this).removeClass('active').next().slideUp(200);
    // Toggle the clicked header's active state and its content
    $(this).toggleClass('active').next().slideToggle(200);
  });
}


productAccordian();

function initializeFeatureToggles() {
  // Open the first accordion by default
  const $firstBtn = $('.features-btn').first();
  const $firstIcon = $firstBtn.find('.toggle-icon');
  const $firstBody = $firstBtn.next('.features-body');

  // Set the active classes and initial icon for the first accordion
  $firstIcon.addClass('active').html('<i class="fas fa-minus"></i>');
  $firstBody.addClass('active');

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





      // When a button is clicked
    $(".cost-save-btn").on("click", function () {
      // Remove active class from all buttons and items
      $(".cost-save-btn").removeClass("active");
      $(".cost-save-item").removeClass("active");

      // Add active class to the clicked button
      $(this).addClass("active");

      // Find the index of the clicked button
      const index = $(".cost-save-btn").index(this);

      // Add active class to the corresponding item
      $(".cost-save-item").eq(index).addClass("active");
    });
});

const navbar = document.querySelector("#header");
ScrollTrigger.create({
  onUpdate: (self) => {
    const currentScrollY = self.scroll();
    const scrollDirection = self.direction;

    if (currentScrollY > 50 && scrollDirection === 1) {
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
process();


