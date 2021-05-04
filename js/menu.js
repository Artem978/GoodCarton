$(function(){
    var headerMenu = $('#header-menu'); 
    var menu = $('#menu');
    headerMenu.click(function(){
        headerMenu.toggleClass('header-menu-active');
        menu.toggleClass('menu-active');
    })
})