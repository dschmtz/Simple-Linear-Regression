import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { SimpleLinearRegression } from "./simple-linear-regression.ts";

const X = [0, 1, 2, 3, 4];
const Y = [3, 7.5, 12, 16.5, 21];

const SLR = new SimpleLinearRegression(X, Y);

Deno.test("#1 Check prediction", async () => {
    assertEquals(SLR.predict(5), 25.5);
});

Deno.test("#2 Check score", async () => {
    assertEquals(SLR.score(X, Y), 1);
});

Deno.test("#3 Check slope", async () => {
    assertEquals(SLR.slope, 4.5);
});

Deno.test("#4 Check intercept", async () => {
    assertEquals(SLR.intercept, 3);
});