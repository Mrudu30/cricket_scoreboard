// descending order
const mergeSort = (arr, key) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(
      mergeSort(left, key),
      mergeSort(right, key),
      key
    );
  };
  
  const merge = (left, right, key) => {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0][key] >= right[0][key]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    return result.concat(left, right);
  };
  
  // Example usage
//   const data = [
//     { name: 'b1', wickets: 21 },
//     { name: 'a2', wickets: 15 },
//     { name: 'c3', wickets: 30 },
//   ];
  
//   const sortedData = mergeSort(data, 'wickets');
//   console.log(sortedData);
  
export default mergeSort