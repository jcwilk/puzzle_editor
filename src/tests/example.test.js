import { test, expect } from 'vitest';
import { buildCounter } from '../counter.js';

test('basic addition', () => {
  let counter = buildCounter();
  expect(counter.count).toBe(0);

  counter.increment();
  expect(counter.count).toBe(1);
});
