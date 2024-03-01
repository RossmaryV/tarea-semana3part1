const products = [
    {
      id: 1,
      name: "オリジナルブレンド200g",
      price: 500,
    },
    {
      id: 2,
      name: "オリジナルブレンド500g",
      price: 900,
    },
    {
      id: 3,
      name: "スペシャルブレンド200g",
      price: 700,
    },
    {
      id: 4,
      name: "オリジナルブレンド200g",
      price: 1200,
    }
];

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
    const targetId = parseInt(priceElement.value);
    const product = products.find(item => item.id === targetId);
    const number = numberElement.value;

    let purchase = {
        product: product,
        number: parseInt(number),
    };

    const totalPrice = product.price * purchase.number;
    window.alert(`Producto agregado:\n\nNombre: ${product.name}\nPrecio: ${product.price}円\nCantidad: ${number}`);
    
    purchases.push(purchase);
    priceElement.value = "";
    numberElement.value = "";
}

function subtotal() {
    return purchases.reduce((prev, purchase) => {
        return prev + purchase.product.price * purchase.number;
    }, 0);
}

function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
        return 0;
    } else if (sum < 2000) {
        return 500;
    } else {
        return 250;
    }
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    let details = purchases.map(purchase => {
        const totalPrice = purchase.product.price * purchase.number;
        return `Producto: ${purchase.product.name}, Precio: ${purchase.product.price}円, Cantidad: ${purchase.number}, Total: ${totalPrice}円`;
    }).join("\n");

    const totalAmount = sum + postage;
    window.alert(`Detalles del pedido:\n\n${details}\n\nSubtotal: ${sum}円\nTarifa de envío: ${postage}円\nTotal: ${totalAmount}円`);

    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
}


