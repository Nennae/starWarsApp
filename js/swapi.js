import { Characters } from "../js/characters.js";

export let getCharacters = async (names) => {
      let response = await fetch(`https://swapi.dev/api/people/?search=${names}`);
      let characterInfo = await response.json();
      return new Characters ( 
            characterInfo.results[0].name,
            characterInfo.results[0].gender,
            parseInt(characterInfo.results[0].height),
            parseInt(characterInfo.results[0].mass),
            characterInfo.results[0].hairColor,
            pictureURL[characterInfo.results[0].name]
      );
};