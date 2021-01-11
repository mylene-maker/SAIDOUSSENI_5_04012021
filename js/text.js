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

        ////////Création des éléments du DOM

        for (i=0; i < 5; i++){
          const teddiesElement = document.getElementById('teddies');

          let div = document.createElement('div')
          div.setAttribute("class","col-lg-6 mb-4")

          let span = document.createElement('span')
          span.setAttribute("class", "card h-100")

          let img = document.createElement('img')
          img.setAttribute("src", "JWDP5/images/teddy_1.jpg")
          img.setAttribute("alt", "Ours en peulche Marron")

          let paragraph = document.createElement('p')
          paragraph.setAttribute("class", "card-text")
          paragraph.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      
          div.appendChild(span)
          span.appendChild(img)
          span.appendChild(paragraph)
          teddiesElement.appendChild(div)
        }
        
      });
      
  
  

/////////// Création du DOM//////////////////////
