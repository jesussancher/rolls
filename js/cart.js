function showCart(){
    const cart = document.getElementById("cart")
    const invisibleClass = cart.classList.contains("invisible")

    const counterCart = document.getElementById("counterCart")

    if (invisibleClass){
        cart.classList.remove("invisible")
        cart.classList.add("visible")
        
        setTimeout(function(){
            counterCart.classList.remove("invisible")
        }, 1000)
        counterCart.classList.add("visible")

    }else{

    }
}

itemCounter = function(){

}
var itemCounter = 1



// function debug(){
//     const camp = counterCampesina()
//     return camp
// }

let count = 0
function addItem(id){
    const labelCart = document.getElementById("counterCart")
    // const campesina = document.getElementById("campesina")
    switch(id){
        // Campesina
        case 'addCampesina':
        counterCampesina(campesina) 
        count ++ 
        break;

        case 'plusCampesina':
        counterCampesina(campesina) 
        count ++ 
        break;

        case 'lessCampesina':
        minusCampesina(campesina) 
        count -- 
        break;

        // Picaron
        case 'addPicarona': 
        counterPicarona(picarona)
        count ++
        break;

        case 'plusPicarona': 
        counterPicarona(picarona)
        count ++
        break;

        case 'lessPicarona': 
        minusPicarona(picarona)
        count --
        break;
        
        // Rancherita
        case 'addRancherita': 
        counterRancherita(rancherita)
        count ++
        break;

        case 'plusRancherita': 
        counterRancherita(rancherita)
        count ++
        break;

        case 'lessRancherita': 
        minusRancherita(rancherita)
        count --
        break;

        // Melosa
        case 'addMelosa':
        counterMelosa(melosa) 
        count ++
        break;

        case 'plusMelosa':
        counterMelosa(melosa) 
        count ++
        break;

        case 'lessMelosa':
        minusMelosa(melosa) 
        count --
        break;

        // Granjerita
        case 'addGranjerita': 
        counterGranjerita(granjerita)
        count ++
        break;

        case 'plusGranjerita': 
        counterGranjerita(granjerita)
        count ++
        break;

        case 'lessGranjerita': 
        minusGranjerita(granjerita)
        count --
        break;

        // Caprichosa
        case 'plusCaprichosa': 
        counterCaprichosa(caprichosa)
        count ++
        break;

        case 'addCaprichosa': 
        counterCaprichosa(caprichosa)
        count ++
        break;

        case 'lessCaprichosa': 
        minusCaprichosa(caprichosa)
        count --
        break;
    }
    const html = `${count}` 
    labelCart.innerHTML = html
    // console.log(carrito)
    console.log(id)
    // printCart()
}
// Campesina counteer
var campesina = {
    name: "Campesina",
    qty: 1,
    price: 5000
}
function counterCampesina(campi){
    const camp = campi.qty++
    // console.log(camp)
    return camp
}
function minusCampesina(campi){
    const camp = campi.qty--
    // console.log(camp)
    return camp
}

// Rancherita counter
var rancherita = {
    name: "Rancherita",
    qty: 1,
    price: 5000
}
function counterRancherita(ranchi){
    const ranch = ranchi.qty++
    return ranch
}
function minusRancherita(ranchi){
    const ranch = ranchi.qty--
    return ranch
}

// Picarona counter 
var picarona = {
    name: "Picarona",
    qty: 1,
    price: 5000
}
function counterPicarona(pica){
    const pic = pica.qty++
    return pic
}
function minusPicarona(pica){
    const pic = pica.qty--
    return pic
}

// Melosa counter
var melosa = {
    name: "Melosa",
    qty: 1,
    price: 5000
}
function counterMelosa(capi){
    const mel = capi.qty++
    return mel
}
function minusMelosa(pica){
    const pic = pica.qty--
    return pic
}

// Granjerita counter
var granjerita = {
    name: "Granjerita",
    qty: 1,
    price: 5000
}
function counterGranjerita(capi){
    const granj = capi.qty++
    return granj
}
function minusGranjerita(pica){
    const pic = pica.qty--
    return pic
}

// Caprichosa counter
var caprichosa = {
    name: "Caprichosa",
    qty: 1,
    price: 5000
}
function counterCaprichosa(capi){
    const qty = capi.qty++
    // console.log(cap)
    return qty
}
function minusCaprichosa(pica){
    const pic = pica.qty--
    return pic
}


