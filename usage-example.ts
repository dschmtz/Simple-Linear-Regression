import { SimpleLinearRegression } from "./src/simple-linear-regression.ts";

const X = [1, 2, 3, 4];
const Y = [3, 5, 7, 9];

let slr = new SimpleLinearRegression(X, Y);

console.log(`y = ${slr.intercept} + ${slr.slope}x`);
console.log("Prediction for x=10:", slr.predict(10));

console.log("R² value:", slr.score(X, Y))