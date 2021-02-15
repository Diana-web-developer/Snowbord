  $(document).ready(function () {
    $(".slider").slick({
        arrows: true,
       dots: false,
         adaptiveHeight: true,
        slidesToShow: 6,
         slidesToScroll: 6,
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
         waitForAnimate: true,  
//         centerMode: true, 
//         variableWidth: false, 
//         rows: 0,
//         slidesPerRow: 1,
         vertical: false, 
         verticalSwiping: false,
//         fade: false,
        
      
    })
 })