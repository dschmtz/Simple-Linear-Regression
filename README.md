# Simple-Linear-Regression
This module allows you to create a simple linear regression. Currently it supports only 2-dimensional data, splitted in an x (independent) and y (dependent) array. 
To estimate the parameters [OLS](https://en.wikipedia.org/wiki/Ordinary_least_squares) is used.

## Usage example
```ts
import { SimpleLinearRegression } from "https://deno.land/x/simple_linear_regression/mod.ts";

const X = [1, 2, 3, 4];
const Y = [3, 5, 7, 9];

let regression = new SimpleLinearRegression(X, Y);

regression.predict(10); // Returns 21
regression.score(X, Y); // Returns R² = 1
```

## Execute usage example
```
deno run https://deno.land/x/simple_linear_regression/usage-example.ts
```

## Execute testings
```
deno test https://deno.land/x/simple_linear_regression/src/simple-linear-regression.test.ts
```