
let confirmation = document.getElementById('confirmation')

let message = document.createElement('p')
message.setAttribute('class', 'Confirm-commande')
message.innerHTML = 'Merci pour votre commande !<br> Nous espérons vous revoir très bientôt'

let icon = document.createElement('i')
icon.setAttribute('class', 'fas fa-check-square')

let button = document.createElement('a')
button.setAttribute('class', 'btn btn-primary')
button.setAttribute('href', 'index.html')
button.innerHTML = 'Revenir à la page Accueil'

confirmation.appendChild(icon)
confirmation.appendChild(message)
confirmation.appendChild(button)

