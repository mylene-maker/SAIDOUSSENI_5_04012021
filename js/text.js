/////////// Recupération des données//////////////////////
/*xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
    console.log(this);

    if (this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
        console.log(response);
    }
};

xhr.open("GET", "http://localhost:3000/api/teddies");
xhr.responseType = "text";
xhr.send();


xhr.onload = function() {
    var teddies = xhr.response;
  } */


   fetch('http://localhost:3000/api/teddies/')
      .then((response) => response.json())
      .then(function(data){
        console.log(data)
        let teddies = data

        ////////Création des éléments du DOM avec une boucle pour l'affichage des 5 produits

        for (i=1; i < 6; i++){
          const teddiesElement = document.getElementById('teddies');

          let div = document.createElement('div')
          div.setAttribute("class","col-lg-6 mb-4")

          let span = document.createElement('span')
          span.setAttribute("class", "card h-100")

          let a = document.createElement('a')
          a.setAttribute("href", "produit.html")

          let img = document.createElement('img')
          img.setAttribute("src", "JWDP5/images/teddy_" + i + ".jpg")
          img.setAttribute("alt", "Ours en peulche")

          let paragraph = document.createElement('p')
          paragraph.setAttribute("class", "card-text")
          paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          
          div.appendChild(a)
          a.appendChild(span)
          span.appendChild(img)
          span.appendChild(paragraph)
          teddiesElement.appendChild(div)

        }

      });

