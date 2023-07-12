/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
  let num1T1 = 10 ;
  let num2T1 = 20 ;
  let massegeT1 = "Task 1 answer is : " ;

  if ( num1T1 > num1T1){
    alert (massegeT1 + num1T1);
  }
  else {
    alert (massegeT1 + num2T1);
  }
 

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
let num1T2 = 3 ;
let num2T2 = -7 ;
let num3T2 = 2 ;
let multi = num1T2 * num2T2 * num3T2 ;

if (multi < 0 ){
 alert (" Task 2 : The sign is -");
}

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let num1T3 = 0 ;
let num2T3 = -1 ;
let num3T3 = 4 ;
let massegeT3 = "Task 3 answer is : " ;

if ( num1T3 > num2T3 && num1T3 > num3T3 ){
    
    if(num2T3 > num3T3 ){
        alert(massegeT3 + num1T3 + " , " + num2T3 + " , " + num3T3 );
    }
    else {
        alert(massegeT3 + num1T3 + " , " + num3T3 + " , " + num2T3 );
    }
}
else if (num2T3 > num1T3 && num2T3 > num3T3){
    if(num1T3>num3T3){
        alert(massegeT3 + num2T3 + " , " + num1T3 + " , " + num3T3 );
    }
    else{
        alert(massegeT3 + num2T3 + " , " + num3T3 +" , "+ num1T3 );
    }

}
else {
    if(num2T3>num1T3){
        alert(massegeT3 + num3T3 + " , " + num2T3 + " , " + num1T3 );
    }
    else{
        alert(massegeT3 + num3T3 + " , " + num1T3 + " , " + num2T3 );
    }
}



 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  
let num1T4 = -5 ;
let num2T4 = -2 ;
let num3T4 = -6 ;
let num4T4 = 0 ;
let num5T4 = -1 ;
let massegeT4 = "The largest of Task 4 is :" 

if ( num1T4 > num2T4 && num1T4 > num3T4 && num1T4 > num4T4 && num1T4 > num5T4){
    alert(massegeT4 + num1T4);
}
else if (num2T4 > num1T4 && num2T4 > num3T4 && num2T4 > num4T4 && num2T4 > num5T4){
    alert( massegeT4 + num2T4);

}
else if (num3T4 > num1T4 && num3T4 > num2T4 && num3T4 > num4T4 && num3T4 > num5T4){
    alert( massegeT4 + num3T4);

}
else if (num4T4 > num1T4 && num4T4 > num2T4 && num2T4 > num3T4 && num4T4 > num5T4){
    alert( massegeT4 + num4T4);

}
else {
    alert( massegeT4 + num5T4);
}

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  let x = 10;
  let y = 15;
  let massageT5 = "Task 5 result is : "
  if ( x > y ){
    document.write (massageT5 + "Hello World");
  }
  else {
    alert(massageT5 + "Goodbye");
  }

 /******* End Your Code ********* */



