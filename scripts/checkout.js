import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// you can only use await when inside async function
// return a promise
// shortcut for new Promise
async function loadPage() {
  // await = let us write async code like normal code
  // await = js will wait to complete the code of await before going to next line
  try {
    await loadProductsFetch();

    await new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
    renderOrderSummary();
    renderPaymentSummary();
  } catch (error) {
    console.error("Error: ", error);
  }
}
// save the value 2 in value
loadPage();
// Promise.all([
//   // fetch return promise directly
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   }),
// ]).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
// new Promise((resolve) => {
//   loadProducts(() => {
//     // make it go to the next step (then)
//     // resolve() = let us control the next step
//     resolve("val1");
//   });
// })
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })

//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// use promise instead of callbacks to prevent many nesting and make it hard to manage
