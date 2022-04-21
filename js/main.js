import { Characters } from "../js/characters.js";
import { getCharacters } from "../js/swapi.js";

console.log(Characters);
console.log(getCharacters);

      function createCharCard (character) {

            let image = document.createElement("img");
            image.classList.add("image");
            image.src = `${character.pictureURL}`;
            image.alt = `image of ${character.name}`;

            let characterCard = document.createElement("div");
            characterCard.classList.add("characterCard");
            characterCard.innerHTML= `<h2>Hey! I'm <span class="nameStyle">${character.name}.</span></h2>`;

            let genderBtn = document.createElement("button");
            genderBtn.classList.add("genderBtn");
            genderBtn.innerText = "Compare Gender";

            let weightBtn = document.createElement("button");
            weightBtn.classList.add("weightBtn");
            weightBtn.innerText = "Compare Weight";

            let heightBtn = document.createElement("button");
            heightBtn.classList.add("heightBtn");
            heightBtn.innerText = "Compare Height";

            let haircolorBtn = document.createElement("button");
            haircolorBtn.innerText = "haircolorBtn";
            haircolorBtn.innerText = "Compare Haircolor";

            characterCard.appendChild(image);
            characterCard.appendChild(genderBtn);
            characterCard.appendChild(weightBtn);
            characterCard.appendChild(heightBtn);
            characterCard.appendChild(haircolorBtn);

            mainContent.appendChild(characterCard);
      }

      const submitBtn = document.querySelector("#submitBtn");
      const resetBtn = document.querySelector("#resetBtn");
      const mainContent = document.getElementById("main");
      
      submitBtn.addEventListener("click", () => {
            createCharCard();
            let charContainer1 = document.querySelector("#character1");
            let charContainer2 = document.querySelector("#character2");
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

resetBtn.addEventListener("click", () => {
      location.reload();
})

