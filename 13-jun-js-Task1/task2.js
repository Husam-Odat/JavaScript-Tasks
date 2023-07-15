

    const divcontainer = document.createElement("div");
    divcontainer.style = "background-color: yellow; width: 80% ; height: 200px; border : 5px solid black ;   ";
   

        const divcard = document.createElement("div");
        divcard.style = "width : auto ; text-align: center;";
        const head = document.createElement("h2");
        head.style = "text-align: center;";
        head.innerHTML = "hallo world";

        // var divcontainer = document.getElementById("divcontainer");

        // Add the event listener
        divcontainer.addEventListener("mouseover",function(event) {
        // Code to execute when the mouse is over the element
        // For example, change the background color
        head.innerHTML = "can i help";
        
        } );
        // divcontainer.addEventListener(
        //     "mouseup",
        //     handleMouseUp,
        //     passiveSupported ? { passive: true } : false,
        //   );

        divcontainer.addEventListener("mouseout",function(event) {
            // Code to execute when the mouse is over the element
            // For example, change the background color
            head.innerHTML = "hallo world";
            });
        // divcontainer.addEventListener("onmouseout" ,function(event) {
        // // Code to execute when the mouse is over the element
        // // For example, change the background color
        // head.innerHTML = "111234567";
        // });

        // divcontaner.addEventListener("mouseover", function(event) {
        //     // Code to execute when the mouse is over the element
        //     // For example, change the background color
        //     divcontaner.style = "background-color :red ;";
        //   });

        // const p = document.createElement("p");
        // p.innerHTML = `${age[i]}`;
        // p.style="font-size:16px ; text-align:center"
        // const imag = document.createElement("img");
        // imag.src = "img.png";
        // imag.style = "height:200px ; width : 100%"



        const divcardst = document.createAttribute("class");
        document.body.appendChild(divcontainer);
        divcontainer.appendChild(divcard);
        divcard.appendChild(head);
        divcard.appendChild(p);
        divcard.appendChild(imag);
        
    



