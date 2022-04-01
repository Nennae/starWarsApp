const BASE_URL = 'https://swapi.dev/';

const mainContent = document.getElementById("main");

let getData = async (url) => {
      let response = await fetch(url);
      let json = await response.json();
      return json;
};

const renderCharacters = async () => {
      let characters = getData("https://swapi.dev/api/people");
      console.log(characters);
}
renderCharacters();


class Characters {
      // Setup object
      constructor(name, gender, height, mass, hairColor, pictureURL) {
console.log("Ditt objekt är nu skapat!");
            this.name = name;
            this.gender = gender;
            this.height = height;
            this.mass = mass;
            this.hairColor = hairColor;
            this.pictureURL = pictureURL;
      }
      compareWeight(character){
            /* Check the weight and the difference in weight between  */
      }
      compareHeight(character){

      }
      compareHairColor(character){

      }
      compareGender(character){

      }
}

let theCharacters = new Characters();