## Main Idea of JS

1. Save the data
2. Generate the HTML
3. Make it interactive

## Make a html and css grid first then generate using js

1. make a data structure

## Add event listener to button and data attribute

<!-- kebab case -->

data-product-name='${product.id}

<!-- get the data att -->

button.dataset.productId;

button.addEventListener("click", () => {
// dataset = get data attribute in html
const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      //  add to cart
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }
