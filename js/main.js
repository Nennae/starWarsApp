import { Characters } from "../js/characters.js";
import { getCharacters } from "../js/swapi.js"; 

      const submitBtn = document.querySelector("#submitBtn");
      const resetBtn = document.querySelector("#resetBtn");
      let characterInfo = document.querySelector(".characterInfo");
      let message = document.getElementById("message");
      let characterIntro1 = document.querySelector(".characterIntro1");
      let characterIntro2 = document.querySelector(".characterIntro2");

      // Creates elements and their content for selected characters 
      function createCharCard (character, otherChar) {
            let characterCard = document.querySelector(".characterIntro");

            let image = document.createElement("img");
            image.classList.add("image");
            image.src = `${character.pictureURL}`;
            image.alt = `image of ${character.name}`;

            let characterName = document.createElement("h2");
            characterName.classList.add("characterName");
            characterName.innerHTML= `Hey! I'm <span class="nameStyle">${character.name}.</span>`;

            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("buttonContainer");

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
            haircolorBtn.classList.add("haircolorBtn");
            haircolorBtn.innerText = "Compare Haircolor";

            characterCard.appendChild(image);
            characterCard.appendChild(characterName);

            buttonContainer.appendChild(weightBtn);
            buttonContainer.appendChild(heightBtn);
            buttonContainer.appendChild(genderBtn);
            buttonContainer.appendChild(haircolorBtn);
            characterCard.appendChild(buttonContainer);
            // characterCard.appendChild(weightBtn);
            // characterCard.appendChild(heightBtn);
            // characterCard.appendChild(haircolorBtn);

            // characterContainer.appendChild(characterCard);

            // Eventlisteners for the comparison buttons
                  weightBtn.addEventListener("click", (e) => {
                        let weightDiff = character.compareWeight(otherChar);
                        e.preventDefault();
                        if (weightDiff > 0){
                              characterInfo.innerHTML = `<li>${otherChar.name} weighs ${otherChar.mass} kg and is ${Math.abs(weightDiff)} kg lighter than ${character.name}
                              </li>`
                        } else if (weightDiff < 0) {
                              characterInfo.innerHTML = `<li>${otherChar.name} weighs ${otherChar.mass} kg and is ${Math.abs(weightDiff)} kg heavier than ${character.name}</li>`
                        } else {
                              characterInfo.innerHTML = `<li>${otherChar.name} weighs ${otherChar.mass} and so do ${character.name}</li>`
                        }
                        characterInfo.scrollIntoView({behavior: "smooth"});
                  })
      
                  heightBtn.addEventListener("click", (e) => {
                        let heightDiff = character.compareHeight(otherChar);
                        e.preventDefault();
                        if (heightDiff < 0){
                              characterInfo.innerHTML = `<li>${otherChar.name} is ${otherChar.height} cm tall, and is ${Math.abs(heightDiff)} cm taller than ${character.name}
                              </li>`
                        } else if (heightDiff > 0) {
                              characterInfo.innerHTML = `<li>${otherChar.name} is ${otherChar.height} cm tall, and is ${Math.abs(heightDiff)} cm shorter than ${character.name}</li>`
                        } else {
                              characterInfo.innerHTML = `<li>${otherChar.name} is ${otherChar.height} tall, and so is ${character.name}</li>`
                        }
                        characterInfo.scrollIntoView({behavior: "smooth"});
                  })
      
                  haircolorBtn.addEventListener("click", (e) => {
                        let hairColor = character.compareHairColor(otherChar);
                        e.preventDefault();
                        if (hairColor){
                              characterInfo.innerHTML = `<li>${otherChar.name} and     ${character.name} has the same hair color which is ${character.hairColor}
                              </li>`
                        } else {
                              characterInfo.innerHTML = `<li>${otherChar.name}s hair color is ${otherChar.hairColor} and ${character.name}s is ${character.hairColor}
                              </li>`
                        }
                        characterInfo.scrollIntoView({behavior: "smooth"});
                  })
      
                  genderBtn.addEventListener("click", (e) => {
                        let gender = character.compareGender(otherChar);
                        e.preventDefault();
                        if (gender){
                              characterInfo.innerHTML = `<li>${otherChar.name} and ${character.name} has the same gender which is ${character.gender}
                              </li>`
                        } else {
                              characterInfo.innerHTML = `<li>${otherChar.name}s gender is ${otherChar.gender} and ${character.name}s is ${character.gender}
                              </li>`
                        }
                        characterInfo.scrollIntoView({behavior: "smooth"});
                  })
      }

      submitBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            let selected1 = document.querySelector("#select1").value;
            let selected2 = document.querySelector("#select2").value;

            if(selected1 === selected2) {
                  message.innerText = "Please choose two different characters!";
                  characterIntro1.style.display = "none";
                  characterIntro2.style.display = "none";
            } else {
                  message.innerText = "";
                  characterIntro1.style.display = "block";
                  characterIntro2.style.display = "block";
                  let charInfo1 = await getCharacters(selected1);
                  let charInfo2 = await getCharacters(selected2);
                  createCharCard(charInfo1,charInfo2,characterIntro1);
                  createCharCard(charInfo2,charInfo1,characterIntro2);
            }
            let inputs = document.querySelectorAll(".select");
            inputs.forEach(input => {
                  input.value = "Luke Skywalker";
                  characterInfo.innerHTML = "";
            })
      })

resetBtn.addEventListener("click", () => {
      location.reload();
})

