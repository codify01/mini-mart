var cart = []
function displayCart() {
    show.innerHTML = ""
    for (i = 0; i < cart.length; i++) {
        show.innerHTML += `<tr> <th class="text-center">${i+1}.</th class="text-center"> <td>${cart[i]}</td></tr>`
    }
}
function addItems() {
    if (inp.value === "") {
        error.style.display = "block"
        // alert("Fill in something now")
    }else {
        cart.push(inp.value)
        inp.value = ''
        error.style.display = "none"
        console.log(cart);
       displayCart()
    }
    inp.focus()
}
function frontAdd() {
    if (inp.value === "") {
        alert("Fill in something now")
    }else {
        cart.unshift(inp.value)
        inp.value = ''
        
        console.log(cart);
        displayCart
    }
    inp.focus()
}

function backSpace() {   
    cart.pop(show.innerHTML)
    // show.innerHTML = cart
    displayCart()
}
function frontSpace() {   
    cart.shift(show.innerHTML)
    // show.innerHTML = cart
   displayCart
}
function deleteAll() {
    show.innerHTML = ''
    cart.length = 0
}
function edit() {
    var itemNumber = prompt('Enter item number')
    if (itemNumber > cart.length && isNaN(itemNumber)) {
        alert('Invalid number')
    }else {
        var newItem = prompt('Enter new item name')
        cart.splice(itemNumber-1, 1, newItem)
        displayCart()
    }
}
function deleteAny() {
    var itemNumber = Number(prompt('Enter item number'))
    if (itemNumber > cart.length) {
        alert('Invalid number')
    }else {
        cart.splice(itemNumber-1, 1)
        displayCart()
    }
}






