// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart(name, price) {

    let item = cart.find(i => i.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

// Show bill (Only works in cart.html)
function showBill() {

    let billBody = document.getElementById("billBody");

    if (!billBody) return;

    billBody.innerHTML = "";

    let grandTotal = 0;

    cart.forEach((item, index) => {

        let total = item.price * item.qty;
        grandTotal += total;

        billBody.innerHTML += 
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price}</td>
                <td>${total}</td>
            </tr>
        ;
    });

    document.getElementById("grandTotal").innerHTML =
        "Grand Total : " + grandTotal + " Ks";
}

// Clear cart
function clearCart() {

    if (confirm("Are you sure you want to clear the cart?")) {
        localStorage.removeItem("cart");
        location.reload();
    }
}

// Automatically show bill when cart.html opens
showBill();
