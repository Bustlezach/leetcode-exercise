/**
 * You are given an integer array heaight of length n.
 * There are n vertical lines drawn such that two end points of the ith 
 * line are (i, 0) and (i, height[i]).
 * Find two lines that tigether with the x-axis form a container, 
 * such that the container  contains the most water (depth is constant
 * across the containers). Return the area (that the 2 lines and the X axis make)
 * of container which can store the max amount of water.
 * Notice that youmay not slant the container.
 */


const h = [9, 3, 2, 1, 10];
const a = [4, 9, 15, 3, 9, 1];
const b = [1, 2, 3, 5, 2, 6];
const c = [1, 1, 1, 1, 1];
const d = [3, 7, 5, 6, 8, 4];

function waterContainer (arr) {
  let maxArea = 0;
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    for (let j = i; j < arrLen; j++) {
      let curHeight = Math.min(arr[i], arr[j]); 
      let curArea = curHeight * (j - i);
      if (curArea > maxArea) maxArea = curArea;
    }
  }
  return maxArea;
}

console.log(waterContainer(h));
console.log(waterContainer(a));
console.log(waterContainer(b));
console.log(waterContainer(c));
console.log(waterContainer(d));

console.log('');
console.log('******** Version 2 *******');
console.log('');


/** Version 2 */

// const d = [3, 7, 5, 6, 8, 4];

function containerArea(arr) {
  let maxArea = 0;
  const arrLength = arr.length;
  let left = 0;
  let right = arrLength - 1;

  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    let area = (height * width);
    maxArea = Math.max(area, maxArea);
    if (arr[left] <= arr[right]) {
      left ++;
    } else {
      right--;
    }
  }
  return maxArea;
}


console.log(containerArea(h));
console.log(containerArea(a));
console.log(containerArea(b));
console.log(containerArea(c));
console.log(containerArea(d));
