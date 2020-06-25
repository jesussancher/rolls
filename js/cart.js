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
        case 'addCampesina':
        counterCampesina(campesina) 
        count ++ 
        break;

        case 'addPicarona': 
        counterPicarona(picarona)
        count ++
        break;
        
        case 'addRancherita': 
        counterRancherita(rancherita)
        count ++
        break;

        case 'addMelosa':
        counterMelosa(melosa) 
        count ++
        break;

        case 'addGranjerita': 
        counterGranjerita(granjerita)
        count ++
        break;

        case 'addCaprichosa': 
        counterCaprichosa(caprichosa)
        count ++
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
    qty: 1
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
    qty: 1
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
    qty: 1
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
    qty: 1
}
function counterMelosa(capi){
    const mel = capi.qty++
    return mel
}

// Granjerita counter
var granjerita = {
    name: "Granjerita",
    qty: 1
}
function counterGranjerita(capi){
    const granj = capi.qty++
    return granj
}

// Caprichosa counter
var caprichosa = {
    name: "Caprichosa",
    qty: 1
}
function counterCaprichosa(capi){
    const qty = capi.qty++
    // console.log(cap)
    return qty
}



function pedido(){
    const productos = [campesina,rancherita,melosa,picarona,granjerita,caprichosa]
    let pedido = []
    for (let i = 0; i<productos.length; i++){
        // pedido[i] = []
        if (productos[i].qty > 1  ){
            pedido.push(`${productos[i].qty-1}%20${productos[i].name+"s"}`)
        } 

    }
    let linkWa = pedido.join('%0A')
    const url = "https://api.whatsapp.com/send?phone=573183147984&text=%C2%A1Hola!%0AQuiero%3A%0A"+linkWa+"%0AGracias"
    const a = document.getElementById("cart")
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
    const carrito = document.getElementById("carritoLista")
    const html = pedido.map(function(productos){
        return ` 
        <div class="list-item row">
        <p style="overflow:hidden" class="K2D white align-left col-8">${productos.name}</p>
        <div class="col-4">
            <div class="row">
                <span class="bebas col-4 cart-btn">-</span>
                <p class="K2D white align-center col-4">${productos.qty-1}</p>
                <span class="bebas col-4 cart-btn">+</span>
            </div>    
        </div>
        </div>
        
        `
    })
    carrito.innerHTML = html
}

var $window = $(window);
var window_height = $window.height();

$(document).ready(function(){
    $(cart).on("click",function(){
  
      if ($(carritoContainer).height() == 0) {
        
        $(mainCarrito).animate({
            height: window_height,
            width: '100%',
            opacity: '100%'
        },"500");

        $(carritoContainer).animate({
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

      
      }
  
    });
  
  });

// let carrito= {
//     campesina: counterCampesina(),
//     rancherita: counterRancherita(),
//     picarona: counterPicarona(),
//     melosa: counterMelosa(),
//     granjerita: counterGranjerita(),
//     caprichosa: counterCaprichosa(capi),
// }