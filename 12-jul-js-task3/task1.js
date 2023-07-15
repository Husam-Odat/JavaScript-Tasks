/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune (jobtitle , geographiclocation  ,partnersname , numberofchildren){
console.log (`I will be a ${jobtitle} in ${geographiclocation}, and married to ${partnersname} with ${numberofchildren} kids.`);

}
tellFortune('software engineer', 'Jordan', 'Alice', 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge (dogsage) {
    let dogAgeConHum = dogsage * 7 ;
    console.log(`Your doggie is ${dogAgeConHum} dog years old in dog years!`);
}
calculateDogAge(1);


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply (age , amountPerDay )  {
    let amount = ((100-age)*365 ) * amountPerDay
console.log(`You will need ${amount} cups of tea to last you until the ripe old age of 100`)
}
calculateSupply (99 , 2 );
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet (name) {
    console.log(`hello ${name}`);

}
greet ("Husam");

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
------
function double(x) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}
-----
function double(y) {
  return 2 * y;
}

function double('7') {
  return 2 * 'x';
}
-----
function double(z) {
  return 2 * z;
}
*/






/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
-----------------------------
function double1(x) {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}
--------------------------
function double2 (x) {
return 2 * x;
}

function (x) double3 {
  return 2 * x;
  -----------------------------
function double3 (x) {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube (cubeNum){
    console.log (cubeNum **3)
}
cube (4);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply (mulNu1 , mulNu2) {
console.log(mulNu1 * mulNu2);

}
multiply (3 , 4 , 6);
multiply (5 , 4);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense (ageLic){
    let remin = 20 - ageLic
    if (ageLic >=20 )
    console.log("yes you can")
    else
    console.log(`please come back after ${remin} years to get one`)
}
canIGetADrivingLicense (17);
canIGetADrivingLicense(20) ;

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function  sameLength (str1 , str2){
    if (str1.length == str2.length )
        console.log("True");
    else 
        console.log("False");
}

sameLength("tree","clue");
sameLength("tree","car");

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function  largerNubmer ( numb1 , numb2) {
    if (numb1 > numb2)
    console.log(numb1);
    else
    console.log(numb2);

}
largerNubmer(5,6);
largerNubmer(5,3);

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer (number1 , number2 , number3 ) {
    if (number1 < number2 && number1 < number3)
    console.log(number1);
    else if (number2 < number1 && number2 < number3)
    console.log(number2);
    else 
    console.log(number3);
}
smallerNubmer(8,6,7)


smallerNubmer(5,99,34)


smallerNubmer(5,99,3)


smallerNubmer(5,3,3)

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString ( ...stri  ){
    let x = stri[0]
    for(let i=0 ; i <stri.length ; i++){
        if (x.length > stri[i].length)
            x = stri[i]
      
    }
    console.log(x);
    
}
shorterString("air","school","car","by","github")


shorterString("air","tr","car","by","github")


shorterString("by","tr","car","air","github")


shorterString("air","by","car","school","github")


shorterString("air","tr","by","car","github")


shorterString("air","tr","car","github","by")


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString ( ...stri  ){
    let x = stri[0]
    for(let i=0 ; i <stri.length ; i++){
        if (x.length < stri[i].length)
            x = stri[i]
      
    }
    console.log(x);
    
}

longerString("air","school","car","github")
// => school

Ex: longerString("air","schoo","car","github")
// => github

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function  isEven (even) {
    if (even % 2 === 0 )
    console.log("even number");
    else
    console.log("odd number");

}

isEven(1);

isEven(2);

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function  isOdd (odd) {
    if (odd % 2 === 1 )
    console.log("odd number");
    else
    console.log("even number");

}

isOdd(4);

isOdd(5);

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function  positive (pos) {
    
    console.log(Math.abs(pos));
    

}

positive(4);

positive(-5);


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function  fullName (fName , lName){
    console.log(`${fName} ${lName}`)
}
fullName("Adam","McCallen");
fullName("Alex", "Mercer");
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function  average (...avgArr){
    let total = 0;
    let avg = 0;
    for ( let i =0 ; i<avgArr.length ; i++)
    {total += avgArr[i]; 
    avg = total/avgArr.length;}
    console.log(avg);
}
average(1,2,3,4,5);


average(5,7,9,3,5);
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
//Getting a random number between 0 (inclusive) and 1 (exclusive)
function randomNumber () {
    return Math.random();
}console.log (randomNumber ()) ;
// }
// randomNumber ()
// console.log (randomNumber());
// console.log(Math.random()); ----not working
// randomNumber();

// function getRandom() {
//     return Math.random();
//   }
//   console.log(getRandom())
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
//Getting a random number between two values
function randomBetweenNumbers (min , max) {
    return Math.floor(Math.random() * ((max-min) + min))  ;
}
console.log (randomBetweenNumbers(1,8)) ;
console.log (randomBetweenNumbers(3,100)) ;



//Getting a random integer between two values, inclusive
function randomBetweenNumbers1 (min , max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * ((max-min+1) + min))  ;
}

console.log (randomBetweenNumbers1(1,8)) ;
console.log (randomBetweenNumbers1(3,100)) ;


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(score) {
    let result;
    switch(true) {
        case score <= 49:
            result = "F";
            break;

        case score <= 69:
            result = "D";
            break;

        case score <= 84:
            result = "C";
            break;
        
        case score <= 94:
            result = "B";
            break;

        case score <= 100:
            result = "A";
            break;
    }
    console.log(result);
    return result;
}
scoreInUniversty(96)


scoreInUniversty(3)


scoreInUniversty(71)


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
// will count how many function is invocte
let user = "";

function counter() {
  console.count();
  return `hi ${user}`;
}

user = "bob";
counter();
user = "alice";
counter();
counter();
console.count("alice");

// will count by user invoked

let user1 = "";

function counter1() {
  console.count(user1);
  return `hi ${user1}`;
}

user1 = "bob";
counter1();
user1 = "alice";
counter1();
counter1();
console.count("alice");




counter = 0;
user1 = "bob";
counter1();
user1 = "alice";
counter1();
counter1();
console.count("alice");
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
let user3 = "";

function counter3() {
  console.count("");
  
  return `hi ${user}`;
}

console.log("the counter reset now")
console.countReset("alice");
user3 = "bob";
counter3();
user3 = "alice";
counter3();
counter3();
console.count("alice");




