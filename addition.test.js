const { calculerAddition, appliquerReduction } = require('./addition');

test('calculerAddition: 15 + 5 = 20', () => {
  expect(calculerAddition(15, 5)).toBe(20);
});

test('appliquerReduction: 10% de 100 = 90', () => {
  expect(appliquerReduction(100, 10)).toBe(90);
});
