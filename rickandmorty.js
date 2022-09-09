document.addEventListener("DOMContentLoaded", (event) => {
  
  function fetchRnM() {
    fetch("https://rickandmortyapi.com/api", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
      });
  }

  fetchRnM()
});
