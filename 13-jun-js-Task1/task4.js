
const divcontainer = document.createElement("div");
divcontainer.style = "display: inline-block; ";
document.body.appendChild(divcontainer);


const divin1 = document.createElement("div");
divin1.setAttribute("display", "inline-block");
divcontainer.style = "margin : 50px ; padding: 50px ;";
divcontainer.appendChild(divin1);

// -----------------------------------------------------

const select1 = document.createElement("select");
select1.style = 
divin1.appendChild(select1);

const option1_1 = document.createElement("option");
option1_1.innerHTML = "Fantasy";
option1_1.style =
select1.appendChild(option1_1);


const option1_2 = document.createElement("option");
option1_2.innerHTML = "Cursive";
option1_2.style = 
select1.appendChild(option1_2);

// ------------------------------------------------

const select2 = document.createElement("select");

divin1.appendChild(select2);

const option2_1 = document.createElement("option");
option2_1.innerHTML = "10px";
option2_1.style =
select2.appendChild(option2_1);


const option2_2 = document.createElement("option");
option2_2.innerHTML = "15px";
option2_2.style = "margin-right : 50px;"
select2.appendChild(option2_2);


// ----------------------------------------------------


const inputCheck1 = document.createElement("input");
inputCheck1.setAttribute("type", "checkbox");
// inputCheck1.style = " type:checkbox ; id:italic ; value:italic ;"
divin1.appendChild(inputCheck1);

const inputlabel1 = document.createElement("label");
inputlabel1.style = " for:italic ;"
inputlabel1.innerHTML = "italic";
divin1.appendChild(inputlabel1);
// -----------------------------------------------------------------------------------

const inputCheck2 = document.createElement("input");
inputCheck2.setAttribute("type", "checkbox");
inputCheck2.style = " type:checkbox ; id:bold ; value: bold;"
divin1.appendChild(inputCheck2);

const inputlabel2 = document.createElement("label");
inputlabel2.style = " for:bold ;"
inputlabel2.innerHTML = "bold";
divin1.appendChild(inputlabel2);
// -------------------------------------------------------------------------------------

const inputCheck3 = document.createElement("input");
inputCheck3.setAttribute("type", "checkbox");
inputCheck3.style = " type:checkbox ; id:underline ; value:underline;"
divin1.appendChild(inputCheck3);

const inputlabel3 = document.createElement("label");
inputlabel3.style = " for:underline ;"
inputlabel3.innerHTML = "under line";
divin1.appendChild(inputlabel3);

// --------------------------------------------------------------------------------------



const divin2 = document.createElement("div");
divin2.style = "width: 80% ; height: 200px; border : 5px solid black ;"

divcontainer.appendChild(divin2);

const pIndivin2 = document.createElement("p");
pIndivin2.id = "demo";
pIndivin2.innerHTML = "This brown fox over the lazy dog";
divin2.appendChild(pIndivin2);
// Add event listeners
// option1_1.addEventListener("mousedown", function() {
//         divin1.setAttribute("font-family", "Times New Roman");
//     this.textContent = "Release Me";
//   });

  // Add event listeners
//   option1_2.addEventListener("mousedown", function() {
//     pIndivin2.style.backgroundColor = "#1ec5e5";
//     pIndivin2.textContent = "Release Me";
//   });


//   option1_2.addEventListener("mousedown", function() {
//     pIndivin2.style.fontFamily = "Phantasy";
//   });

const arr = ["red" , "blue"]
  select1.addEventListener("change", function() {
  const selectedOption = select1.options[select1.selectedIndex].text;
  pIndivin2.style.fontFamily = selectedOption;
//   pIndivin2.setAttribute = ("color",selectedOption);
 
});
  
select2.addEventListener("change", function() {
  const selectedOption = select2.options[select2.selectedIndex].text;
  pIndivin2.style.fontSize = selectedOption;
//   pIndivin2.setAttribute = ("color",selectedOption);
 
});

inputCheck1.addEventListener("change", function() {
  
//   pIndivin2.style.color = "orange";
  pIndivin2.style.fontStyle="italic";
 
//   pIndivin2.setAttribute = ("color","orange");
 
});

inputCheck2.addEventListener("change", function() {
  
    //   pIndivin2.style.color = "orange";
      pIndivin2.style.fontWeight="bolder";
     
    //   pIndivin2.setAttribute = ("color","orange");
     
    });

    inputCheck3.addEventListener("change", function() {
  
        //   pIndivin2.style.color = "orange";
          pIndivin2.style.textDecorationLine= "underline";
          
        //   pIndivin2.setAttribute = ("color","orange");
         
        });

//   select1.addEventListener("change", function() {
//   const selectedOption = select1.options[0];
//   pIndivin2.style.color = "red";
// });

// select1.addEventListener("change", function() {
//     const selectedOption = select1.options[1];
//     pIndivin2.style.color = "blue";
//   });