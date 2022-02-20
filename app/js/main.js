$(function () {

  $('.mobile-filter__btn').on('click', function () {
    $('.programs__filters').toggleClass('programs__filters--active');
  });

  $('.mobile-filter__btn-close').on('click', function () {
    $('.programs__filters').toggleClass('programs__filters--active');
  });

  $(".programs__duration-input").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.programs__duration-from').text(data.from);
      $('.programs__duration-to').text(data.to);
    },
    onChange: function (data) {
      $('.programs__duration-from').text(data.from);
      $('.programs__duration-to').text(data.to);
    },
  });

  $('.footer__heading').on('click', function () {
    $(this).siblings().slideToggle();
    $(this).toggleClass('active');
  });


  $('.header__btn').on('click', function () {
    $('.header__btn').toggleClass('header__btn--active');
    $('.burger-menu').toggleClass('burger-menu--active');
  });

  $('.menu__list-link--address, .cities-menu__button').on('click', function () {
    $('.menu__list-link--address').toggleClass('menu__list-link--active');
    $('.cities-menu').toggleClass('cities-menu--active');
  });


  $('.filter-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.filter-tabs__link').removeClass('filter-tabs__link--active');
    $(this).addClass('filter-tabs__link--active');

    $('.filter-tabs__content-item').removeClass('filter-tabs__content-item--active');
    $($(this).attr('href')).addClass('filter-tabs__content-item--active');
  });

  $('.authorization-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.authorization-tabs__link').removeClass('authorization-tabs__link--active');
    $(this).addClass('authorization-tabs__link--active');

    $('.authorization-tabs__content-item').removeClass('authorization-tabs__content-item--active');
    $($(this).attr('href')).addClass('authorization-tabs__content-item--active');
  });

  $('.reviews__slider-star').rateYo({
    rating: 4.87,
    starWidth: "20px",
    readOnly: true,
    numStars: 1,
    normalFill: "#ececec",
    ratedFill: "#F7941D",
    spacing: "6px",
    starSvg: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M10.9345 0L14.2124 6.42295L21.3339 7.55557L16.2382 12.6578L17.3617 19.7807L10.9345 16.5111L4.50737 19.7807L5.63085 12.6578L0.535173 7.55557L7.65667 6.42295L10.9345 0Z"fill = "#F7941D"/></svg>',
  });


  $('.reviews__slider-list').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


});