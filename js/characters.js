export class Characters {
            constructor(name, gender, height, mass, hairColor) {
                  this.name = name;
                  this.gender = gender;
                  this.height = height;
                  this.mass = mass;
                  this.hairColor = hairColor;
                  this.pictureURL

                  if(name == "Luke Skywalker") {
                        this.pictureURL = "./images/luke_skywalker.jpeg"
                  } else if (name == "Obiwan Kenobi") {
                        this.pictureURL = "./images/obiwan_kenobi.jpg"
                  } else if (name == "Leia Organa") {
                        this.pictureURL = "./images/leiaiv.jpeg"
                  } else if (name == "Darth Vader") {
                        this.pictureURL = "./images/darth-vader-cool.jpeg"
                  } else if (name == "Chewbacca") {
                        this.pictureURL = "./images/chewierawr.jpeg"
                  } else if ( name == "Biggs Darklighter") {
                        this.pictureURL = "./images/Biggs.jpg"
                  } else if (name == "R5-D4") {
                        this.pictureURL = "./images/R5-D4.jpeg"
                  } else if (name == "C-3PO") {
                        this.pictureURL = "./images/C-3PO.jpeg"
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