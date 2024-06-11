const sample1 = [3, 2, 1, 13, 8, 5, 0, 1];
const sample2 = [105, 79, 100, 110];

// merges two sorted arrays into one sorted array
function merge(arr1, arr2) {
  const arr1Len = arr1.length;
  const arr2Len = arr2.length;
  let merged = [];
  let i = 0;
  let j = 0;

  while (true) {
    if (i >= arr1Len) {
      merged = merged.concat(arr2.slice(j));
      break;
    }
    if (j >= arr2Len) {
      merged = merged.concat(arr1.slice(i));
      break;
    }

    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  return merged;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log(`Input: ${sample1}`);
console.log(`Output: ${mergeSort(sample1)}`);
console.log("--------------------------------");
console.log(`Input: ${sample2}`);
console.log(`Output: ${mergeSort(sample2)}`);
