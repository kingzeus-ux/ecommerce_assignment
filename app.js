let addCartBtn = document.querySelectorAll('.add-cart');

for (var i = 0; i < addCartBtn.length; i++) {
    addCartBtn[i].addEventListener('click',updateCarts);
    
    }



    // UpdateCart Function
function updateCarts(e){
    currentcarts = e.target;
    productContainer = currentcarts.parentElement;
    productTitle = productContainer.getElementsByClassName('productTitle')[0].innerText;
    productPrice = productContainer.getElementsByClassName('productPrice')[0].innerText;
    productImage = productContainer.getElementsByClassName('img')[0].src;

    AddToRow(productTitle,productPrice,productImage);

    // Total Price
    totalPrice = 0;
        cartPrice = cartContainer.getElementsByClassName('cartPrice');
        for (var i = 0; i < cartPrice.length; i++) {
            priceFormatedNumb = cartPrice[i].innerText.replace('£', '').replace(',', '');
           totalPrice = totalPrice + parseInt((priceFormatedNumb));
           
        }


        document.getElementsByClassName('cartTotalPrice')[0].innerText = totalPrice
    

}

cartContainer = document.getElementsByClassName('cartContainer')[0];


//Get All Product Information

function AddToRow(productTitle,productPrice,productImage){
    tr = document.createElement('tr');
    insideTrContent = `
    <th scope="row"><img class="product-img img-thumbnail " src="${productImage}" alt=""></th>
    <td>${productTitle}</td>
    <td class="cartPrice">${productPrice}</td>
    <td class="removeProduct btn btn-danger" type="button">Remove</td>`

    tr.innerHTML = insideTrContent;
    cartContainer.appendChild(tr);
    removeBtn = document.getElementsByClassName('removeProduct');
    for (var i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', removeFromCart)
    }


}

    //Remove Product from cart
function removeFromCart(e) {
    e.target.parentElement.remove();
    updatePriceAfterRemove();
}


        //Update cart Price after produect is Removed
function updatePriceAfterRemove() {
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('£', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');

}