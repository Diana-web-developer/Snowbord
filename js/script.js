$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    // и для slick-track добавить align-items: flex-start
    slidesToShow: 8,
    slidesToScroll: 2,
    speed: 500,
    easing: "linear",
    infinite: true,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    swipe: true,
    touchThreshold: 1,
    touchMove: true,
    waitForAnimate: false,
    centerMode: true,
    variableWidth: false,
    rows: 1,
    // Иначе не будет работать фильтр
    slidesPerRow: 1,
    vertical: false,
    verticalSwiping: false,
    // Чтобы показывалась только одна картинка или все:
    fade: false,
    // Связать два слайдера. В каждом слайдере указываем класс слайдера, с которым нужно связаться:
    //  для большого маленький, для маленького большой:
    // asNavFor: ".sliderbig",
    responsive: [
      {
        breakpoint: 425,
        settings: {
          // slidesToShow: 2,
          // slidesPerRow: 2,
          vertical: false,
          verticalSwiping: false,
        }
      }, {
        breakpoint: 375,
        settings: {
          // slidesToShow: 1,
          // slidesPerRow: 1,
          vertical: true,
          verticalSwiping: true,
        }
      }
    ],
    mobileFirst: false,
    // Перемещает стрелки в другой div:
    appendArrows: $('.arrows-for-slider'),
    // Перемещает точки в нужный div:
    // appenDots:
  });
  // //  Фильтрация (теги):
  // var filtered = false;
  // $(".all").on("click", function() {
  //   if (filtered === false) {
  //     $(".slider").slick("slickFilter", ".slider_item");
  //     $(this).text("All");
  //     filtered = true; 
  //   } else {
  //     $(".slider").slick("slickUnfilter");
  //     $(this).text("All");
  //     filtered = false;
  //   }
  //   return false;
  // });

  // var filtered = false;
  // $(".gray").on("click", function() {
  //   if (filtered === false) {
  //     $(".slider").slick("slickFilter", ".filter-gray");
  //     $(this).text("Back all");
  //     filtered = true; 
  //   }
  //   // Чтобы вернуть показ всех:
  //   else {
  //     $(".slider").slick("slickUnfilter");
  //     $(this).text("Gray");
  //     filtered = false;
  //   }
  //   return false;
  // });

  // var filtered = false;
  // $(".blue").on("click", function() {
  //   if (filtered === false) {
  //     $(".slider").slick("slickFilter", ".filter-blue");
  //     $(this).text("Back all");
  //     filtered = true; 
  //   }
  //   else {
  //     $(".slider").slick("slickUnfilter");
  //     $(this).text("Blue");
  //     filtered = false;
  //   }
  //   return false;
  // });


  // var filtered = false;
  // $(".light-blue").on("click", function () {
  //   if (filtered === false) {
  //     $(".slider").slick("slickFilter", ".filter-light-blue");
  //     $(this).text("Back all");
  //     filtered = true;
  //   }
  //   // Чтобы вернуть показ всех:
  //   else {
  //     $(".slider").slick("slickUnfilter");
  //     $(this).text("Light blue");
  //     filtered = false;
  //   }
  //   return false;
  // });


  // var filtered = false;
  // $(".red").on("click", function () {
  //   if (filtered === false) {
  //     $(".slider").slick("slickFilter", ".filter-red");
  //     $(this).text("Back all");
  //     filtered = true;
  //   }
  //   // Чтобы вернуть показ всех:
  //   else {
  //     $(".slider").slick("slickUnfilter");
  //     $(this).text("Red");
  //     filtered = false;
  //   }
  //   return false;
  // });

  // var filtered = false;
  // $(".yellow").on("click", function () {
  //   if (filtered === false) {
  //     $(".slider").slick("slickFilter", ".filter-yellow");
  //     $(this).text("Back all");
  //     filtered = true;
  //   }
  //   // Чтобы вернуть показ всех:
  //   else {
  //     $(".slider").slick("slickUnfilter");
  //     $(this).text("Yellow");
  //     filtered = false;
  //   }
  //   return false;
  // });



// Когда пользователь щелкает в любом месте за пределами модального, закройте его
  var modal = document.getElementById('id01');
  var modalSign = document.getElementById('id02');
  // Когда пользователь щелкает в любом месте за пределами модального, закройте его
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
      if (event.target == modalSign) {
        modalSign.style.display = "none";
      }
  }







  $(".slider-top-products").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    // и для slick-track добавить align-items: flex-start
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    easing: "linear",
    infinite: true,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: false,
    centerMode: true,
    variableWidth: false,
    rows: 1,
    // Иначе не будет работать фильтр
    slidesPerRow: 1,
    vertical: false,
    verticalSwiping: false,
    // Чтобы показывалась только одна картинка или все:
    fade: false,
    // Связать два слайдера. В каждом слайдере указываем класс слайдера, с которым нужно связаться:
    //  для большого маленький, для маленького большой:
    // asNavFor: ".sliderbig",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // slidesToShow: 2,
          // slidesPerRow: 2,
          vertical: false,
          verticalSwiping: false,
        }
      }, {
        breakpoint: 375,
        settings: {
          // slidesToShow: 1,
          // slidesPerRow: 1,
          vertical: true,
          verticalSwiping: true,
        }
      }
    ],
    mobileFirst: false,
    // Перемещает стрелки в другой div:
    appendArrows: $('.arrows-for-slider-top'),
    // Перемещает точки в нужный div:
    // appenDots:
  });
  
 



  $(".slider-sale-products").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    // и для slick-track добавить align-items: flex-start
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 500,
    easing: "linear",
    infinite: true,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: false,
    centerMode: true,
    variableWidth: false,
    rows: 1,
    // Иначе не будет работать фильтр
    slidesPerRow: 1,
    vertical: false,
    verticalSwiping: false,
    // Чтобы показывалась только одна картинка или все:
    fade: false,
    // Связать два слайдера. В каждом слайдере указываем класс слайдера, с которым нужно связаться:
    //  для большого маленький, для маленького большой:
    // asNavFor: ".sliderbig",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // slidesToShow: 2,
          // slidesPerRow: 2,
          vertical: false,
          verticalSwiping: false,
        }
      }, {
        breakpoint: 375,
        settings: {
          // slidesToShow: 1,
          // slidesPerRow: 1,
          vertical: true,
          verticalSwiping: true,
        }
      }
    ],
    mobileFirst: false,
    // Перемещает стрелки в другой div:
    appendArrows: $('.arrows-for-slider-sale'),
    // Перемещает точки в нужный div:
    // appenDots:
  });
  
  // Плавная прокрутка для всех ссылок: добавить класс go_to нужным ссылкам
  $(".go_to").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  // добавление тени у up я
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".container-in-header").addClass("shadow");
    }
    else {
      $('.shadow').removeClass("shadow");
    }
  });

});




// Заглавный слайдер:

var slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slider4 = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider4.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider4.oninput = function () {
  output.innerHTML = this.value;
}

