import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add() returns '3' if called with arguments '1' and '2'.", () => {
const result = add(1, 2);
expect(result).toBe(3);
});

test("substract() returns '3' if called with arguments '8' and '5'.", () => {
    const result = subtract(8, 5);
    expect(result).toBe(3);
    });

test("multiply() returns '3' if called with arguments '1' and '3'.", () => {
    const result = multiply(1, 3);
    expect(result).toBe(3);
 });

test("divide() returns '3' if called with arguments '12' and '4'.", () => {
    const result = divide(12, 4);
    expect(result).toBe(3);
});

test("divide() returns 'You should not do this!' if called with second argument '0'.", () => {
    const result = divide(12, 0);
    expect(result).toBe("You should not do this!");
});