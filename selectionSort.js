
const swap = (items, firstIndex, secondIndex) => {
  var temp = items [firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}


const selectionSort = (items) => {
  
  const len = items.length;
  const min;

  for (let i = 0; i< len; i++) {
    min = i;

    for (let j = i + 1; j < len; j++) {
      if (items[j] < items [min]) {

        min = j; 
      }
    }
    if (i !== min) {
      swap (items, i, min)
    }
  }
  return items;
}