$(document).ready(function(){
    for(var a = 1; a <= 151; a++){
        $('#pokemon').append('<img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+a+'.png">');
    }
})