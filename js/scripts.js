/*Вызов модального окна*/
$(function(){
    $('.header-contacts-button').click(function(){
        $('.overlay').delay(1000).show();
    });
    $('.close').click(function(){
        $('.overlay').delay(1000).hide();
    })
})
/* Показ Яндекс карты*/
var contacts = $('.contacts');
var contactsTop = contacts.offset().top;
$(window).bind('scroll',function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > contactsTop){
        $('.map').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac9e6af21672d5e6bf102a089dd5c9c98793d7fc288fe4692f964a3617137946c&amp;width=100%25&amp;height=550&amp;lang=ru_RU&amp;scroll=false"></script>')
        $(window).unbind('scroll')
    }
})