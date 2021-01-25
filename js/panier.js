///// Recuperer le localStorage
let panier = JSON.parse(localStorage.getItem('monPanier'))
console.log(localStorage)

panier.map(function(element){
    
})

////Tableau de presentation du panier 

let tableau = document.createElement('table')
tableau.setAttribute('class', 'table')
let thead = document.createElement('thead')
thead.setAttribute('class', 'font-weight-bold')
thead.innerHTML = 'Recapitulatif de votre commande'
let ligne_1 = document.createElement('tr')
let colone_1 = document.createElement('th')
colone_1.innerHTML = 'Article'
let colone_2 = document.createElement('th')
colone_2.innerHTML = 'Nom'
let colone_3 = document.createElement('th')
colone_3.innerHTML = 'Prix'
let tbody = document.createElement('tbody')
tbody.setAttribute('id', 'cart-tablebody')
let subtotal = document.createElement('p')
subtotal.innerHTML = 'Total :' 
let span = document.createElement('p')
span.setAttribute('class', 'subtotal')

////////////Formulaire de commande

const formulaire = document.getElementById('formulaire')

let form = document.createElement('form')
form.setAttribute('class', 'form')

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


formulaire.appendChild(tableau)
tableau.appendChild(thead)
thead.appendChild(ligne_1)
ligne_1.appendChild(colone_1)
ligne_1.appendChild(colone_2)
ligne_1.appendChild(colone_3)
tableau.appendChild(tbody)
tableau.appendChild(subtotal)
subtotal.appendChild(span)

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

form.appendChild(button)
