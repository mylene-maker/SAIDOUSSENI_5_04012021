
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
  
  /// Boutton ajouter un article au panier  
  let button = document.createElement('button')
  button.innerHTML = 'Commander'
  button.setAttribute('class', 'btn btn-dark add-to-cart')
  button.setAttribute('data-id', 'teddies._id')
  button.setAttribute('data-name', 'teddies.name')
  button.setAttribute('data-price', 'teddies.price')
  button.setAttribute('type', 'submit')

  //// click boutton ajouter au panier

  button.addEventListener('click', function(){
    button.innerHTML = 'Ajouté au panier !' 
    
    ////recuperer les infos du produit  ///// Sauvegarde des donnees avec sessionStorage
  
    let id = sessionStorage.setItem('article', teddies._id)
    let name = sessionStorage.setItem('nom', teddies.name)
    let price = sessionStorage.setItem('prix', teddies.price) 
    console.log(sessionStorage)
  
  })
 

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
  divDesc.appendChild(button)
})


// le panier se fera avec le cession storage - local storage   


