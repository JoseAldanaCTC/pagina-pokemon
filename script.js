import { pokemonData } from "./pokemon.js";

var data= pokemonData;

$(document).ready(
    function () {
        for (let index = 0; index < 10; index++) {

            
                mostrarPokemon(index);
                
                    
            
        }

    },
    $("#myselect").change(function () {
        $("#contenedorGeneral").children().not("#contenedorGeneral").remove();
        for (let index = 0; index < 10; index++) {

            if (($("#myselect").val()=="general")||($("#myselect").val()==data.pokemon[index].tipo)) {
                mostrarPokemon(index);
                
            }         
            
        }

        
    }

    )
  
  
);


/* $("#contenedorGeneral").children().not("#contenedorGeneral").remove();
for (let index = 0; index < 10; index++) {

        
    if (($( "#myselect" ).val()=="general")||($( "#myselect" ).val()==data.pokemon[index].tipo))
    {

     mostrarPokemon(index);

    }
     
     
 }*/





function mostrarPokemon(index) {
    let div =$("<div></div>");
    div.addClass("contenedor-pokemon");
    let imagen =$("<img></img>");
    imagen.attr("src",data.pokemon[index].img);
    imagen.click(function () {
        window.location.href = "description.html";
        localStorage.setItem("position", index);
        // guardame en el navegador var position = valor del index
    }
        
    );
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

    $('#contenedorGeneral').append(div);  
}
