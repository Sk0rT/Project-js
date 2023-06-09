
let cart = {
    'sgji89': {
        name: '',
        count: 2,
    },
    'jhdg96': {
        name: '',
        count: 2,
    }
};

document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}

const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}

const minusFunction = id => {
    if (cart[id]['count'] - 1 == 0) {
        deleteFunction(id)
        return true;
    }
    cart[id]['count']--;
    renderCart();
}

const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart)
}

renderCart();