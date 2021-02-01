///// Recuperer le localStorage
let panier = JSON.parse(localStorage.getItem('monPanier'))
console.log(panier)
let totalTmp = 0

///Tableau de presentation du panier 

panier.forEach((element) => {
    console.log(element)
    
    let basketElement = document.getElementById('basket-element')
    let article = document.createElement('tr')
    let ref = document.createElement('td')
    ref.innerHTML = element._id
    let nom = document.createElement('td')
    nom.innerHTML = element.name
    let prix = document.createElement('td')
    prix.innerHTML = element.price/100 + ',00€'


    basketElement.appendChild(article)
    article.appendChild(ref)
    article.appendChild(nom)
    article.appendChild(prix)
    
  }); 

  //// Total du panier 
 
  panier.forEach(totalPrice => {
    totalTmp += totalPrice.price
  }) 
  let total = document.getElementById('sum')
  total.innerHTML = totalTmp/100 + '.00€'
  console.log(totalTmp)

// Variable des id produit à envoyer au serveur

panier.forEach(commande =>{
  var product = new Object()
  product.id = commande._id
  console.log(product)
})

// Variable contact à envoyer au serveur

var contact = new Object()
contact.nom = 
contact.prenon = 
contact.adresse = 
contact.ville = 
contact.mail = 

console.log(contact)

//// Validation du formulaire 

let formValid = document.getElementById('bouton-valider')
let nom = document.getElementById('nom')
let missNom = document.getElementById('missNom')
let missPrenom = document.getElementById('missPrenom')
//let prenomValid = /^[a-zA-ZéèîÏ]
let missAdresse = document.getElementById('missAdresse')
let missVille = document.getElementById('missVille')
let missMail = document.getElementById('missMail')

formValid.addEventListener('click', validation)
function validation(event){
  /// si le champs Nom est vide
  if(nom.validity.valueMissing){
    event.preventDefault()
    missNom.textContent =  'Veuillez indiquer votre nom de famille svp'
    missNom.style.color = 'red'
  } 
  /// si le champ prénom est vide
  if(prenom.validity.valueMissing){
    event.preventDefault()
    missPrenom.textContent =  'Veuillez indiquer votre prénom svp'
    missPrenom.style.color = 'red'
    
  } /* else if (prenomValid.test(prenon.value)== false){
    event.preventDefault()
    missPrenom.textContent = 'Format incorrect'
  }*/

   /// si le champ adresse est vide
   if(adresse.validity.valueMissing){
    event.preventDefault()
    missAdresse.textContent =  'Veuillez indiquer votre adresse svp'
    missAdresse.style.color = 'red'
  }
   /// si le champ ville est vide
   if(ville.validity.valueMissing){
    event.preventDefault()
    missVille.textContent =  'Veuillez indiquer votre ville et code postal svp'
    missVille.style.color = 'red'
  }
   /// si le champ mail est vide
   if(mail.validity.valueMissing){
    event.preventDefault()
    missMail.textContent =  'Veuillez indiquer votre mail svp'
    missMail.style.color = 'red'
  }
}


/*fetch("http://localhost:3000/api/teddies/order",{
  body:JSON.stringify(order),
  method: "post",
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
}) .then((response)=>{
  response.json().then(function(data){
    //enregistrement de "order" dans le localSorage
    localStorage.setItem("order", JSON.stringify(data));
    //ouverture de la page de confirmation
    document.location = "commande.html";
  })
})*/
