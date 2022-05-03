import { Characters } from "../js/characters.js";

export let getCharacters = async (names) => {

      let charImgs = {
            "Luke Skywalker": "./images/luke_skywalker.jpeg",
            "Obi-Wan Kenobi": "./images/obiwan.jpeg",
            "Leia Organa": "./images/leiaiv.jpeg",
            "Darth Vader": "./images/darth-vader-cool.jpeg",
            "Chewbacca": "./images/chewierawr.jpeg",
            "Biggs Darklighter": "./images/Biggs.jpg",
            "R5-D4":"./images/R5-D4.jpeg",
            "C-3PO": "./images/C-3PO.jpeg"
      };

      let response = await fetch(`https://swapi.dev/api/people/?search=${names}`);
      let characterInfo = await response.json();
      console.log(characterInfo.results[0].name)
      return new Characters ( 
            characterInfo.results[0].name,
            characterInfo.results[0].gender,
            parseInt(characterInfo.results[0].height),
            parseInt(characterInfo.results[0].mass),
            characterInfo.results[0].hair_color,
            charImgs[characterInfo.results[0].name]
      );
};    