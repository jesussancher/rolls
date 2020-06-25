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


// let carrito= {
//     campesina: counterCampesina(),
//     rancherita: counterRancherita(),
//     picarona: counterPicarona(),
//     melosa: counterMelosa(),
//     granjerita: counterGranjerita(),
//     caprichosa: counterCaprichosa(capi),
// }

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

// Rancherita counter
var rancherita = {
    name: "Rancherita",
    qty: 1
}
function counterRancherita(ranchi){
    const ranch = ranchi.qty++
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
    let psudoLink = ''
    let pseudo = []
    let link = ''
    for (let i = 0; i<productos.length; i++){
        pedido[i] = []
        if (productos[i].qty > 1  ){
            pedido[i].push(productos[i].qty-1,productos[i].name+"s")
        } 

    }

    // for (let o = 0; o < pedido.length; o++){
    //     if(o%2  == 0){
    //         pseudo[o] = 
    //     }
    // }
    const url = "https://api.whatsapp.com/send?phone=573183147984&text=%C2%A1Hola!%0AQuiero%3A%0A1%20Rancherita%2C%202%20Picaronas%20y%204%20Caprichosas.%0AGracias"
    console.log(pedido)
}
