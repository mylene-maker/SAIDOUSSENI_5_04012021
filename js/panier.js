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
  
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = "Veuillez renseigner tout les champs !";
    }
  }
  const commande = {
    contact: {},
    products: [],
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

    commande.contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      email: email,
    };
    // Tableau des id produit à envoyer au serveur

    panier.forEach(articleId => 
      commande.products.push(articleId._id))
      console.log(commande)

    // envoi au serveur les objets contact et product
    fetch("http://localhost:3000/api/teddies/order", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(
        commande
      ),
    }).then(res => res.json())
    .then (res => console.log(res.orderId))
    /// enregistrer l'id dans le localStorage
    localStorage.setItem('monId', res.orderId)

    //document.location = 'commande.html'
  }
});
