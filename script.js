function Contenu() {

    fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/menuiserie.json")
        .then(response => response.json())
        .then(data => {
             console.log(data);

          const div = document.getElementById("premierediv");


          div.innerHTML = `
          <h1>${data.entreprise}</h1>
          <p id="proposition">${data.propositionDeValeur}</p>
          <div class="boutondiv">
          <button>${data.texteBouton}</button>
          </div>
            `;

             data.promessesClients.forEach(element => {
             div.innerHTML+= `
                <div class="divul">
                <ul>
                
                    <li>${element}</li>
                </ul>
                </div>
                  `              
             })

          const section = document.getElementById("masection");
            data.realisations.forEach(element => {
                section.innerHTML+=`
                <div>
                    <h3>${element.titre}</h3>
                    <p>${element.description}</p>
                    <img src="${element['image-url']}">
                </div>
            `
            })

            const deuxiemediv = document.getElementById("deuxiemediv");
                data.temoignages.forEach(element => {
                    deuxiemediv.innerHTML+=`
                    <div>
                        <h4>${element.prenom}</h4>
                        <h5>${element.typePrestation}</h5>
                        <blockquote>${element.commentaire}</blockquote>
                        <p>${element.note}</p>
                    </div>
                `;
                })
        
        })







    


}
    Contenu();