import { pokemonData } from "./pokemon.js";

var data= pokemonData;

var position =localStorage.getItem("position");


$(document).ready(
    function () {
        alert(localStorage.getItem("position"));
        pokemonFull(position);
        
    }

)

function pokemonFull(index) {
    let div =$("<div></div>");
    div.addClass("contenedor-pokemon");
    let imagen =$("<img></img>");
    imagen.attr("src",data.pokemon[index].img);
   
    imagen.addClass("img-pokemon");
    div.append(imagen);
    // <div>
    //<img src=data.pokemon[index].img>
    //</div>
    let nombrePokemon=$("<p></p>");
    nombrePokemon.append(data.pokemon[index].nombre);
    nombrePokemon.addClass("nombre");
    div.append(nombrePokemon);
    // <div>
    //<img src=data.pokemon[index].img>
    //<p>data.pokemon[index].nombre</p>
    //</div>
    let tipoPokemon=$("<p></p>");
    tipoPokemon.append(data.pokemon[index].tipo);
    tipoPokemon.addClass("tipo");
    div.append(tipoPokemon);
    // <div>
    //<img src=data.pokemon[index].img>
    //<p>data.pokemon[index].nombre</p>
    //<p>data.pokemon[index].tipo</p>
    //</div>
    let desPokemon=$("<p></p>");
    desPokemon.append(data.pokemon[index].descripcion);
    desPokemon.addClass("tipo");
    div.append(desPokemon);

    $('#descripcionPokemon').append(div);  
    
}
