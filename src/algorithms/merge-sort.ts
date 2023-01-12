export default function mergeSortAdapter(numberString: string) {
  const stringArray = numberString.split(",");
  const numberArray: number[] = [];
  for (let index = 0; index < stringArray.length; index++) {
    numberArray[index] = parseInt(stringArray[index], 10);
  }
  return mergeSort(numberArray);
}

function mergeSort(numbers: number[]): number[] {
  return mergeSortWithIndex(numbers, 0, numbers.length);
}

/**
 * O(n lg(n))
 * T(n) = 2T(n/2) + O(n) + c
 *      Where,
 *          O(n) is time complexity for merge
 *          T(n/2) is for each of divided array
 *          c is constant work like dividing array
 *
 */
function mergeSortWithIndex(
  numbers: number[],
  start: number,
  end: number
): number[] {
  if (start < end - 1) {
    const middlePoint = getMiddlePoint(start, end);

    const leftNumbers = mergeSortWithIndex(numbers, start, middlePoint);

    const rightNumbers = mergeSortWithIndex(numbers, middlePoint, end);

    return mergeArray(leftNumbers, rightNumbers);
  } else {
    return numbers.slice(start, start + 1);
  }
}

function getMiddlePoint(start: number, end: number) {
  return Math.floor((start + end) / 2);
}

function mergeArray(firstArray: number[], secondArray: number[]): number[] {
  const sortedNumers: number[] = [];
  let sortedIndex = 0;
  let firstArrayIndex = 0;
  let secondArrayIndex = 0;

  while (
    firstArrayIndex < firstArray.length ||
    secondArrayIndex < secondArray.length
  ) {
    if (firstArrayIndex === firstArray.length) {
      sortedNumers[sortedIndex] = secondArray[secondArrayIndex];
      secondArrayIndex++;
    } else if (secondArrayIndex === secondArray.length) {
      sortedNumers[sortedIndex] = firstArray[firstArrayIndex];
      firstArrayIndex++;
    } else if (firstArray[firstArrayIndex] <= secondArray[secondArrayIndex]) {
      sortedNumers[sortedIndex] = firstArray[firstArrayIndex];
      firstArrayIndex++;
    } else {
      sortedNumers[sortedIndex] = secondArray[secondArrayIndex];
      secondArrayIndex++;
    }
    sortedIndex++;
  }

  return sortedNumers;
}
