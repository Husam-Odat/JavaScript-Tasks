
let text = "";
let cars = ["volvo" , "BMW" , "marzetes" , "vw"];

//for (expression 1; expression 2; expression 3)

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
    // text = text +cars[i]
  }
  document.write(text);

//   ------------------------------------
  document.write("<br>");
let j = 0;
  let text2 = "";
let cars2 = ["volvo" , "BMW" , "marzetes" , "vw"];
  for (;cars2[j];) {
    text2 += cars2[j];
    j++;
  }
  document.write(text2);
// ------------------------------------

  const numbers = [45, 4, 9, 16, 25];

let txt = "" +"<br>" +"<br>"+ "<br>";
for (let x in numbers) {
  txt += numbers[x] + "<br>";
}
document.write(txt);
// ------------------------------------

const cars1 = ["BMW", "Volvo", "Mini"];

let text1 = "" +"<br>" +"<br>"+ "<br>";
for (let x of cars1) {
  text1 += x + "<br>";
}
document.write(text1);

// ------------------------------------
let language = "JavaScript";

let textl = "";
for (let x of language) {
textl += x;
}
document.write(textl);
// ------------------------------------
document.write("<br>" +"<br>");
let i = 0 ;
let textw ="";
while (i < 10) {
    textw += "The number is " + i + "<br>";
    i++;
      }document.write(textw);

// ------------------------------------

let textdo = ""
let i_d = 20;

do {
  textdo += "<br>The number is " + i_d;
  i_d++;
}
while (i_d < 10); 
document.write(textdo);
// ---------------------------------
document.write("<br>");
document.write("<br>");
document.write("<br>");
// ---------------------------------
let textbr = "";
for (let k = 0; k < 10; k++) {
  if (k === 3) { break; }
  textbr += "The number is breake " + k + "<br>";

}document.write(textbr);
// ---------------------------------

let textco = "";
for (let l = 0; l < 10; l++) {
  if (l === 3) { continue; }
  textco += "The number is continue " + l + "<br>";

}document.write(textco);


// ----------------------------------------
document.write("<br>");
document.write("<br>");
document.write("<br>");


const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}document.write(greeting);