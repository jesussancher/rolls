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


let carrito= {
    campesina: counterCampesina(),
    rancherita: counterRancherita(),
    picarona: counterPicarona(),
    melosa: counterMelosa(),
    granjerita: counterGranjerita(),
    caprichosa: counterCaprichosa(),
}

function debug(){
    const camp = counterCampesina()
    return camp
}

let count = 0
function addItem(id){
    const labelCart = document.getElementById("counterCart")
    // const campesina = document.getElementById("campesina")
    switch(id){
        case 'addCampesina': 
        count += counterCampesina()
        break;

        case 'addPicarona': 
        count += counterPicarona()
        break;
        
        case 'addRancherita': 
        count += counterRancherita()
        break;

        case 'addMelosa': 
        count += counterMelosa()
        break;

        case 'addGranjerita': 
        count += counterGranjerita()
        break;

        case 'addCaprichosa': 
        count += counterCaprichosa()
        break;
    }
    const html = `${count}` 
    labelCart.innerHTML = html
    // console.log(carrito)
    console.log(id)
}
// Campesina counteer
var campesina = 1
function counterCampesina(){
    const camp = campesina++
    // console.log(camp)
    return camp
}

// Rancherita counter
var rancherita = 1
function counterRancherita(){
    const ranch = rancherita++
    return ranch
}

// Picarona counter 
var picarona = 1
function counterPicarona(){
    const pic = picarona++
    return pic
}

// Melosa counter
var melosa = 1
function counterMelosa(){
    const mel = melosa++
    return mel
}

// Granjerita counter
var granjerita = 1
function counterGranjerita(){
    const granj = granjerita++
    return granj
}

// Caprichosa counter
var caprichosa = 1
function counterCaprichosa(){
    const cap = caprichosa++
    return cap
}
