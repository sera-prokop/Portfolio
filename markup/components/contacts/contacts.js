module.exports = {
    init: function () {
        $('.contacts__form').submit(function (e) {
            e.preventDefault();
            var form_data = $(this).serialize();
            console.log(form_data);
            $.ajax({
                type: "POST", //Метод отправки
                url: "send.php", //путь до php фаила отправителя
                data: form_data,
                success: function () {
                    //код в этом блоке выполняется при успешной отправке сообщения
                    alert("Ваше сообщение отпрaвлено!");
                    $('input, textarea').val('');
                }
            });
        });


        $('button[type="submit"]').on('click', function (e) {
            e.preventDefault();

            var $this = $(this),
                form = $this.closest('form'),
                inputs = form.find('input'),
                length = inputs.length,
                send = true;

            inputs.each(function () {

                var $this = $(this),
                    value = $this.val(),
                    name = $this.attr('name');


                if (value.length == 0 || $(this).hasClass('error') || name == 'privacy' && $this.prop('checked') == false) {

                    if (value.length == 0) {
                        $this.parent().addClass('empty');
                    }

                    if (name == 'privacy') {
                        $this.parent().removeClass('error');
                        setTimeout(function () {
                            $this.parent().addClass('error');
                        });

                    } else {
                        $this.addClass('error');
                        form.find('.error:first').focus();

                        if($this.prop('name') === 'check'){
                            $this.removeClass('error').addClass('valid');
                        }
                    }
                    send = false;
                } else {
                    send = true;
                }
                length -= 1;
            });

            if (length == 0 && send) {

                var elem = e.target;
                var parent = elem.parentElement;
                var checkInput = parent.getElementsByClassName("contacts__check")[0];
                checkInput.value = "secretcode";

                form.submit();
            }
        });


        $('input[name="name"]').on('keyup click input change', function () {

            var $this = $(this),
                // message = $this.siblings('.message'),
                value = $this.val(),
                length = value.length;

            if (length >= 2) {
                $this.removeClass('error').addClass('valid');

            } else if (length == 0) {
                $this.removeClass('valid error');

            } else {
                $this.removeClass('valid').addClass('error');
            }
        });


        $('input[type="email"]').on('keyup click input change', function (e) {

            var $this = $(this),
                value = $this.val(),
                length = value.length,

                dog = value.indexOf('@') + 1,
                dot = value.indexOf('.') + 1,
                last = value.substr(length - 1);

            if (length >= 5 && dog >= 2 && dot >= 5 && last != '.' && last != '@') {
                $this.removeClass('error').addClass('valid');

            } else if (length == 0) {
                $this.removeClass('valid error');

            } else {
                $this.removeClass('valid').addClass('error');
            }
        });
    }
};

