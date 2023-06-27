let cartItemTextInput = document.getElementById('cartItemTextInput');
let cartItemsContainer = document.getElementById('cartItemsContainer');

function onAddCartItem(){
    let cartItemText = cartItemTextInput.value;

    let cartItemEl = document.createElement('li');
    cartItemEl.textContent = cartItemText;
    cartItemTextInput.value = '';
    cartItemsContainer.appendChild(cartItemEl);
}