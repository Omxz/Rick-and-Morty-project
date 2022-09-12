document.addEventListener("DOMContentLoaded", (event) => {
  // SPEECH START
  const header = document.querySelector(".bottom-head")
  const btn = document.querySelector(".talk");
  const content = document.querySelector(".content");
  header.addEventListener('click',function(){
    location.reload();
   })

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onstart = function () {
    
    console.log("voice is activated, you can use microphone");
    btn.classList.remove("talk");
    btn.classList.add("talk2");
    btn.innerHTML = "REC";
  };

  recognition.onresult = function (event) {
    const current = event.resultIndex;
    btn.classList.remove("talk2");
    btn.classList.add("talk");
    btn.innerHTML = "TALK";
    const transcript = event.results[current][0].transcript;
    // content.textContent = transcript;
    let a = transcript;

    if (a == "Who is your master") {
      talkBack(
        "Sebastian Svensson is my true master,  Sebastian Stormborn of House Targaryen, the First of His Name, King of the Andals and the First Men, Protector of the Seven Kingdoms, the Father of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains. But of all things, my only friend"
      );
    } else {
      talkBack("Beep boop...search results for" + a + "aquired");
      fetchCharacters(a);
    }
  };

  function talkBack(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
  // add the listener to the btn

  btn.addEventListener("click", () => {
    recognition.start();
  });

  //SPEECH END

  let cards = document.querySelector(".cards");

  function fetchCharacters(input) {
    let b = 1;
    const maxCount = 6;
    for (let j = 1; j <= 42; j++) {
      fetch("https://rickandmortyapi.com/api/character/?page=" + j)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i <= 20; i++) {
            let person = data.results[i];

            if (!person) {
              // continue;
              break;
            }

            let nameOfPerson = data.results[i].name;

            console.log("bbbbb", b);
            if (nameOfPerson.includes(input) && b < maxCount) {
              b++;
              // Getting info about persons
              let rmName = person.name;
              let rmGender = person.gender;
              let rmImg = person.image;
              let rmStatus = person.status;
              let rmSpecies = person.species;
              // Creating elements
              let rmDiv = document.createElement("article");
              let imgDiv = document.createElement("div");
              let wrapper = document.createElement("div");
              let nameText = document.createElement("div");
              let genderText = document.createElement("div");
              let statusText = document.createElement("div");
              let speciesText = document.createElement("div");
              // Addinc classes
              imgDiv.classList.add("image-holder");
              wrapper.classList.add("wrapper");
              rmDiv.classList.add("card-holder");
              // Appending
              rmDiv.appendChild(imgDiv);
              wrapper.appendChild(nameText);
              wrapper.appendChild(genderText);
              wrapper.appendChild(statusText);
              wrapper.appendChild(speciesText);
              rmDiv.appendChild(wrapper);

              // Printing innerHTML with info
              imgDiv.innerHTML = `
              <img src="${rmImg}" />`;
              nameText.innerHTML = `<h2>${rmName}</h2>  `;
              genderText.innerHTML = `<p>Gender: ${rmGender}</p> `;
              statusText.innerHTML = `<p>Status: ${rmStatus}</p>  `;
              speciesText.innerHTML = `<p>Species: ${rmSpecies}</p>`;
              console.log(person);

              cards.appendChild(rmDiv);
            }
          }
        });
    }
  }
});
