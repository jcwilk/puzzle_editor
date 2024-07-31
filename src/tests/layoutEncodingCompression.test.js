import { test, expect } from 'vitest';
import { collapseEncoding, expandEncoding } from '../layoutEncodingCompression.js';

test('empty collapses and expands back to empty', () => {
  const emptyLayout = "0".repeat(304);

  const collapsedLayout = collapseEncoding(emptyLayout);
  expect(collapsedLayout.length).toBeLessThan(emptyLayout.length);

  const expandedLayout = expandEncoding(collapsedLayout);
  expect(expandedLayout).toBe(emptyLayout);
});

test('a straight line collapses and expands back to a straight line', () => {
  const staightLine = ["00000000","00100000","00000000"].join("").repeat(12)+"0".repeat(8 * 2);

  const collapsedLayout = collapseEncoding(staightLine);
  expect(collapsedLayout.length).toBeLessThan(staightLine.length);

  const expandedLayout = expandEncoding(collapsedLayout);
  expect(expandedLayout).toBe(staightLine);
});
