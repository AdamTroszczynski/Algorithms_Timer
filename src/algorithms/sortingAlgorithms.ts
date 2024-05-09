const enum algorithmNames {
  selectedSort = 'Selection Sort',
  bubbleSort = 'Bubble Sort',
  insertionSort = 'Insertion Sort',
}

const selectionSort = (arr: Array<number>): Array<number> => {
  const n = arr.length;
  let iteration = 0;

  for (let i = 0; i < n - 1; i++) {
    iteration = i;
    if (i % 500 === 0) postMessage(iteration);
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  postMessage(iteration);
  return arr;
};

const bubbleSort = () => {};

const insertionSort = () => {};

this.addEventListener('message', function (e) {
  const array = e.data.array;
  const method = e.data.method;
  let sorterArray;
  switch (method) {
    case algorithmNames.selectedSort:
      sorterArray = selectionSort(array);
      break;
    case algorithmNames.bubbleSort:
      break;
    case algorithmNames.insertionSort:
      break;
  }
  this.postMessage(sorterArray);
});
