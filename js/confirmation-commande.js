//Récupère l'orderId enregister dans le localStorage
let id = localStorage.getItem('monId')
console.log(id)

let idCommande = document.getElementById("idCommande");

let numCommande = document.createElement('p')
numCommande.setAttribute("class", "text-center font-weight-bold");
numCommande.innerHTML = 'Votre numero de commande est le: '+ id

let message = document.createElement("p");
message.setAttribute("class", "Confirm-commande text-center");
message.innerHTML =
"Orinoco vous remercie pour vos achats!<br> Et nous espérons vous revoir très bientôt!";

let button = document.createElement("a");
button.setAttribute("class", "btn btn-primary btn-dark btnAcc");
button.setAttribute("href", "index.html");
button.innerHTML = "Revenir à la page Accueil";

idCommande.appendChild(numCommande);
idCommande.appendChild(message);
idCommande.appendChild(button);

// Récupere les produits commandés dans le localStorage
let products = JSON.parse(localStorage.getItem("monPanier"));

products.forEach(element => {
    console.log(element)
    let confirmation = document.getElementById('confirmation')
   

    let div = document.createElement('div')
    div.setAttribute('class', 'list')
    let img = document.createElement('img')
    img.setAttribute('src', element.imageUrl)
    img.setAttribute('alt', 'image des peluches')
    let name = document.createElement('p')
    name.innerHTML = element.name
    let price =  document.createElement('p')
    price.innerHTML = element.price/100 + '.00€'

    confirmation.appendChild(div)
    div.appendChild(img)
    div.appendChild(name)
    div.appendChild(price)

});

