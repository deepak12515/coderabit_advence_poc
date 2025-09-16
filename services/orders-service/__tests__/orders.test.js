"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../src/orders");
test('NEW code subtracts 20', () => {
    expect((0, orders_1.calculateFinalAmount)({ id: '1', amount: 100, discountCode: 'NEW' })).toBe(80);
});
test('VIP code should subtract small percent (expected approx 85)', () => {
    expect((0, orders_1.calculateFinalAmount)({ id: '2', amount: 100, discountCode: 'VIP' })).toBe(85);
});
//# sourceMappingURL=orders.test.js.map