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





        // Maracunassa
        case 'plusMaracunassa': 
        counterMaracunassa(maracunassa)
        count ++
        break;

        case 'addMaracunassa': 
        counterMaracunassa(maracunassa)
        count ++
        break;

        case 'lessMaracunassa': 
        minusMaracunassa(maracunassa)
        count --
        break;

        // Naranana
        case 'plusNaranana': 
        counterNaranana(naranana)
        count ++
        break;

        case 'addNaranana': 
        counterNaranana(naranana)
        count ++
        break;

        case 'lessNaranana': 
        minusNaranana(naranana)
        count --
        break;

        // Naranana
        case 'plusTengerina': 
        counterTangerina(tangerina)
        count ++
        break;

        case 'addTangerina': 
        counterTangerina(tangerina)
        count ++
        break;

        case 'lessTangerina': 
        minusTangerina(tangerina)
        count --
        break;

         // Limonango
         case 'plusLimonango': 
         counterLimonango(limonango)
         count ++
         break;
 
         case 'addLimonango': 
         counterLimonango(limonango)
         count ++
         break;
 
         case 'lessLimonango': 
         minusLimonango(limonango)
         count --
         break;

         // Citrinda
         case 'plusCitrinda': 
         counterCitrinda(citrinda)
         count ++
         break;
 
         case 'addCitrinda': 
         counterCitrinda(citrinda)
         count ++
         break;
 
         case 'lessCitrinda': 
         minusCitrinda(citrinda)
         count --
         break;

         // Mentulada
         case 'plusMentulada': 
         counterMentulada(mentulada)
         count ++
         break;
 
         case 'addMentulada': 
         counterMentulada(mentulada)
         count ++
         break;
 
         case 'lessMentulada': 
         minusMentulada(mentulada)
         count --
         break;



          // Mazorcada
         case 'plusMazorcada': 
         counterMazorcada(mazorcada)
         count ++
         break;
 
         case 'addMazorcada': 
         counterMazorcada(mazorcada)
         count ++
         break;
 
         case 'lessMazorcada': 
         minusMazorcada(mazorcada)
         count --
         break;
    }
    const html = `${count}`
    if (count > 0){
    labelCart.innerHTML = html
    // console.log(carrito)
    console.log(id)
    // printCart()
    }else{
        count = 0
        labelCart.innerHTML = count
    }
    
}
// Campesina counteer
var campesina = {
    name: "Campesina",
    qty: 1,
    price: 5000
}
function counterCampesina(campi){
    const label = document.getElementById("labelCamp")
    const camp = campi.qty++
    // console.log(camp)
    label.innerHTML = campi.qty-1
    return camp
}
function minusCampesina(campi){
    const label = document.getElementById("labelCamp")
    const camp = campi.qty--
    // console.log(camp)
    if (campi.qty > 0)
    {
        label.innerHTML = campi.qty-1
    }else{
        campi.qty = 1
        label.innerHTML = 0
    }
    
    return camp
}

// Rancherita counter
var rancherita = {
    name: "Rancherita",
    qty: 1,
    price: 5000
}
function counterRancherita(ranchi){
    const label = document.getElementById("labelRanch")
    const ranch = ranchi.qty++
    // console.log(camp)
    label.innerHTML = ranchi.qty-1
    return ranch
}
function minusRancherita(ranchi){
    const label = document.getElementById("labelRanch")
    const ranch = ranchi.qty--
    // console.log(camp)
    if (ranchi.qty > 0)
    {
        label.innerHTML = ranchi.qty-1
    }else{
        ranchi.qty = 1
        label.innerHTML = 0
    }
    
    return ranch
}

// Picarona counter 
var picarona = {
    name: "Picarona",
    qty: 1,
    price: 5000
}
function counterPicarona(pica){
    const label = document.getElementById("labelPica")
    const pic = pica.qty++
    // console.log(camp)
    label.innerHTML = pica.qty-1
    // return camp
    // const pic = pica.qty++
    return pic
}
function minusPicarona(pica){
    const label = document.getElementById("labelPica")
    const pic = pica.qty--
    // console.log(camp)
    if (pica.qty > 0)
    {
        label.innerHTML = pica.qty-1
    }else{
        pica.qty = 1
        label.innerHTML = 0
    }
    
    return pic
}


