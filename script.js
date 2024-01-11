var cart = []
function displayCart() {
    show.innerHTML = ""
    for (i = 0; i < cart.length; i++) {
        show.innerHTML += `<tr> <th class="text-center">${i+1}.</th class="text-center"> <td>${cart[i]}</td></tr>`
    }
    cartNum.innerHTML = cart.length
}
function displayMessage() {
    if (cart.length = 0) {
        show.innerHTML = `<td colspan="2" class="text-center fw-bold fs-4">Add something to your cart</td>`
    }
}
function addItems() {
    var co
    if (inp.value === "") {
        error.style.display = "block"
        // alert("Fill in something now")
    }else {
        cart.push(inp.value)
        inp.value = ''
        error.style.display = "none"
        // console.log(cart);
        // cartNum.innerHTML = cart.length
       displayCart()
    }
    inp.focus()
}
function frontAdd() {
    if (inp.value === "") {
        error.style.display = "block"
    }else {
        cart.unshift(inp.value)
        inp.value = ''
        error.style.display = "none"
        // console.log(cart);

        displayCart()
    }
    inp.focus()
}

function backSpace() {   
        cart.pop(show.innerHTML)
        displayCart()
}
function frontSpace() {   
    cart.shift(show.innerHTML)
    // show.innerHTML = cart
   displayCart()
}
function deleteAll() {
    show.innerHTML = `<td colspan="2" class="text-center text-success fw-bold fs-4">Cart cleared successfully</td>`
    cart.length = 0
    cartNum.innerHTML = cart.length
}
function edit() {
    var itemNumber = prompt('Enter item number')
    if (itemNumber > cart.length) {
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






