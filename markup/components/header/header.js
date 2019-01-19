module.exports = {
  init: function () {
    var headerLink = $('.header__link, .header__logo a');
    headerLink.on('click', function (e) {
      e.preventDefault();
      var target = this.hash,
          $target = $(target),
          elemTop = $target.offset().top,
          headerHeight = $('.header__wrapper').innerHeight();
      $('html:not(:animated),body:not(:animated)').animate({scrollTop: elemTop - headerHeight}, 750);
    });

  }
};

