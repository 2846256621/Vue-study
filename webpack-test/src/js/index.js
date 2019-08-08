import $ from "jquery";

$(function () {
    $('li:odd').css('backgroundColor','#c3f7ff');
    $('li:even').css('backgroundColor','#fcc9d6');
    $('#btn').click(function () {
        $('ul').slideToggle(1500);
    });
    $('#btn2').click(function () {
        $('ul').toggle(1500);
    });
    $('#btn3').click(function () {
        $('ul').fadeToggle(1500);
    })
});
