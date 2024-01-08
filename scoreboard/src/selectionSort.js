 // Selection Sort
 const selectionSort = (arr, key) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (arr[j][key] < arr[minIndex][key]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    // console.log(arr)
    return arr;
};

// Driver Code
// x = [90,23,12,67]
// selectionSort(x)

export default selectionSort