// Caprichosa counter
var caprichosa = {
    name: "Caprichosa",
    qty: 1,
    price: 5000
}
function counterCaprichosa(capi){
    const label = document.getElementById("labelCapi")
    const cap = capi.qty++
    // console.log(camp)
    label.innerHTML = capi.qty-1
    // return camp
    // const pic = pica.qty++
    return cap
}
function minusCaprichosa(capi){
    const label = document.getElementById("labelCapi")
    const cap = capi.qty--
    // console.log(camp)
    if (capi.qty > 0)
    {
        label.innerHTML = capi.qty-1
    }else{
        capi.qty = 1
        label.innerHTML = 0
    }
    
    return cap
}


// Melosa counter
var melosa = {
    name: "Melosa",
    qty: 1,
    price: 5000
}
function counterMelosa(capi){
    const label = document.getElementById("labelMel")
    const cap = capi.qty++
    // console.log(camp)
    label.innerHTML = capi.qty-1
    // return camp
    // const pic = pica.qty++
    return cap
}
function minusMelosa(capi){
    const label = document.getElementById("labelMel")
    const cap = capi.qty--
    // console.log(camp)
    if (capi.qty > 0)
    {
        label.innerHTML = capi.qty-1
    }else{
        capi.qty = 1
        label.innerHTML = 0
    }
    
    return cap
}

// Granjerita counter
var granjerita = {
    name: "Granjerita",
    qty: 1,
    price: 5000
}
function counterGranjerita(capi){
    const label = document.getElementById("labelGran")
    const cap = capi.qty++
    // console.log(camp)
    label.innerHTML = capi.qty-1
    // return camp
    // const pic = pica.qty++
    return cap
}
function minusGranjerita(capi){
    const label = document.getElementById("labelGran")
    const cap = capi.qty--
    // console.log(camp)
    if (capi.qty > 0)
    {
        label.innerHTML = capi.qty-1
    }else{
        capi.qty = 1
        label.innerHTML = 0
    }
    
    return cap
}


//Jugos 

// Maracunassa counteer
var maracunassa = {
    name: "Maracunassa",
    qty: 1,
    price: 4000
}
function counterMaracunassa(campi){
    const label = document.getElementById("labelMaracu")
    const camp = campi.qty++
    // console.log(camp)
    label.innerHTML = campi.qty-1
    return camp
}
function minusMaracunassa(campi){
    const label = document.getElementById("labelMaracu")
    const camp = campi.qty--
    // console.log(camp)
    if (campi.qty > 0)
    {
        label.innerHTML = campi.qty-1
    }else{
        campi.qty = 1
        label.innerHTML = 0
    }
    
    return camp
}

// Naranana counteer
var naranana = {
    name: "Naranana",
    qty: 1,
    price: 4000
}
function counterNaranana(campi){
    const label = document.getElementById("labelNarana")
    const camp = campi.qty++
    // console.log(camp)
    label.innerHTML = campi.qty-1
    return camp
}
function minusNaranana(campi){
    const label = document.getElementById("labelNarana")
    const camp = campi.qty--
    // console.log(camp)
    if (campi.qty > 0)
    {
        label.innerHTML = campi.qty-1
    }else{
        campi.qty = 1
        label.innerHTML = 0
    }
    
    return camp
}

// Tangerina counteer
var tangerina = {
    name: "Tangerina",
    qty: 1,
    price: 4000
}
function counterTangerina(campi){
    const label = document.getElementById("labelTange")
    const camp = campi.qty++
    // console.log(camp)
    label.innerHTML = campi.qty-1
    return camp
}
function minusTangerina(campi){
    const label = document.getElementById("labelTange")
    const camp = campi.qty--
    // console.log(camp)
    if (campi.qty > 0)
    {
        label.innerHTML = campi.qty-1
    }else{
        campi.qty = 1
        label.innerHTML = 0
    }
    
    return camp
}

// Limonango counteer
var limonango = {
    name: "Limonango",
    qty: 1,
    price: 4000
}
function counterLimonango(campi){
    const label = document.getElementById("labelLimon")
    const camp = campi.qty++
    // console.log(camp)
    label.innerHTML = campi.qty-1
    return camp
}
function minusLimonango(campi){
    const label = document.getElementById("labelLimon")
    const camp = campi.qty--
    // console.log(camp)
    if (campi.qty > 0)
    {
        label.innerHTML = campi.qty-1
    }else{
        campi.qty = 1
        label.innerHTML = 0
    }
    
    return camp
}

