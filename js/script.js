$(document).ready(function () {
    $(".header-contacts__button").on("click", function () { // обращаемся к кнопке header-contacts__button используем событие .on("click" и вызываем функцию)
        $(".overlay").show() // функция огращается к overlay и вызывает функцию show()
    });

    $(".popup-close").on("click", function () {
        $(".overlay").hide() // обращаемся к классу .popup-close используем функцию ("click", function () которая скрывает скрыть overlay
    });
});