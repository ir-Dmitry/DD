$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault()
        var $this = $(this)
        var blockID = $this.data('scroll')
        var blockOffset = $(blockID).offset().top
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    })
    
    $("#phone").mask("+7(999) 999-99-99");
    $("#email").inputmask("email");

    $("#sendData").click(function() {
        var fio = $("#fio").val();
        var email = $("#email").val();
        var lvl = $("#lvl").val();
        var faculty = $("#faculty").val();
        var group = $("#group").val();
        var direction = $("#direction").val();
        var phone = $("#phone").val();
        var agree = $("#agree:checked").val();
    
        if(fio == ""){
            $("#errorMess").text("Введите ФИО");
            return false;
        }
        if(email == ""){
            $("#errorMess").text("Введите Е-mail");
            return false;
        }
        if(lvl == ""){
            $("#errorMess").text("Выберите уровень образования");
            return false;
        }
        if(faculty == ""){
            $("#errorMess").text("Выберите факультет");
            return false;
        }
        if(group == ""){
            $("#errorMess").text("Введите группу");
            return false;
        }
        if(direction == ""){
            $("#errorMess").text("Выберите направление");
            return false;
        }
        if(phone == ""){
            $("#errorMess").text("Введите номер телефона");
            return false;
        }
        if(agree != "Согласен"){
            debugger;
            $("#errorMess").text("Необходимо согласиться с обработкой персональных данных");
            return false;
        }
    
        $("#errorMess").text("");
    
        $.ajax({
            url: 'php/form.php',
            type: 'POST',
            cache: false,
            data: {'fio': fio, 'email': email, 'lvl': lvl, 'faculty': faculty, 'group': group,'direction':direction,'phone':phone,'agree':agree},
            dataType: 'html',
            beforeSend: function(){
                $("sendData").prop("disabled", true);
            },
            success: function(data){
                alert("Данные успешно отправлены");
                $("#vvod").trigger("reset");
                $("sendData").prop("disabled", false);
            }
        });
    })
})