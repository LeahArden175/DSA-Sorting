const LinkedList = require('./linkedlist')

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return mergeSort(left, right, array);
}
function merge (left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    for(let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }
    for(let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}


console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))
//[1, 2, 9, 16, 21, 26, 27, 28, 29, 39, 40, 43, 45, 46, 49]
console.log(mergeSort([89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]))


function mergeSort(sll) {
    let right = new LinkedList();
    let middleVal, middle;
    let size = sll.size();
    //sll.display();

    if (size <= 1) {
        //console.log('ending');
        return sll; 
    }
    
    middleVal = sll.MiddleOfList();
    middle = sll.find(middleVal);
    
    // console.log('middle', middle.value);
    // console.log('left', sll.head.value);

    right.head = middle.next;   //set middle.next to the beginning of the right side LL
    //console.log('right', right.head.value);
    middle.next = null;        //break LL in half
    
    right = mergeSort(right)
    left = mergeSort(sll)
    return merge(left, right)
}

function merge(left, right) {
    
    if (left && right) {
        left.findLast().next = right.head;
        return sort(left);
    }
    
}

function sort(sll) {
    let tempList = new LinkedList();
    let length = sll.size();
    let temp = 0;

    while (sll.head !== null) {

        temp = sll.pop();

        if (tempList.head === null) {
            if (sll.peek() < temp) {
                tempList.push(sll.pop());
                tempList.push(temp);
            } else {
                tempList.push(temp);
            }
        } else {
            while (temp < tempList.peek()) {
                sll.push(tempList.pop());
                if (tempList.head === null) break;
            }
            tempList.push(temp);
        }
    }

    while (tempList.head !== null) {
        sll.push(tempList.pop());
    }

    return sll;
}
    const LL = new LinkedList()

    LL.insertFirst('14')
    LL.insertLast('17')
    LL.insertLast('13')
    LL.insertLast('15')
    LL.insertLast('19')
    LL.insertLast('10')
    LL.insertLast('03')
    LL.insertLast('16')
    LL.insertLast('09')
    LL.insertLast('12')

console.log('b e f o r e')
LL.display()
console.log('``````')
mergeSort(LL)
console.log('a f t e r')
LL.display()