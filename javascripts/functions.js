// jshint esversion: 7

// Req. 3-b

let arrAvg = (arr) => {
  let sum = 0, average;
  for (var i = 0; i < arr.length; i++) {
sum = sum + arr[i];
  }
  average = sum/arr.length;
  return average;
};

//Req. 3-c

let arrMax = (arr) => {
let max = 0;
arr.forEach((item, i) => {
  if (item > max) {
    max = item;
      }
  });
return max;
};

//Req. 3-d

let sumEvens = (arr) => {
let n, num, sum = 0;
for (num of arr){
  if (num%2==0) {
  sum = sum + num;
}
}
return sum;
};
