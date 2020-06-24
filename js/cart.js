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