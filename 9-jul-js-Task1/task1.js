/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
console.log("Task 0");

let x = 250;
let zakat;
zakat=250*0.025;
console.log("zakat = ",zakat);

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
console.log("Task 1");

const Arr1=[1,7,9,45];
const Arr2=["Str" , "alex" , "moh"];
const Arr3=["the" , "fox" , "over", "lazy" , "dog"];
console.log(Arr1);
console.log(Arr2);
console.log(Arr3);



/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
console.log("Task 2");
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
console.log("Task 3");

const favs = [ "mansaf" , "seeFood" , "runningOutside" , "Gym" , "300" , "gameOfThrones" ];
console.log(favs);
// const favSpoortArr = [ "runningOutside" , "Gym" ];
// const favMovieArr = [ "300" , "gameOfThrones" ];


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
console.log("Task 4");
const firstArr = [ 1 , 2 , 5];
let firstOfArray1 = firstArr.shift();
console.log(firstOfArray1);

const secondArr = [ "t" , "u" , "g" , "x" ];
let firstOfArray2 = secondArr.shift();
console.log(firstOfArray2);




/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log("Task 5");
const FirstArr = [ 1 , 4 , 5];
let lastOfArray1 = FirstArr.pop();
console.log(lastOfArray1);

const SecondArr = [ "t" , "u" , "g" , "x" ];
let lastOfArray2 = SecondArr.pop();
console.log(lastOfArray2);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
console.log("Task 6");
var array = [0,5,7,9];
console.log(array);
array.shift();
console.log(array);
array.shift();
console.log(array);
array.shift();
console.log(array);
array.unshift(8);
console.log(array);
array.unshift(6);
console.log(array);
array.unshift(4);
console.log(array);
array.unshift(3);
console.log(array);
array.unshift(1);
console.log(array);
array.push(10);
console.log(array);



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
console.log("Task 7");
var array2 = [];
// array2.unshift(3.5);
array2.unshift(-7);
array2.unshift(9);
array2.unshift(5);
array2.push(3.5);
console.log(array2);
/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
console.log("Task 8");
var arr2 = [ -3 , 8 , 7 , 6 , 5 , -4 , 3 , 2 , 1 ];
arr2.sort();
console.log(arr2);



