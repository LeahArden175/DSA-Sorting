function swap(array, i , j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] =  temp;
};

function bubbleSort(array) {
    let swaps = 0;
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i] + 1) {
            swap(array, i , i + 1);
            swaps++
        }
    }
    if(swaps > 0) {
        return bubbleSort(array);
    };
    return array;
}


function shuffleArray(array) {
    let lastIndex = array.length - 1;
    for(let i = 0; i < array.length; i++) {
      const tmp = array[i];
      let j = Math.floor(Math.random() * lastIndex) + 1;
      array[i] = array[j];
      array[j] = tmp;
    }
    return array;
  }
   console.log(shuffleArray([1,2,3,4,5,6]));


   function bookSort(array) {
    let swaps = 0;
    for(let i = 0; i < array.length - 1; i++) {
      if(array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swaps++
      }
    }
    if(swaps > 0) {
      return bookSort(array)
    }
    return array
  }
  
  console.log(bookSort(['Book 1', 'Book 2', 'Alice in Sadland', 'Suicide is Painless', 'whatever', 'Sadbook']))

