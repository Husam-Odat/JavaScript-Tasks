if(localStorage.length > 0){
    document.body.style.background = localStorage.color;
}



function color (color)
{
    localStorage.setItem('color',color)
    document.body.style.background = color ;
}