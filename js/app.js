$(document).ready(function(){
    let= activoConsola= false
    let= activoCelulares= false
    let= activoPc= false
    
    $("#consolas").click(function(){
      
        if(activoConsola == false){
            $(".pc,.cel,.videojuego").show();
            $(".pc , .cel").toggle();
            activoConsola=true
        }else{
            $(".pc,.cel,.videojuego").show();
            activoConsola =false
        }
    });
    
    $("#computadoras").click(function(){
      if(activoPc == false){
        $(".pc,.cel,.videojuego").show();
        $(".videojuego , .cel").toggle();
        activoPc = true
    }else{
        $(".pc,.cel,.videojuego").show();
        activoPc = false
    }
    });
    
    $("#celulares").click(function(){
        if(activoCelulares == false){
        $(".pc,.cel,.videojuego").show();
        $(".pc , .videojuego").toggle();
        activoCelulares = true
    }else{
        $(".pc,.cel,.videojuego").show();
        activoCelulares = false
    }
    });
    
    $("#reset").click(function(){
        $(".pc,.cel,.videojuego").show();
    });
})