export class Characters {
      constructor(name, gender, height, mass, hairColor) {
            this.name = name;
            this.gender = gender;
            this.height = height;
            this.mass = mass;
            this.hairColor = hairColor;
            this.pictureURL = this.pictureURL
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