import { Characters } from "../js/characters.js";
import { getCharacters } from "../js/swapi.js";

console.log(Characters);
console.log(getCharacters);

      const submitBtn = document.querySelector("#submitBtn");
      const resetBtn = document.querySelector("#resetBtn");
      const mainContent = document.getElementById("main");

      function createCharCard (character) {

            let image = document.createElement("img");
            image.classList.add("image");
            image.src = `${character.pictureURL}`;
            image.alt = `image of ${character.name}`;

            let characterCard = document.createElement("div");
            characterCard.classList.add("characterCard");
            characterCard.innerHTML= `<h2>Hey! I'm <span class="nameStyle">${character.name}.</span></h2>`;

            const genderBtn = document.createElement("button");
            genderBtn.classList.add("genderBtn");
            genderBtn.innerText = "Compare Gender";

            const weightBtn = document.createElement("button");
            weightBtn.classList.add("weightBtn");
            weightBtn.innerText = "Compare Weight";

            const heightBtn = document.createElement("button");
            heightBtn.classList.add("heightBtn");
            heightBtn.innerText = "Compare Height";

            const haircolorBtn = document.createElement("button");
            haircolorBtn.innerText = "haircolorBtn";
            haircolorBtn.innerText = "Compare Haircolor";

            characterCard.appendChild(image);
            characterCard.appendChild(genderBtn);
            characterCard.appendChild(weightBtn);
            characterCard.appendChild(heightBtn);
            characterCard.appendChild(haircolorBtn);

            mainContent.appendChild(characterCard);
      }

      createCharCard();

      submitBtn.addEventListener("click", () => {
            
            let select1 = document.querySelector("#select1").value;
            let select2 = document.querySelector("#select2").value;
            if(select1 !== select2) {
                  let charInfo1 = document.createElement("li");
                  charContainer1.appendChild(charInfo1);
                  let charInfo2 = document.createElement("li");
                  charContainer2.appendChild(charInfo2);
            } else if (select1 === select2) {
                  console.log("Please choose two different characters!")
            }
      })

      function compareCharacters (character, otherChar) {

            let charContainer = document.querySelector(".character");

            weightBtn.addEventListener("click", (e) => {
                  let weightDiff = character.compareWeight(otherChar);
                  e.preventDefault();
                  if (weightDiff > 0){
                        charContainer.innerHTML = `<li>${character.name} weighs ${character.mass} and is ${weightDiff} heavier than ${otherChar.name}
                        </li>`
                  } else if (weightDiff < 0) {
                        charContainer.innerHTML = `<li>${character.name} weighs ${character.mass} and is ${weightDiff} lighter than ${otherChar.name}</li>`
                  } else {
                        charContainer.innerHTML = `<li>${character.name} weighs ${character.mass} and so do ${otherChar.name}</li>`
                  }
            })

            heightBtn.addEventListener("click", (e) => {
                  let heightDiff = character.compareHeight(otherChar);
                  e.preventDefault();
                  if (heightDiff > 0){
                        charContainer.innerHTML = `<li>${character.name} is ${character.height} tall, and is ${heightDiff} taller than ${otherChar.name}
                        </li>`
                  } else if (weightDiff < 0) {
                        charContainer.innerHTML = `<li>${character.name} is ${character.height} tall, and is ${heightDiff} shorter than ${otherChar.name}</li>`
                  } else {
                        charContainer.innerHTML = `<li>${character.name} is ${character.height} tall, and so is ${otherChar.name}</li>`
                  }
            })

            hairColroBtn.addEventListener("click", (e) => {
                  let hairColor = character.compareHairColor(otherChar);
                  e.preventDefault();
                  if (hairColor){
                        charContainer.innerHTML = `<li>${character.name} and     ${otherChar.name} has the same hair color which is ${character.hairColor}
                        </li>`
                  } else {
                        charContainer.innerHTML = `<li>${character.name}s hair color is ${character.hairColor} and ${otherChar.name}s is ${otherChar.hairColor}
                        </li>`
                  }
            })

            genderBtn.addEventListener("click", (e) => {
                  let gender = character.compareGender(otherChar);
                  e.preventDefault();
                  if (gender){
                        charContainer.innerHTML = `<li>${character.name} and     ${otherChar.name} has the same gender which is ${character.gender}
                        </li>`
                  } else {
                        charContainer.innerHTML = `<li>${character.name}s gender is ${character.gender} and ${otherChar.name}s is ${otherChar.gender}
                        </li>`
                  }
            })
      }

      compareCharacters()

resetBtn.addEventListener("click", () => {
      location.reload();
})