// Cintrinda counteer
var citrinda = {
    name: "Citrinda",
    qty: 1,
    price: 4000
}
function counterCitrinda(campi){
    const label = document.getElementById("labelCitri")
    const camp = campi.qty++
    // console.log(camp)
    label.innerHTML = campi.qty-1
    return camp
}
function minusCitrinda(campi){
    const label = document.getElementById("labelCitri")
    const camp = campi.qty--
    // console.log(camp)
    if (campi.qty > 0)
    {
        label.innerHTML = campi.qty-1
    }else{
        campi.qty = 1
        label.innerHTML = 0
    }
    
    return camp
}

// Mentulada counteer
var mentulada = {
    name: "Mentulada",
    qty: 1,
    price: 4000
}
function counterMentulada(campi){
    const label = document.getElementById("labelMentu")
    const camp = campi.qty++
    // console.log(camp)
    label.innerHTML = campi.qty-1
    return camp
}
function minusMentulada(campi){
    const label = document.getElementById("labelMentu")
    const camp = campi.qty--
    // console.log(camp)
    if (campi.qty > 0)
    {
        label.innerHTML = campi.qty-1
    }else{
        campi.qty = 1
        label.innerHTML = 0
    }
    
    return camp
}


// Comidas Rápidas

// Mazorcada counteer
var mazorcada = {
    name: "Mazorcada",
    qty: 1,
    price: 12000
}
function counterMazorcada(campi){
    const label = document.getElementById("labelMazorca")
    const camp = campi.qty++
    // console.log(camp)
    label.innerHTML = campi.qty-1
    return camp
}
function minusMazorcada(campi){
    const label = document.getElementById("labelMazorca")
    const camp = campi.qty--
    // console.log(camp)
    if (campi.qty > 0)
    {
        label.innerHTML = campi.qty-1
    }else{
        campi.qty = 1
        label.innerHTML = 0
    }
    
    return camp
}

function pedido(){
    const name = document.getElementById("name")
    const adress1 = document.getElementById("adress1").value
    const adress2 = document.getElementById("adress2").value
    const barrio = document.getElementById("barrio").value
    const pAdress1 = adress1.replace(/\s/g,'%20')
    const pAdress2 = adress2.replace(/\s/g,'%20')
    const pBarrio = barrio.replace(/\s/g,'%20')
    const productos = [campesina,rancherita,melosa,picarona,granjerita,caprichosa,maracunassa,naranana,tangerina,limonango,citrinda,mentulada,mazorcada]
    let pedido = []
    for (let i = 0; i<productos.length; i++){
        // pedido[i] = []
        if (productos[i].qty > 1  ){
            pedido.push(`${productos[i].qty-1}%20${productos[i].name+"s"}`)
        } 

    }
    let linkWa = pedido.join('%0A')
    const url = "https://api.whatsapp.com/send?phone=573183147984&text=%C2%A1Hola!%20Soy%20"+name.value+"%0AQuiero%3A%0A"+linkWa+"%0APara "+pAdress1+"%20No%20"+pAdress2+"%0AEn%20el%20barrio%20"+pBarrio+"%0AGracias"
    const a = document.getElementById("enviar")
    a.href = url
    console.log(url)
    // return url
}

function addCart(){

    const productos = [campesina,rancherita,melosa,picarona,granjerita,caprichosa]
    const jugos = [maracunassa,naranana,tangerina,limonango,citrinda,mentulada]
    const comidasRapidas = [mazorcada]
    let pedido = []
    let pedidoJugos = []
    let pedidoComidas = []

    for (let i = 0; i<productos.length; i++){
        if (productos[i].qty > 1  ){
            pedido.push(productos[i])
        }
    }
    for (let o = 0; o<jugos.length; o++){
        if (jugos[o].qty > 1  ){
            pedidoJugos.push(jugos[o])
        }
    }
    for (let p = 0; p<comidasRapidas.length; p++){
        if (comidasRapidas[p].qty > 1  ){
            pedidoComidas.push(comidasRapidas[p])
        }
    }
    printCart(pedido,pedidoJugos,pedidoComidas)
    return pedido,pedidoJugos,pedidoComidas
}

