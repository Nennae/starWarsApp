
// DOM elements
let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");
let selected1 = select1.value;
let selected2 = select2.value;

const button = document.querySelector("#submitBtn");
const charCard1 = document.querySelector("#charContainer1");
const charCard2 = document.querySelector("#charContainer2");
const mainContent = document.getElementById("main");

      let getCharacters = async (url) => {
            let response = await fetch(url);
            let json = await response.json();
            return json;
      };
      
      const renderCharacters = async () => {
            let characters = getCharacters("https://swapi.dev/api/people");
            console.log(characters);
      }
      renderCharacters();

      let getCharImage = async (url) => {
            let response = await fetch(url);
            let json = await response.json();
            return json;
      }
      class Characters {
            constructor(name, gender, height, mass, hairColor, pictureURL) {
      console.log("Ditt objekt är nu skapat!");
                  this.name = name;
                  this.gender = gender;
                  this.height = height;
                  this.mass = mass;
                  this.hairColor = hairColor;
                  this.pictureURL 
                  switch(name) {
                        case name === "Luke Skywalker" :
                              this.pictureURL = "./images/luke_skywalker.jpeg"
                              break;
                        case  name === "Obiwan Kenobi" :
                              this.pictureURL = "./images/obiwan_kenobi.jpg"
                              break;
                        case  name === "Leia Organa" :
                              this.pictureURL = "./images/leiaiv.jpeg"
                              break;
                        case  name === "Darth Vader" :
                              this.pictureURL = "./images/darth-vader-cool.jpeg"
                              break;
                        case  name === "Chewbacca" :
                              this.pictureURL = "./images/chewierawr.jpeg"
                              break;
                        case  name === "Biggs Darklighter" :
                              this.pictureURL = "./images/Biggs.jpg"
                              break;
                        case  name === "R5-D4" :
                              this.pictureURL = "./images/R5-D4.jpeg"
                              break;
                        case  name === "C-3PO" :
                              this.pictureURL = "./images/C-3PO.jpeg"
                              break;
                  }
            }
            compareWeight(character){
                  return (this.mass - character.mass)
            }
            compareHeight(character){
                  return (this.height - character.height)
            }
            compareHairColor(character){
                  return (this.hairColor === character.hairColor)
            }
            compareGender(character){
                  return (this.gender === character.gender)
            }
      }

// let characters = [];
// let chosenCharacters = [];
// let firstCharacter = new Characters()
// let secondCharacter = new Characters()

// Display images of chosen characters EVENT

/* Display information about chosen characters and the 4 buttons that answers questions EVENT */

// EVENT: Display comparison / answer, under character 

// 

// button.addEventListener("click" () => {
      
// });
