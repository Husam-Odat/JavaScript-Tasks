// console.log('Here is : ', 'Reduce & Filter') \

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
// function avgAge() {
//     const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
//     return totalAge / persons.length;
// }

// console.log(avgAge());

// function avgAvg (arr) {
// for i in arr
//  x+=i
// return x/arr.length
// }



/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName() {
    const longest = persons.reduce((acc, person) => {
        const fullname = person.name.first + person.name.last;
        return fullname.length > acc.length ? fullname : acc;
    }, '');

    return longest;
}

console.log(longestName());



// function longestName() {
//     let fullname1 = persons[0].name.first + persons[0].name.last;
//     const fullname = persons.reduce((firstname, lastname) => 
//      persons.name.first + persons.name.last, 0);
//         if(fullname1<fullname )
//         fullname1=fullname
//         return fullname1

// }

// console.log(longestName());

/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
//array
arrmax= [1,2,4,9]
//sol #1
let max1 = arrmax.reduce((num1, num2) => (num1 > num2 ? num1 : num2));
//sol #2
let max = arrmax.reduce((num1 ,num2) => {
    if(num1 > num2)
    return num1;
    else
    return num2;
    });
 //result
console.log(max ,max1 );    

// let arrmax = [1, 2, 4, 9];

// let max = arrmax.reduce((num1, num2) => {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// });



// let remaining = expenses.reduce(
//     (accumulator, currentValue) => accumulator - currentValue,
//     salary
//   );
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
const stringg = "hello world";
// let repeatChar = stringg.reduce((char1 ) => {
//     if(char1 == "w"){
//         i++;
//     return char1;
//     }
       
//     },"w");
// console.log(repeatChar , i)

function repeatChar(str, char) {
    return str.split('').reduce((count, currentChar) => {
        if (currentChar === char) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);
}

// Test the function
console.log(repeatChar("hello world", 'w')); // Output: 1
console.log(repeatChar("hello world", 'l')); // Output: 3
console.log(repeatChar("hello world", 'o')); // Output: 2

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(start, end) {
    if (start > end) {
        [start, end] = [end, start]; // Swap if start > end
    }

    return Array.from({ length: end - start + 1 }).reduce((acc, _, index) => {
        acc.push(start + index);
        return acc;
    }, []);
}

// Test the function
console.log(usAndNumberBeetweenUs(2, 5)); // Output: [2, 3, 4, 5]
console.log(usAndNumberBeetweenUs(5, 2)); // Output: [2, 3, 4, 5] (automatically swaps start and end)
console.log(usAndNumberBeetweenUs(-3, 2)); // Output: [-3, -2, -1, 0, 1, 2]


// function  usAndNumberBeetweenUs (n1 , n2){
// // function repeatChar(str, char) {
//     return n1.reduce((count, currentChar) => {
//         if (n1 === n2) {
//             return n1 + 1;
//         } 
//     }, 0);
// }






//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/


/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/


/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/


/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/


/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/


// if you finish the exercises review the material of the week and help your classmate
