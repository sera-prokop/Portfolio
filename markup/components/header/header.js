module.exports = {
  init: function () {

    var headerTop = $('.header__top'),
        headerTopHeight = headerTop.innerHeight(),
        headerAbout = $('.header__about');
    headerAbout.css({
      marginTop: headerTopHeight
    });

    var headerLink = $('.header__link, .header__logo a');
    headerLink.on('click keypress', function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target),
          elemTop = $target.offset().top,
          headerHeight = $('.header__wrapper').innerHeight();
      $('html:not(:animated),body:not(:animated)').animate({scrollTop: elemTop - headerHeight}, 750);

      if (e.keyCode === 0 || e.keyCode === 32) {
        e.preventDefault();
        $('html:not(:animated),body:not(:animated)').animate({scrollTop: elemTop - headerHeight}, 750);
      }

    });
  }
};

