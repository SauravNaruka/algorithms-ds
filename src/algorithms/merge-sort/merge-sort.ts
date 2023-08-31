export default function mergeSortAdapter(numberString: string) {
  const stringArray = numberString.split(",");
  const numberArray: number[] = [];
  for (let index = 0; index < stringArray.length; index++) {
    numberArray[index] = parseInt(stringArray[index], 10);
  }
  return mergeSort(numberArray);
}

export function mergeSort(numbers: number[]): number[] {
  return divideAndMergeSort(numbers, 0, numbers.length);
}

/**
 * O(n lg(n))
 * T(n) = 2T(n/2) + O(n) + c
 *      Where,
 *          O(n) is time complexity for merge
 *          T(n/2) is for each of divided array
 *          c is constant work like dividing array
 *
 * The Auxiliary space complexity is O(n)
 */
function divideAndMergeSort(
  numbers: number[],
  startIndex: number,
  endIndex: number
): number[] {
  if (startIndex < endIndex - 1) {
    const middleIndex = calculateMiddleIndex(startIndex, endIndex);

    const leftNumbers = divideAndMergeSort(numbers, startIndex, middleIndex);

    const rightNumbers = divideAndMergeSort(numbers, middleIndex, endIndex);

    return mergeArray(leftNumbers, rightNumbers);
  } else {
    return numbers.slice(startIndex, startIndex + 1);
  }
}

function calculateMiddleIndex(start: number, end: number) {
  return Math.floor((start + end) / 2);
}

function mergeArray(firstArray: number[], secondArray: number[]): number[] {
  let sortedNumers: number[] = [];
  let firstArrayIndex = 0;
  let secondArrayIndex = 0;

  while (
    firstArrayIndex < firstArray.length ||
    secondArrayIndex < secondArray.length
  ) {
    if (firstArrayIndex === firstArray.length) {
      sortedNumers = sortedNumers.concat(secondArray.slice(secondArrayIndex));
      return sortedNumers;
    } else if (secondArrayIndex === secondArray.length) {
      sortedNumers = sortedNumers.concat(firstArray.slice(firstArrayIndex));
      return sortedNumers;
    } else if (firstArray[firstArrayIndex] <= secondArray[secondArrayIndex]) {
      sortedNumers.push(firstArray[firstArrayIndex]);
      firstArrayIndex++;
    } else {
      sortedNumers.push(secondArray[secondArrayIndex]);
      secondArrayIndex++;
    }
  }

  return sortedNumers;
}
