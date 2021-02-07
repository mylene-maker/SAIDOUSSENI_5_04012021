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

    fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact,
        products,
      }),
    }).then((res) => res.json());
    console.log(res);
  }
});

/*let formValid = document.getElementById("bouton-valider")
formValid.addEventListener("click", validation);
function validation(event) {
  let codeRetour = true;
  /// si le champs Nom est vide
  if (nom.validity.valueMissing) {
    event.preventDefault();
    missNom.textContent = "Veuillez indiquer votre nom de famille svp";
    missNom.style.color = "red";
    codeRetour = false;

  } else{
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
  }*/

/*// si le champ prénom est vide
  /// si le champs Nom est vide
  if (nom.validity.valueMissing) {
    event.preventDefault();
    missNom.textContent = "Veuillez indiquer votre nom de famille svp";
    missNom.style.color = "red";
    codeRetour = false;
  }
  if (prenom.validity.valueMissing) {
    event.preventDefault();
    missPrenom.textContent = "Veuillez indiquer votre prénom svp";
    missPrenom.style.color = "red";
    codeRetour = false;
  }
  /// si le champ adresse est vide
  if (adresse.validity.valueMissing) {
    event.preventDefault();
    missAdresse.textContent = "Veuillez indiquer votre adresse svp";
    missAdresse.style.color = "red";
    codeRetour = false;
  }
  /// si le champ ville est vide
  if (ville.validity.valueMissing) {
    event.preventDefault();
    missVille.textContent = "Veuillez indiquer votre ville et code postal svp";
    missVille.style.color = "red";
    codeRetour = false;
  }
  /// si le champ mail est vide
  if (mail.validity.valueMissing) {
    event.preventDefault();
    missMail.textContent = "Veuillez indiquer votre mail svp";
    missMail.style.color = "red";
    codeRetour = false;
  } /*else {
    // envoi au serveur les objets contact et product
    fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact,
        products,
      }),
    }).then((response) => response.json());
    console.log(response);
    /// enregistrement dans le localStorage
    localStorage.setItem("contact", JSON.stringify(data));
    localStorage.setItem("products", JSON.stringify(data));
  } 
}*/
