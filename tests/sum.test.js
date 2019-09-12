import { sum } from '../utils/sum';

it('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

it.only('only sum', () => {
  expect(sum(1, 12)).toBe(13);
});
