# DSA-Big-O


1. 
    a) O(1)
    b) O(n)

2. O(1) - the function takes a single value and performs a single task for the value.

3. O(n^2) - the function iterates through two arrays, using two for loops. Therefore, there are 2 tasks performing for each length of the two arrays. The amount of times the two tasks are performed is determined by the length of the arrays

4. O(n) - the function iterates over each item in the array and performs a task. Therefore, the time of the function is directly dependent on the length of the array.

5. O(n)

6. O(n^2) for loop inside of foor loop, each iterating over the length of the array once

7. O(n)

8. O(log(n))

9. O(1)

10. o(n) whole #'s greater than 2 not divisible by self

11. Algorithm:

function hanoi(rings) {
    return Math.pow(2, rings)-1;
}

recursive: 
function Hanoi(n, from, to , via)
{
  if (n==0) return;
  Hanoi(n-1, from, via , to);

  moveDisk(from,to);
  
  Hanoi(n-1, via, to , from);
}