
// creer une variable qui contient l'id recuperer via l'Url 
let productId
productId = new URL(window.location.href).searchParams.get('id')
let apiUrl = 'http://localhost:3000/api/teddies/'

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
  price.innerHTML = teddies.price/100 + '€'

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


  teddy.appendChild(container)
  container.appendChild(title)
  title.appendChild(price)
  container.appendChild(div)
  div.appendChild(divImg)
  divImg.appendChild(img)
  div.appendChild(divDesc)
  divDesc.appendChild(description)
  divDesc.appendChild(p)
  divDesc.appendChild(colors)

})


// le panier se fera avec le cession storage - local storage   


