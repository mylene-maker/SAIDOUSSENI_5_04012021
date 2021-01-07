/////////// Recupération des données//////////////////////
xhr = new XMLHttpRequest();
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
  }

/////////// Création du DOM//////////////////////

function teddies (id, name, price, description, imageUrl){ // les attributs de chaque peluche

  // creation des éléments du DOM

  let div = document.createElement("div");
  let a = document.createElement("a");
  let img = document.createElement("img");
  let url = "http://localhost:3000/images/teddy_1.jpg";
  let span = document.createElement("span")

  let spanContent = document.createTextNode("Norbert");

  img.setAttribute("src", url);
	img.setAttribute("alt", "Ours en peluche");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");


  div.appendChild(a);
  a.appendChild(img);
  a.appendChild(span);
  
  div.classList.add("teddy");
  
  let getDiv = document.querySelector(id);
	getDiv.appendChild(div);

  block("#teddies");
};

