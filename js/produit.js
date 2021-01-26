
// creer une variable qui contient l'id recuperer via l'Url 
let productId
productId = new URL(window.location.href).searchParams.get('id')
let apiUrl = 'http://localhost:3000/api/teddies/'

///Creation du panier avec localStorage
let panier = JSON.parse(localStorage.getItem('monPanier'))

if(localStorage.getItem('monPanier')){
  console.log('le panier est ok')
  console.log(localStorage.getItem('monPanier'))
} else{
  console.log('creation du panier')
  let init = []
  localStorage.setItem('monPanier', (JSON.stringify(init)))
}

//L'ajouter a l'url du fetch
fetch(`${apiUrl}${productId}`)
.then((response) => response.json())
.then(function(data){
  console.log(data)
  let teddies = data

////elements du DOM
  const teddy = document.getElementById('teddy')

  let container = document.createElement('div')
  container.setAttribute('class', 'container')

  let title = document.createElement('h4')
  title.setAttribute('class', 'my-4')
  title.innerHTML= teddies.name 

  let price = document.createElement('p')
  price.setAttribute('class', 'price')
  price.innerHTML = teddies.price/100 + ',00' + '€'

  let div = document.createElement('div')
  div.setAttribute('class', 'row')

  let divImg = document.createElement('div')
  divImg.setAttribute('class', 'col-md-8')

  let img = document.createElement('img')
  img.setAttribute('class', 'img-fluid')
  img.setAttribute("src", teddies.imageUrl)

  let divDesc = document.createElement('div')
  divDesc.setAttribute('class', 'col-md-4')

  let description = document.createElement('h5')
  description.setAttribute('class', 'my-3')
  description.innerHTML = 'Description du produit'

  let p = document.createElement('p')
  p.innerHTML = teddies.description

  let colors = document.createElement('h5')
  colors.setAttribute('class', 'my-3')
  colors.innerHTML = 'Personnalisez votre article'

   
  let colorsChoice = document.createElement('select')
  let choice = document.createElement('option')
  choice.innerHTML = teddies.colors[0]
  let choice_1 = document.createElement('option')
  choice_1.innerHTML = teddies.colors[1]
  let choice_2 = document.createElement('option')
  choice_2.innerHTML = teddies.colors[2]
  
  /// Ajout des article au panier
function addCart(){

  const getButton = document.getElementById("add-basket");

  console.log(getButton)
  getButton.addEventListener("click", async function(){
    panier.push(teddies)
    localStorage.setItem('monPanier', JSON.stringify(panier))

/// ajouter une alert pour prevenir que le produit est ajouter

    alert('Le produit à bien été ajouter dans votre panier!')
/// Recharge la page
    location.reload()
  })
} addCart()

  teddy.appendChild(container)
  container.appendChild(title)
  divDesc.appendChild(price)
  container.appendChild(div)
  div.appendChild(divImg)
  divImg.appendChild(img)
  div.appendChild(divDesc)
  divDesc.appendChild(description)
  divDesc.appendChild(p)
  divDesc.appendChild(colors)
  divDesc.appendChild(colorsChoice)
  colorsChoice.appendChild(choice)
  colorsChoice.appendChild(choice_1)
  colorsChoice.appendChild(choice_2)
})



