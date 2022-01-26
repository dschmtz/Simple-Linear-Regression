import { SimpleLinearRegression } from "./src/simple-linear-regression.ts";

const X = [1, 2, 3, 4];
const Y = [3, 5, 7, 9];

let slr = new SimpleLinearRegression(X, Y);

console.log(slr.predict(10));

console.log(slr.intercept);
console.log(slr.slope);