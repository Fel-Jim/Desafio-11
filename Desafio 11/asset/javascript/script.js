const button = document.querySelector(".button");
button.addEventListener("click", ()=>{
    const input = document.querySelector(".quantity").value;
    console.log("input-->>",input);
    const select = document.querySelector(".colorselect").value;
    console.log("select-->",select);
    const  total = input * 300;
    document.querySelector(".total").innerHTML=total;
    const amount = input;
    document.querySelector(".amount").innerHTML=amount;
    const Colorfinal = select;
    document.querySelector(".Colorfinal").style.backgroundColor = Colorfinal;
      

})


