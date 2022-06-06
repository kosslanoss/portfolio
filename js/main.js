$(function(){

  $('.menu__btn').on('click', function () {
    $('.header-menu').toggleClass('header-menu--active');
    $('body').css('background-color', 'rgba(0, 0, 0, 0.15)');
  });

  $('.button-close').on('click', function () {
    $('.header-menu').removeClass('header-menu--active');
    $('body').css('background-color', '#fff');
  });

  $('.user-nav__search-btn').on('click', function () {
    $('.search').toggleClass('search--active');
    $('.user-nav__search-btn').toggleClass('user-nav__search-btn--active');
  });

  $('.header-bottom__catalog-btn').on('click', function(){
    $('.header-bottom__catalog-list').toggleClass('header-bottom__catalog-list--active');
    $('.header-bottom__catalog-btn').toggleClass('header-bottom__catalog-btn--active');
  });

  $('.hero__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.brands__items').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  var mixer = mixitup('.product__items');
  var mixer = mixitup('.promo__items');

  $('.star').rateYo({
 
    numStars: 1,
    readOnly: true,
    starWidth: 16,
    starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M0.0229731 5.79566C0.0780973 5.62595 0.224753 5.50226 0.401315 5.47663L5.36139 4.75586L7.57966 0.26128C7.6586 0.101281 7.82157 0 7.99997 0C8.17841 0 8.34135 0.101281 8.42032 0.26128L10.6387 4.75586L15.5987 5.47663C15.7752 5.50226 15.9219 5.62595 15.977 5.79563C16.0322 5.96535 15.9862 6.15163 15.8584 6.27616L12.2694 9.77471L13.1165 14.7148C13.1467 14.8907 13.0744 15.0683 12.9301 15.1733C12.8484 15.2326 12.7517 15.2628 12.6545 15.2628C12.5799 15.2628 12.505 15.245 12.4365 15.2089L8 12.8765L3.56374 15.2089C3.40577 15.2919 3.21443 15.2781 3.07009 15.1732C2.92574 15.0683 2.8534 14.8906 2.88356 14.7147L3.73096 9.77471L0.141566 6.27613C0.0138168 6.15163 -0.0322151 5.96535 0.0229731 5.79566Z" fill="#FFB800"/></svg>'
    
  });
                
})