///// Recuperer le localStorage
let panier = JSON.parse(localStorage.getItem("monPanier"));
console.log(panier);
let totalTmp = 0;

///Tableau de presentation du panier

panier.forEach((element) => {
  console.log(element);

  let basketElement = document.getElementById("basket-element");
  let article = document.createElement("tr");
  let ref = document.createElement("td");
  ref.innerHTML = element._id;
  let nom = document.createElement("td");
  nom.innerHTML = element.name;
  let prix = document.createElement("td");
  prix.innerHTML = element.price / 100 + ",00€";

  basketElement.appendChild(article);
  article.appendChild(ref);
  article.appendChild(nom);
  article.appendChild(prix);
});

//// Total du panier

panier.forEach((totalPrice) => {
  totalTmp += totalPrice.price;
});

let total = document.getElementById("sum");
total.innerHTML = totalTmp / 100 + ".00€";
console.log(totalTmp);

//// Verification des champs

let envoiForm = document.getElementById("bouton-valider");

envoiForm.addEventListener("click", function (e) {
  let erreur;
  let inputs = document.getElementsByTagName("input");
  if(inputs['nom'] != ""){
    erreur = ''
  }
  if(inputs['prenom'] != ""){
    erreur = ''
  }
  if(inputs['adresse'] != ""){
    erreur = ''
  }
  if(inputs['ville'] != ""){
    erreur = ''
  }
  if(inputs['mail'] != ""){
    erreur = ''
  }
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = "Veuillez renseigner tout les champs !";
    }
  }
  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  } else {
    let firstName = document.getElementById("nom").value;
    let lastName = document.getElementById("prenom").value;
    let address = document.getElementById("adresse").value;
    let city = document.getElementById("ville").value;
    let email = document.getElementById("mail").value;

    // Objet contact à envoyer au serveur

    const contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      email: email,
    };
    console.log(contact);

    // Tableau des id produit à envoyer au serveur
    const products = panier.filter((item) => item._id).map((item) => item._id);
    console.log(products);

    //// Envoie au serveur de contact et product

    // envoi au serveur les objets contact et product
    fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact,
        products,
      }),
    }).then((res) => res.json());
  }
});
