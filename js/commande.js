let id = localStorage.getItem('monId')
console.log(id)

let confirmation = document.getElementById("confirmation");

let numCommande = document.createElement('p')
numCommande.setAttribute("class", "text-center font-weight-bold");
numCommande.innerHTML = 'Votre numero de commande est le '+ id

let message = document.createElement("p");
message.setAttribute("class", "Confirm-commande text-center font-weight-bold");
message.innerHTML =
"Merci pour votre commande !<br> Nous espérons vous revoir très bientôt";

let button = document.createElement("a");
button.setAttribute("class", "btn btn-primary btn-dark btnAcc");
button.setAttribute("href", "index.html");
button.innerHTML = "Revenir à la page Accueil";

confirmation.appendChild(numCommande);
confirmation.appendChild(message);
confirmation.appendChild(button);


