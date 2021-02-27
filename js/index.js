//////////// Récupéretaionn des données avec fetch

let getTeddies = fetch("http://localhost:3000/api/teddies/")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
    let teddies = data;

    ////////Création des éléments du DOM avec une boucle pour l'affichage des 5 produits

    return teddies.map(function (teddy) {
      const teddiesElement = document.getElementById("teddies");
      console.log(teddy)
      
      let div = document.createElement("div");
      div.setAttribute("class", "col-lg-6 mb-4");

      let span = document.createElement("span");
      span.setAttribute("class", "card h-100");

      let a = document.createElement("a");
      a.setAttribute("href", "produit.html?id=" + teddy._id);

      let title_price = document.createElement("div");
      title_price.setAttribute("class", "title_price");

      let title = document.createElement("h4");
      title.innerHTML = teddy.name;

      let price = document.createElement("p");
      price.innerHTML = teddy.price / 100 + ".00 €";
      price.setAttribute("class", "font-weight-bold");

      let img = document.createElement("img");
      img.setAttribute("src", teddy.imageUrl);
      img.setAttribute("alt", teddy.name);

      let paragraph = document.createElement("p");
      paragraph.setAttribute("class", "card-text");
      paragraph.innerHTML = teddy.description;

      div.appendChild(a);
      a.appendChild(span);
      span.appendChild(title_price);
      title_price.appendChild(title);
      span.appendChild(img);
      title_price.appendChild(price);
      span.appendChild(paragraph);
      teddiesElement.appendChild(div);
    });
  });
