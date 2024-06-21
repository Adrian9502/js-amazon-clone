import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js";

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      // make it go to the next step (then)
      // resolve() = let us control the next step
      resolve("val1");
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
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
