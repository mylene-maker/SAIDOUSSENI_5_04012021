///// Recuperer le localStorage
let panier = JSON.parse(localStorage.getItem('monPanier'))
console.log(panier)


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

////////////Formulaire de commande
/*
const formulaire = document.getElementById('formulaire')

let form = document.createElement('form')
form.setAttribute('class', 'form')
form.setAttribute('method', 'post')
//form.setAttribute('action', '')

let divFirstName = document.createElement('div')
divFirstName.setAttribute('class', 'form-group')
let firstName = document.createElement('label') 
firstName.innerHTML = 'Votre Nom de famille'
firstName.setAttribute ('for', 'name')
let inputFirstName = document.createElement('input')
inputFirstName.setAttribute ('id', 'name')
inputFirstName.setAttribute ('type', 'text')
inputFirstName.setAttribute ('required', '') /// champs obligatoire 
inputFirstName.setAttribute ('placeholder', 'Dumont')

let divLastName = document.createElement('div')
divLastName.setAttribute('class', 'form-group')
let lastName = document.createElement('label') 
lastName.innerHTML = 'Votre Prénom'
lastName.setAttribute ('for', 'second-name')
let inputLastName = document.createElement('input')
inputLastName.setAttribute ('id', 'second-name')
inputLastName.setAttribute ('type', 'text')
inputLastName.setAttribute ('required', '')
inputLastName.setAttribute ('placeholder', 'François')

let divAdress = document.createElement('div')
divAdress.setAttribute('class', 'form-group')
let adress = document.createElement('label')
adress.innerHTML = 'Votre Adresse postale'
adress.setAttribute('for', 'adress')
let inputAdress = document.createElement('input')
inputAdress.setAttribute('id', 'adress')
inputAdress.setAttribute('required', '')
inputAdress.setAttribute('placeholder', '25 rue de baba')

let divCity = document.createElement('div')
divCity.setAttribute('class', 'form-group')
let city = document.createElement('label')
city.innerHTML = 'Votre Code postal/Ville'
city.setAttribute('for', 'number')
let inputCity = document.createElement('input')
inputCity.setAttribute('id', 'number')
inputCity.setAttribute('type', 'tel')
inputCity.setAttribute('required', '')
inputCity.setAttribute('placeholder', '97000 RAGIN')


let divMail = document.createElement('div')
divMail.setAttribute('class', 'form-group')
let mail = document.createElement('label')
mail.innerHTML = 'Votre Numéro Adresse Mail'
mail.setAttribute('for', 'mail')
let inputMail = document.createElement('input')
inputMail.setAttribute('id', 'mail')
inputMail.setAttribute('type', 'email')
inputMail.setAttribute('required', '')
inputMail.setAttribute('placeholder', 'monadress@mail.fr')

//// Boutton validation commande 
let button = document.createElement('button')
button.innerHTML = 'Valider la commande'
button.setAttribute('type', 'submit')
button.setAttribute('class', 'btn btn-primary')
button.setAttribute('id', 'confirm-command')


formulaire.appendChild(form)
form.appendChild(divFirstName)
divFirstName.appendChild(firstName)
divFirstName.appendChild(inputFirstName)

form.appendChild(divLastName)
divLastName.appendChild(lastName)
divLastName.appendChild(inputLastName)

form.appendChild(divAdress)
divAdress.appendChild(adress)
divAdress.appendChild(inputAdress)

form.appendChild(divCity)
divCity.appendChild(city)
divCity.appendChild(inputCity)

form.appendChild(divMail)
divMail.appendChild(mail)
divMail.appendChild(inputMail)

form.appendChild(button) */


//// Validation du formulaire 

let formValid = document.getElementById('bouton-valider')
let nom = document.getElementById('nom')
let missNom = document.getElementById('missNom')
let missPrenom = document.getElementById('missPrenom')
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
  }
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
    missMail.textContent =  'Veuillez indiquer votre mail de famille svp'
    missMail.style.color = 'red'
  }
}