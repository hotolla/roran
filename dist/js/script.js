const teamSlider = new Swiper(".team__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    },
  },
});

function tabs() {
  var tabNavs = document.querySelectorAll(".nav-tab");
  var tabPanes = document.querySelectorAll(".tab-pane");

  for (var i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeTabAttr = e.target.getAttribute("data-tab");

      for (var j = 0; j < tabNavs.length; j++) {
        var contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
          tabNavs[j].classList.add("active");
          tabPanes[j].classList.add("active");
        } else {
          tabNavs[j].classList.remove("active");
          tabPanes[j].classList.remove("active");
        }
      }
    });
  }
}

tabs();

function burger() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".info__mobile");
  const menuItem = document.querySelectorAll(".menu__item");

  burger.addEventListener("click", function () {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  });

  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      menu.classList.remove("active");
      burger.classList.remove("active");
    });
  });
}

burger();
