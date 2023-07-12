/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
document.write("<br>");
document.write ("Task 2 1") ;
document.write("<br>");

let inputNumber = 77 ; 
let massegeT21 = "The Rate of student is :";
let answer = "";



    if ( inputNumber < 50 )
        document.write(massegeT21 + "Fail " + inputNumber);
       

    else if  ( inputNumber >= 50 && inputNumber < 60 )
        document.write(massegeT21 + "E " + inputNumber);
        

    else if  (  inputNumber >= 60 && inputNumber <  70 ) 
        document.write(massegeT21 + "D " + inputNumber);
        

    else if  ( inputNumber >= 70 && inputNumber <  80 ) 
        document.write(massegeT21 + "C " + inputNumber);
        

    else if  ( inputNumber >= 80 && inputNumber <  90 ) 
        document.write( massegeT21 + "B " + inputNumber);
           

    else if  ( inputNumber >= 90 && inputNumber <  100 ) 
        document.write(massegeT21 + "A " + inputNumber);
           

        document.write("<br>");
        document.write("<br>");


switch (true){
    case ( inputNumber < 50 ) :
        document.write(massegeT21 +" Fail" + inputNumber);
        break;

    case ( inputNumber >= 50 && inputNumber < 60 ) :
        document.write(massegeT21 +" E" + inputNumber);
        break;

    case (  inputNumber >= 60 && inputNumber <  70 ) :
        document.write(massegeT21 +" D" + inputNumber);
        break;

    case ( inputNumber >= 70 && inputNumber <  80 ) :
        document.write(massegeT21 +" C" + inputNumber);
        break;

    case ( inputNumber >= 80 && inputNumber <  90 ) :
        document.write(massegeT21 +" B" + inputNumber);
        break;    

    case ( inputNumber >= 90 && inputNumber <  100 ) :
        document.write(massegeT21 +" A" + inputNumber);
        break;    
}
