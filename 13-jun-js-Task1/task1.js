const Name = ["husam" , "noor" , "anfal" , "razan"];
const age = [27, 20 ,25 ,25 ];
const img = ["./img/b1.png" ,"./img/b2.png","./img/g2.png","./img/g3.png" ]

function cards (Name , age ){

    const divcontainer = document.createElement("div");
    divcontainer.style = "display:flex; flex-direction:row ;  flex-wrap: wrap; justify-content:space-evenly ";
    for(let i=0 ; i< Name.length ; i++) {

        const divcard = document.createElement("div");
        divcard.style = "border : 5px solid black ; width : 200px ";
        const head = document.createElement("h2");
        head.style = "text-align: center";
        head.innerHTML = `${Name[i]}`;

        const p = document.createElement("p");
        p.innerHTML = `${age[i]}`;
        p.style="font-size:16px ; text-align:center"
        const imag = document.createElement("img");
        imag.src = `${img[i]}`;
        imag.style = "height:300px ; width : 100%"



        const divcardst = document.createAttribute("class");
        document.body.appendChild(divcontainer);
        divcontainer.appendChild(divcard);
        divcard.appendChild(head);
        divcard.appendChild(p);
        divcard.appendChild(imag);
        
    }
    

}

cards (Name , age )