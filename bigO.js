//# DSA-Big-O


// 1. 
//     a) O(1)
//     b) O(n)

// 2. O(1) - the function takes a single value and performs a single task for the value.

// 3. O(n^2) - the function iterates through two arrays, using two for loops. Therefore, there are 2 tasks performing for each length of the two arrays. The amount of times the two tasks are performed is determined by the length of the arrays

// 4. O(n) - the function iterates over each item in the array and performs a task. Therefore, the time of the function is directly dependent on the length of the array.

// 5. O(n)

// 6. O(n^2) for loop inside of foor loop, each iterating over the length of the array once

// 7. O(n)

// 8. O(log(n))

// 9. O(1)

// 10. o(n) whole #'s greater than 2 not divisible by self

// 11. Algorithm:

function hanoi(rings) {
    return Math.pow(2, rings)-1;
}

// recursive: 
function Hanoi(n, from, to , via)
{
  if (n==0) return;
  Hanoi(n-1, from, via , to);
  moveDisk(from,to);
  Hanoi(n-1, via, to , from);
}

//1-7 iteratively
function countingSheep(n) {
  for(i = n; i >= 1; i-- ) {
    console.log(`${n}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}
function powerCalculator(base, exponent) {
    if(exponent === 0) {
      return 1
    }
    for(i = exponent; i > 0; i--) {
      base = base * i
      return base
    }
}
function reverseString(string) {
  if(string.length === 1) {
    return string
  }
  for(i = 0; i < string.length; i++) {
    return string.slice(1) + string.slice(0,1)
  }
}
function calculateNth(n) {
  if(n === 0) {
    return 0
  }
  for(i = n; i > 0; i--) {
    return i + (i-1)
  }
}

// function stringSplitter(string, separator, array, currIndex) {
//  if(!separator){
//      return string
//  }
//  if(string[currIndex] == separator ) {
//      array.push(string.slice(0, currIndex))
//      string = string.slice(currIndex + 1)
//      currIndex = -1
//  }
//  if(currIndex == string.length-1) {
//     array.push(string.slice(0, currIndex+1))

//      return array
//  }
//  return stringSplitter(string, separator, array, currIndex+1)

// }
// console.log(stringSplitter("02/20/2020", "/", [], 0));





//Recursive Big O

/*

1. o(n) if statement runs measuring n and keeps running based on n
2. o(n) same as 1? exponent keeps getting reduced and the if statement is based on that one number. 
3. o(n) same, one return, based on length of n
4. o(n)
5. o(n) 
6. o(n)
7. o(n)
