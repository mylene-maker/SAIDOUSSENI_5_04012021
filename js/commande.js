let confirmation = document.getElementById("confirmation");

let message = document.createElement("p");
message.setAttribute("class", "Confirm-commande text-center font-weight-bold");
message.innerHTML =
  "Merci pour votre commande !<br> Nous espérons vous revoir très bientôt";

let button = document.createElement("a");
button.setAttribute("class", "btn btn-primary btn-dark btnAcc");
button.setAttribute("href", "index.html");
button.innerHTML = "Revenir à la page Accueil";

confirmation.appendChild(message);
confirmation.appendChild(button);

function idCommande() {
  let idCommande = document.getElementById("idCommande");
  let id = document.createElement("h1");
  id.innerHTML;
}
