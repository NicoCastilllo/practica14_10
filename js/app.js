$(document).ready(function(){
    $("#consolas").click(function(){
        $(".pc , .cel").toggle();
    });
    $("#computadoras").click(function(){
        $(".videojuegos , .cel").toggle();
    });
    $("#celulares").click(function(){
        $(".pc , .videojuego").toggle();
    });
})