import { expect, test, describe } from "vitest";
import { mergeSort } from "./merge-sort";

describe("Merge-Sort", () => {
  test("Merge-Sort for sorting array", () => {
    expect(mergeSort([1, 4, 2, 7, 3, 4, 0])).toEqual([0, 1, 2, 3, 4, 4, 7]);
    expect(mergeSort([-3, -2, 7, 3, 1, 9, 0])).toEqual([-3, -2, 0, 1, 3, 7, 9]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([])).toEqual([]);
  });
});
