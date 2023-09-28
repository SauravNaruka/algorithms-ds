import { expect, test, describe } from "vitest";
import { Heap } from "./heap-sort";

describe("heap", () => {
  test.skip("parent functions", () => {
    const heap = new Heap([0, 1, 2, 3, 4]);
    expect(heap.parent(1)).toBe(6);
  });
});
