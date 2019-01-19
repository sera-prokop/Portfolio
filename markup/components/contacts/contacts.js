module.exports = {
  init: function () {
    $('.contacts__form').submit(function (e) {
    e.preventDefault();
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST", //Метод отправки
      url: "send.php", //путь до php фаила отправителя
      data: form_data,
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        alert("Ваше сообщение отпрaвлено!");
        }
      });
    });
  }
};

