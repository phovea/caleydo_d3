/// <reference types="jest" />
import {asMatrix as parseMatrix} from 'phovea_core/src/matrix';

describe('parseMatrix', () => {
  it('does not mutate original', () => {
    const orig = [[1,2], [3,4]];
    const dupe = [[1,2], [3,4]];
    expect(orig).toEqual(dupe);
    expect(orig).not.toBe(dupe); // Make sure we're dealing with distinct objects.
    parseMatrix(orig);
    expect(orig).toEqual(dupe);
    expect(orig).not.toBe(dupe);
  });
});
