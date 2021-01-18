////////////Creation du formulaire 

const formulaire = document.getElementById('formulaire')

let form = document.createElement('form')
form.setAttribute('class', 'form')

/*let divSexe = document.createElement('div')
divSexe.setAttribute('class', 'form-group')
let sexe = document.createElement('label')
sexe.innerHTML = 'Civilité'
sexe.setAttribute('for', 'sexe')
let inputSexeF = document.createElement('input')
inputSexeF.setAttribute('id', 'sexe')
inputSexeF.setAttribute('type', 'checkbox')
inputSexeF.setAttribute('required', '')
let inputSexeM = document.createElement('input')
inputSexeM.setAttribute('id', 'sexe')
inputSexeM.setAttribute('type', 'checkbox') */


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

let button = document.createElement('button')
button.innerHTML = 'Envoyer'
button.setAttribute('type', 'submit')
button.setAttribute('class', 'btn btn-primary')

formulaire.appendChild(form)

/*form.appendChild(divSexe)
divSexe.appendChild(sexe)
divSexe.appendChild(inputSexeF)
divSexe.appendChild(inputSexeM) */


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