function pedido(){
    const name = document.getElementById("name")
    const adress1 = document.getElementById("adress1").value
    const adress2 = document.getElementById("adress2").value
    const pAdress1 = adress1.replace(/\s/g,'%20')
    const pAdress2 = adress2.replace(/\s/g,'%20')
    const productos = [campesina,rancherita,melosa,picarona,granjerita,caprichosa]
    let pedido = []
    for (let i = 0; i<productos.length; i++){
        // pedido[i] = []
        if (productos[i].qty > 1  ){
            pedido.push(`${productos[i].qty-1}%20${productos[i].name+"s"}`)
        } 

    }
    let linkWa = pedido.join('%0A')
    const url = "https://api.whatsapp.com/send?phone=573183147984&text=%C2%A1Hola!%20Soy%20"+name.value+"%0AQuiero%3A%0A"+linkWa+"%0APara "+pAdress1+"%20No%20"+pAdress2+"%0AGracias"
    const a = document.getElementById("confirmar")
    a.href = url
    console.log(url)
    // return url
}

function addCart(){

    const productos = [campesina,rancherita,melosa,picarona,granjerita,caprichosa]
    let pedido = []
    for (let i = 0; i<productos.length; i++){
        if (productos[i].qty > 1  ){
            pedido.push(productos[i])
        }
    }
    printCart(pedido)
    return pedido
}

function printCart(pedido){
    const precios = document.getElementById("carritoContainer")
    const datos = document.getElementById("carritoDatos")
    const carrito = document.getElementById("carritoLista")
    let total = 0
    let printTotal = ''
    const html = pedido.map(function(productos){
        total = total + productos.price*(productos.qty-1)
        printTotal = '$'+total
        return (total,` 
        <div class="list-item row">
        <p style="overflow:hidden" class="K2D white align-left col-7">${productos.name}</p>
        <div class="col-5">
            <div class="row">
                <span id="less${productos.name}" onclick="addItem(id),addCart()" class="bebas col-4 cart-btn">-</span>
                <p class="K2D white align-center col-4">${productos.qty-1}</p>
                <span id="plus${productos.name}" onclick="addItem(id),addCart()" class="bebas col-4 cart-btn">+</span>
            </div>    
        </div>
        </div>
        
        `)
    })

    const addTotal = `
        <div class="list-item row">
            <p style="overflow:hidden; font-weight=700;" class="K2D orange align-left col-8">TOTAL</p>
            <div class="col-4 align-center">
                <p class="K2D white align-center col-4">${printTotal}</p>
            </div>
        </div>
        `

    const addButton = `
    <div style="border-bottom: 0 !important" class="list-item align-center">
        <a id="agregarMas" target="_blank" onclick="printInput()" class="add-btn K2D orange">Continuar</a>
    </div>
    `

    // html.push(addTotal)
    html.push(addTotal,addButton)
    carrito.innerHTML = html
    // console.log(pedido)
}


function printInput(){
    const precios = document.getElementById("carritoContainer")
    const datos = document.getElementById("carritoDatos")
    const carrito = document.getElementById("carritoDatos")

    datos.classList.remove("invisible")
    precios.classList.add("invisible")
    datos.classList.add("visible")
}



var $window = $(window);
var window_height = $window.height();

$(document).ready(function(){
    $(cart).on("click",function(){
  
      if ($(carritoContainer).height() == 0) {
        
        $(mainCarrito).animate({
            height: window_height+100,
            width: '100%',
            opacity: '100%'
        },"500");

        $(carritoContainer).animate({
            height: window_height-100,
            width: '90%',
            opacity: '100%'
        },"500");

        $(carritoDatos).animate({
            height: window_height-100,
            width: '90%',
            opacity: '100%'
        },"500");
  
  
      } else {
  
        $(mainCarrito).animate({
            height: '0px',
            width: '0%',
            opacity: '0%'
          },"slow");
    
        $(carritoContainer).animate({
          height: '0px',
          width: '0%',
          opacity: '0%'
        },"slow");

        $(carritoDatos).animate({
            height: '0px',
            width: '0%',
            opacity: '0%'
          },"slow");

      
      }
  
    });

  });

  function hideCart(){
    const cart = document.getElementById("mainCarrito")
    const invisibleClass = cart.classList.contains("invisible")

    if (invisibleClass){

    }else{
        cart.classList.add("invisible")
        cart.classList.remove("visible")
    }
}
  
// let carrito= {
//     campesina: counterCampesina(),
//     rancherita: counterRancherita(),
//     picarona: counterPicarona(),
//     melosa: counterMelosa(),
//     granjerita: counterGranjerita(),
//     caprichosa: counterCaprichosa(capi),
// }