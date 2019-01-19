module.exports = {
  init: function () {
    var headerLink = $('.header__link');
    headerLink.on('click', function (e) {
      // e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      var elemTop = $target.offset().top;
      $('html:not(:animated),body:not(:animated)').animate({scrollTop: elemTop}, 750);

    });

  }
};

