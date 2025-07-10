// assets/main.js
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          zobra: '#c29d59',
          gold: '#FFD700',
          brand: {
            light: '#a7f3d0',
            DEFAULT: '#10b981',
            dark: '#047857',
          }
        }
      }
    }
  } 
document.addEventListener('DOMContentLoaded', function () {
  // Navbar toggle logic
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('mobile-menu-expanded');
      mobileMenu.classList.toggle('mobile-menu-collapsed');
    });
  } else {
    console.error("Error: Mobile menu button or menu element not found. Check IDs in HTML.");
  }

  // Initialize Swiper for Stories Section
  const storySwiper = new Swiper('.story-swiper', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: false,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: false,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: false,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: false,
      }
    }
  });

  // Video modal handling
  const videoModal = document.getElementById('video-modal');
  const modalVideoPlayer = document.getElementById('modal-video-player');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalUserName = document.getElementById('modal-user-name');
  const storyCardLinks = document.querySelectorAll('.story-card-link');

  storyCardLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const videoSrc = this.dataset.videoSrc;
      const userName = this.querySelector('p') ? this.querySelector('p').textContent : 'Zobra Restaurant';

      if (videoSrc) {
        modalVideoPlayer.src = videoSrc;
        modalUserName.textContent = userName;
        videoModal.classList.remove('hidden');
        modalVideoPlayer.play();
      }
    });
  });

  closeModalBtn.addEventListener('click', function () {
    videoModal.classList.add('hidden');
    modalVideoPlayer.pause();
    modalVideoPlayer.src = '';
  });

  videoModal.addEventListener('click', function (event) {
    if (event.target === videoModal) {
      videoModal.classList.add('hidden');
      modalVideoPlayer.pause();
      modalVideoPlayer.src = '';
    }
  });

  // Our Spaces Swiper initialization for mobile
  const ourSpacesGrid = document.querySelector('.myImageSection');
  let ourSpacesSwiper = null;

  function initializeSwiper() {
    ourSpacesGrid.classList.add('swiper', 'our-spaces-swiper', 'swiper-initialized');

    const cards = Array.from(ourSpacesGrid.querySelectorAll('.myImageItem'));

    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-wrapper');

    cards.forEach(card => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.appendChild(card);
      wrapper.appendChild(slide);
    });

    while (ourSpacesGrid.firstChild) {
      ourSpacesGrid.removeChild(ourSpacesGrid.firstChild);
    }
    ourSpacesGrid.appendChild(wrapper);

    const paginationEl = document.querySelector('.our-spaces-pagination');
    if (paginationEl && !ourSpacesGrid.contains(paginationEl)) {
      ourSpacesGrid.parentElement.appendChild(paginationEl);
    }

    ourSpacesSwiper = new Swiper('.our-spaces-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.our-spaces-pagination',
        clickable: true,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  if (window.innerWidth < 768) {
    initializeSwiper();
  }
});

// AOS initialization - outside DOMContentLoaded to make sure it runs ASAP
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
});

// Initialize Swiper for testimonials
var my_swipper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Initialize Swiper for Stories Section (second instance in original)
var storiesSwiper = new Swiper(".storiesSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Navbar background toggle on scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-gray-900', 'shadow-lg');
  } else {
    navbar.classList.remove('bg-gray-900', 'shadow-lg');
  }
});


// script for about page


// Navbar toggle script
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('mobile-menu-expanded');
      mobileMenu.classList.toggle('mobile-menu-collapsed');
    });
  } else {
    console.error("Error: Mobile menu button or menu element not found. Check IDs in HTML.");
  }
});

// Additional navbar links toggle logic — check existence and toggle flex/hidden class
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mainNavLinks = document.getElementById('main-nav-links');

  if (mobileMenuButton && mainNavLinks) {
    mobileMenuButton.addEventListener('click', () => {
      mainNavLinks.classList.toggle('hidden');
      mainNavLinks.classList.toggle('flex');
    });

    // Optional: Hide the mobile menu when a link is clicked (on small screens)
    mainNavLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          mainNavLinks.classList.add('hidden');
          mainNavLinks.classList.remove('flex');
        }
      });
    });
  }
});


// uparrow script

  const backToTopBtn = document.getElementById('backToTopBtn');

  // Show button after scrolling down 200px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.remove('hidden');
    } else {
      backToTopBtn.classList.add('hidden');
    }
  });

  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });




  // menu script
 
  // Navbar toggle script
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      // Toggle showing/hiding the mobile menu
      mobileMenu.classList.toggle('mobile-menu-expanded');
      mobileMenu.classList.toggle('mobile-menu-collapsed');
    });
  } else {
    console.error("Error: Mobile menu button or menu element not found. Check IDs in HTML.");
  }
});

// Initialize AOS library
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: 'ease-out',
      once: true,    // animation happens only once while scrolling down
    });
  }
});

// service page 

// document.addEventListener('DOMContentLoaded', function () {

//       new Splide('#room-slider', {
//         type: 'loop',
//         perPage: 3,
//         gap: '1.5rem',
//         autoplay: true,
//         interval: 3000,
//         pauseOnHover: true,
//         breakpoints: {
//           1024: {
//             perPage: 2,
//           },
//           768: {
//             perPage: 1,
//             gap: '1rem',
//           },
//         },
//       }).mount();
//     });