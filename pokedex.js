function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Will only give objects
    console.log( name + " - " + type + " - " + region + " region") // remove once you have clear understanding


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;
    

    // Can log them since they are now pure Strings
    console.log( name + " - " + type + " - " + region + " region") // remove once you have clear understanding

/*-----------------------------------------------
 * Add your solution code here
 *---------------------------------------------*/

    /* --- Part 1 : Create pokemon data Object --- */

				// Use If to ensure input validation (ensure input fields are !empty)
                validateInput();
                function validateInput(){
                    if (name == "") {
                      alert("Enter a valid Pokemon name");
                      return false;
                    }else if (type ==""){
                        alert("Select Pokemon type");
                        return false;
                      }else if (region ==""){
                        alert("Select Generation");
                        return false;
                      }
                }
        // Create pokemon object here (const pokemon) using user input Strings
        const pokemon = {
            name: name,
            type: type,
            region: region
        };


        // Create a span element (const pokemonData) and put the pokemon objects properties inside of it

        // Select the div element with 'app' id
      const app = document.getElementById('app');

      // Create a new span element
      const pokemonData = document.createElement('span');

      // Create a new text node for the span element
      const spanContent = document.createTextNode(pokemon["name"] + " - " + pokemon["type"] + " - " + pokemon["region"] + " region");

      // Append the user input to the span element
      pokemonData.appendChild(spanContent);

      // Place the span element inside the div
      app.appendChild(pokemonData);




    /* --- Part 2 : Creating other DOM Objects --- */
        
        // Create HTML li element here (const pokedexEntry)
        
        const pokedexEntry = document.createElement('li');

        // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object
        
       
        const pokemonClass = pokemon["type"];
        pokedexEntry.className = " ";
        pokedexEntry.className = pokemonClass;

        //console.log("Class is: " + pokemonClass);
        //console.log(typeof pokemonClass);
        
        // Creating a preview button (using a Template Literal)
        // this code is for an html form that will Google search the name of the pokemon
       const previewButton =`
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                <input type="submit">
            </form>
        `

    
    /* --- Part 3 : Add things into the DOM --- */

        // Firstly append pokemonData to the innerHTML of pokedexEntry
        pokedexEntry.appendChild(pokemonData);

        // Secondly append the previewButton to innerHTML of pokedexEntry
        
        const button = document.createElement('p');
        button.innerHTML = previewButton;
        pokedexEntry.appendChild(button);

        // Lastly we will get the ul List element that is meant to contain all pokedex entries
        const entries = document.getElementById("pokedexEntries");

        // Then we will append pokedexEntry to the innerHTML of the pokedexEntries ul element
        entries.appendChild(pokedexEntry);
        
        var pokedexMemory = Object.keys(pokemon)
        .map(function(key) {
            return pokemon[key];
        });
    
    console.log(pokedexMemory);
/*-----------------------------------------------
 * Solution must be above this comment
 *---------------------------------------------*/
}
