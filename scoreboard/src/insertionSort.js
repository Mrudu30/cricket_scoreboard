const insertionSort = (arr, key) => {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let j = i - 1;
      let temp = arr[i];
  
      while (j >= 0 && arr[j][key] > temp[key]) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = temp;
    }
  
    return arr;
  };
  
  // Example usage
//   const data = [
//     { name: 'b1', wickets: 21 },
//     { name: 'a2', wickets: 15 },
//     { name: 'c3', wickets: 30 },
//   ];
  
//   const sortedData = insertionSort(data, 'wickets');
//   console.log(sortedData);
  
export default insertionSort