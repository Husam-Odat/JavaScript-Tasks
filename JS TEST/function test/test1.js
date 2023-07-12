
// function functionName(parameters) {
//     // code to be executed
//   }

function multiplayTwoNum(a, b) {
    return a * b;
  }

  console.log(multiplayTwoNum (10,20));

  // console.log(multiplayTwoNum2 (10,20));

  // const x = multiplayTwoNum2 (c , d) { return c * d ;};

  // console.log(x);


  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);
  console.log(value);

  let text = "The temperature is " + toCelsius(77) + " Celsius.";
  console.log(text);


  //---------------------
  // let text1 = "Outside: " + typeof carName;
  // console.log(text1);


function myFunction() {
  let carName = "Volvo";
  let text1 = "Inside: " + typeof carName + " " + carName; 
  console.log(text1);
}
  //---------------------
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue" ,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
    };
    console.log(person);

  // person.lastName;

  // person["lastName"];

  console.log(person.fullName);
    //---------------------
    const x2 = (x, y) => x * y;
    document.getElementById("demo").innerHTML = x2(5, 5);
    //---------------------
    function sum(...args) {
      let sum = 0;
      for (let arg of args) sum += arg;
      return sum; 
    }
    
    let xs = sum(4, 9, 16, 25, 29, 100, 66, 77);
    console.log(xs);
    //---------------------
    function findMax() {
      let max = -Infinity;
      for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
          max = arguments[i];
        }
      }
      return max;
    } 
    document.getElementById("demomax").innerHTML = findMax(4, 5, 6);
    //---------------------

    xsum = sumAll(1, 123, 500, 115, 44, 88);

  function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sum);
    //---------------------

    const persons = {
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
    }
    const person1 = {
      firstName:"John",
      lastName: "Doe"
    }
    const person2 = {
      firstName:"Mary",
      lastName: "Doe"
    }

    console.log(person.fullName.call(person2))

    
    document.getElementById("demo").innerHTML = persons.fullName.call(person2);
    //---------------------