function printCart(pedido,jugos,comidas){
    const precios = document.getElementById("carritoContainer")
    const datos = document.getElementById("carritoDatos")
    const carrito = document.getElementById("carritoLista")
    const carritoTotal = document.getElementById("carritoListaTotal")
    const gracias = document.getElementById("thanks")
    const name = document.getElementById("name")

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

    const juice = jugos.map(function(jugos){
        total = total + jugos.price*(jugos.qty-1)
        printTotal = '$'+total
        return (total,` 
        <div class="list-item row">
        <p style="overflow:hidden" class="K2D white align-left col-7">${jugos.name}</p>
        <div class="col-5">
            <div class="row">
                <span id="less${jugos.name}" onclick="addItem(id),addCart()" class="bebas col-4 cart-btn">-</span>
                <p class="K2D white align-center col-4">${jugos.qty-1}</p>
                <span id="plus${jugos.name}" onclick="addItem(id),addCart()" class="bebas col-4 cart-btn">+</span>
            </div>    
        </div>
        </div>
        
        `)
    })

    const FastFood = comidas.map(function(comidas){
        total = total + comidas.price*(comidas.qty-1)
        printTotal = '$'+total
        return (total,` 
        <div class="list-item row">
        <p style="overflow:hidden" class="K2D white align-left col-7">${comidas.name}</p>
        <div class="col-5">
            <div class="row">
                <span id="less${comidas.name}" onclick="addItem(id),addCart()" class="bebas col-4 cart-btn">-</span>
                <p class="K2D white align-center col-4">${comidas.qty-1}</p>
                <span id="plus${comidas.name}" onclick="addItem(id),addCart()" class="bebas col-4 cart-btn">+</span>
            </div>    
        </div>
        </div>
        
        `)
    })

    const html2 = pedido.map(function(productos){
        const printTotalidad = '$ '+ productos.price*(productos.qty-1)
        return (total,` 
        <div class="list-item row">
        <p class="K2D white align-center col-2">${productos.qty-1}</p>
        <p style="overflow:hidden" class="K2D white align-left col-6">${productos.name}</p>
        <p class="K2D white align-center col-4">${printTotalidad}</p>
        </div>
        
        `)
    })

    const juice2 = jugos.map(function(jugos){
        const printTotalid = '$ '+ jugos.price*(jugos.qty-1)
        return (total,` 
        <div class="list-item row">
        <p class="K2D white align-center col-2">${jugos.qty-1}</p>
        <p style="overflow:hidden" class="K2D white align-left col-6">${jugos.name}</p>
        <p class="K2D white align-center col-4">${printTotalid}</p>
        </div>
        
        `)
    })

    const FastFood2 = comidas.map(function(comidas){
        const printTotalid = '$ '+ comidas.price*(comidas.qty-1)
        return (total,` 
        <div class="list-item row">
        <p class="K2D white align-center col-2">${comidas.qty-1}</p>
        <p style="overflow:hidden" class="K2D white align-left col-6">${comidas.name}</p>
        <p class="K2D white align-center col-4">${printTotalid}</p>
        </div>
        
        `)
    })

    const title = function (ttl){
        let titulo = ``
        switch (ttl){
            case pedido:
                if(html != ``){
                titulo = `
                <div class="list-item align-center">
                    <p style="font-weight=700;" class="K2D orange">ROLLS</p>
                    
                </div>
                ` 
                }
            break;

            case jugos:

                if(juice != ``){
                    titulo = `
                    <div class="list-item align-center">
                        <p style="font-weight=700;" class="K2D orange">JUGOS</p>
                        
                    </div>
                    `
                }
                
            break;

            case comidas:

                if(FastFood != ``){
                    titulo = `
                    <div class="list-item align-center">
                        <p style="font-weight=700;" class="K2D orange">Comidas</p>
                        
                    </div>
                    `
                }
                
            break;
        }
        return titulo
    }

    const ty = "¡Gracias " + name.value.replace(/ .*/,'') + "!"
        
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

    const confirmButton = `
    <div style="border-bottom: 0 !important" class="list-item align-center">
        <a id="enviar" target="_blank" onclick="pedido()" class="add-btn K2D orange">Confirmar</a>
    </div>
    <br><br>
    <a onclick="printBack('carritoTotal')" target="_blank"  style="cursor: pointer;" class="K2D white">Atrás</a>

    `

    // html.push(addTotal)
    html.unshift(title(pedido))
    juice.unshift(title(jugos))
    FastFood.unshift(title(comidas))
    html.push(juice,FastFood,addTotal,addButton)

    // html2.unshift(title(pedido))
    // juice2.unshift(title(jugos))
    html2.push(juice2,FastFood2,addTotal,confirmButton)

    carritoTotal.innerHTML = html2
    carrito.innerHTML = html
    gracias.innerHTML = ty
    // console.log(pedido)
}


