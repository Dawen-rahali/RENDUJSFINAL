function Contenu() {

    fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json")
        .then(response => response.json())
        .then(data => {
          console.log(data);

          const div = document.getElementById("premierediv");
          div.innerHTML = `
          <h1>${data.entreprise}</h1>
          <p>${data.propositionDeValeur}</p>
          <button>${data.texteBouton}</button>
          <p>${data.promessesClients}</p>
            `


          const section = document.getElementById("masection");
          section.innerHTML = `
          <div>
          <h1>${data.titre}</h1>
          <p>${data.description}</p>
          <img src="${data.image-url}</img>
          <div>
            `
          });
            



        



    
        
}


Contenu();







    