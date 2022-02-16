//skriver ut alla värden från enArray
function purchaseItems() {
    //tömmer arrayen och visar totala priset 
    enArray = [];
    showCart();
    cartTotalPrice();
    alert("Thank you for your purchase!");
}
//en funktion som visar totala priset
function cartTotalPrice() {
    let totalPrice = 0;
    for (i = 0; i < enArray.length; i++) {
        totalPrice += enArray[i].price;
    }

    document.getElementById("cart-total-price").innerHTML = totalPrice;
}
//tar bort en produkt
function removeCartItem(u) {
    enArray.splice(u, 1);
}
//skriver ut alla värden från enArray
function showCart() {
    text = "";
    for (i = 0; i < enArray.length; i++) {
        text +=
            "<div class='text'>" +
            // "<img class='medium-img' src=" +
            //enArray[i].image +
            //">" +
            //"</img>" +

            "<br>" +
            "</div>" +
            "</div>" +
            "<div class='removeButton' >" +
            "<button class='remove-cart-item' onclick='removeCartItem(" +
            i +
            ");showCart();cartTotalPrice()'>Remove item</button>" +
            "</div>" +
            "</div>";
    }
    document.getElementById("shopping-cart").innerHTML = text;
}