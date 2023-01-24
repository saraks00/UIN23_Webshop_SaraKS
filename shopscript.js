let cart = []

function add(title, price) {
    cart.push({productTitle: title, productPrice: price, productQuantity: 1})

    console.log(cart)
    renderCart()
    //oppdatere label med antall produkter
    document.querySelector("#cart .label").innerHTML = cart.length
    if(document.querySelector("#cartview").classList.contains("hidden")){
        document.querySelector("#cartview").classList.remove("hidden")
    }
}

function total() {
    let totalPris = 0
    cart.map(total => totalPris+= total.productPrice)
    document.getElementById("total").innerHTML = totalPris
}

function renderCart() {
    //tom variabel for å bygge HTML til produkter
    let listHTML = ""
    //gp gjennom cart-arrayen, lag <li> for hvert produkt
    cart.map(prod => listHTML+= `<li>
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice}</span>
    <span class="quantity">${prod.productQuantity}</span>
    <button class="delete">X</button>
    </li>`)
    //bruke en selektor for å finne riktig <ul>, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML
    total()
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}