function printInput(){
    const precios = document.getElementById("carritoContainer")
    const datos = document.getElementById("carritoDatos")

    datos.classList.remove("invisible")
    precios.classList.add("invisible")
    precios.classList.remove("visible")
    datos.classList.add("visible")
}

function printBack(id){
    const precios = document.getElementById("carritoContainer")
    const datos = document.getElementById("carritoDatos")
    const back = document.getElementById(id)

    if(id == 'carritoDatos'){
        back.classList.add("invisible")
        precios.classList.remove("invisible")
        precios.classList.add("visible")
        back.classList.remove("visible")
    } else if (id == 'carritoTotal'){
        back.classList.add("invisible")
        datos.classList.remove("invisible")
        datos.classList.add("visible")
        back.classList.remove("visible")
    }
}

const burgerInput = document.getElementById("burgerInput")
burgerInput.addEventListener('submit',listenBurger)

function listenBurger(event){
    event.preventDefault()
    const carne = document.getElementsByName("carne")
    let carneChoose = ""
    for (let i = 0; i < carne.length; i++ ){
        if(carne[i].checked){
            carneChoose = carne[i].value
        }
    }
    
    const tipo = document.getElementsByName("tipo")
    let tipoChoose = ""
    for (let o = 0; o < tipo.length; o++ ){
        if(tipo[o].checked){
            tipoChoose = tipo[o].value
        }
    }

    switch (carneChoose){
        case "res":
            switch (tipoChoose){
                case "pan":
                    addItem("addBurgerResPan")
                break

                case "patacon":
                    addItem("addBurgerResPatacon")
                break;
            }
        break;

        case "cerdo":
            switch (tipoChoose){
                case "pan":
                    addItem("addBurgerCerdoPan")
                break

                case "patacon":
                    addItem("addBurgerCerdoPan")
                break;
            }
        break;
    }

    showCart()
    
    // printCounter('lessMazorcada','labelMazorca','space-32','space-33')
}

const input = document.getElementById("input")
input.addEventListener('submit',printTotal)

function printTotal(event){
    event.preventDefault()
    const total = document.getElementById("carritoTotal")
    const datos = document.getElementById("carritoDatos")

    total.classList.remove("invisible")
    datos.classList.add("invisible")
    datos.classList.remove("visible")
    total.classList.add("visible")
}

function printCounter(id1,id2,sp1,sp2){
    const minus = document.getElementById(id1)
    const label = document.getElementById(id2)
    const space1 = document.getElementById(sp1)
    const space2 = document.getElementById(sp2)

    if (label.innerHTML > 0){
        minus.classList.remove("invisible")
        label.classList.remove("invisible")
        // minus.classList.add("visible")
        // label.classList.add("visible")
        space1.classList.add("invisible")
        space2.classList.add("invisible")
    }else{
        minus.classList.add("invisible")
        label.classList.add("invisible")
        space1.classList.remove("invisible")
        space2.classList.remove("invisible")
        // space1.classList.add("visible")
        // space2.classList.add("visible")
    }
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

        $(carritoTotal).animate({
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

        $(carritoTotal).animate({
        height: '0px',
        width: '0%',
        opacity: '0%'
        },"slow");
      
      }
  
    });

    $('.cart-input').on("focus",function(){
    
        if ($(this).is( ":focus" )) {
            
            $("#mainCarrito").addClass("fix-fixed")
            $(cart).removeClass("visible")
            $(counterCart).removeClass("visible")
            $(cart).addClass("invisible")
            $(counterCart).addClass("invisible")

            
        }

        $(this).focusout(function() {
            $("#mainCarrito").removeClass("fix-fixed")
            $("#cart").removeClass("invisible")
            $("#counterCart").removeClass("invisible")
        })

        $("#barrio").focusout(function() {
            $("#confirmar").addClass("visible")
            $("#confirmar").removeClass("invisible")
        })
    })

    // $(function() {
    $(".cart-input").on('keyup', function(e) {
        if (e.which === 13) {
        $(this).next('input').focus();
        }
    });
    // });

  });

function confirmar(){
    let ache = ["name", "adress1", "adress2", "barrio"]
    let counter = 0
    for (let i = 0; i < ache.length; i++){
        const input = document.getElementById(ache[i])
        
        if(input.value != ''){
            counter++
        }else{
            
        }
        
    }
    console.log(input.value)
    if (counter = 4){
        document.getElementById("confirmar").classList.remove("invisible");
        document.getElementById("confirmar").classList.add("visible");

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