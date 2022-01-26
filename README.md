# Simple-Linear-Regression
This module allows you to create a simple linear regression. Currently it supports only 2-dimensional data, splitted in an x and y array. 
To estimate the parameters [OLS](https://en.wikipedia.org/wiki/Ordinary_least_squares) is used.

## Usage Example
```
import { SimpleLinearRegression } from "./src/simple-linear-regression.ts";

const X = [1, 2, 3, 4];
const Y = [3, 5, 7, 9];

let slr = new SimpleLinearRegression(X, Y);
```
