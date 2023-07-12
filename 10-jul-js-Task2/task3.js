// 1. Write a JS code to print numbers from 1 to 10
document.write("<br>");
document.write ("Task 3 1") ;
document.write("<br>");


let Arr1 = []
for (let i = 1 ; i <= 10 ; i++)
{
    Arr1.push(i)
}
document.write (Arr1) ;

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
document.write("<br>");
document.write ("Task 3 2") ;
document.write("<br>");

 let arr2 = [13,23,12,45,22,48,66,100]
 for( let j of arr2){
    if (j % 2 == 0)
    document.write(j + ", ");
 }
/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// document.write ("Task 3 3") ;
// document.write("<br>");

// let allNum = "" ; 
// for (let k=1 ; k<=8 ; k++){
    
//     allNum += k +"       ";
//     document.write(allNum +"<br>");
    
// }
// --------------------------------------------\
document.write("<br>");
document.write("<br>");
document.write("<br>");
let allnum = "" ; 
for (let v=1 ; v<=8 ; v++){
for (let v2=1 ; v2<=v ; v2++){
    
    // document.write(v2 +"<br>");
    allnum += v2 + " " ;
}
    // document.write(v +"<br>");
    allnum += " " +"<br>";
}
document.write(allnum);

 /* 
 for (let i = 1; i <= 8; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += j + " ";
  }

  console.log(pattern);
}
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

document.write("<br>");
document.write ("Task 3 1") ;
document.write("<br>");


let x34 = "don't know why" ;
if (x34.includes = "y")
    document.write("yes");

else 
    document.write("no");


