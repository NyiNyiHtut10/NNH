let human=document.querySelector(".human");
let computer=document.querySelector(".computer");

let win=document.querySelector(".win");
let lose=document.querySelector(".lose");
let draw=document.querySelector(".draw");




//play function
function play(x) {
    //array
    let select = ["Tom", "Jerry", "Spike"];
    //To make Computer understand
    let index =Math.floor(Math.random() * 3);
    //index recall
    let Computer = select[index];
   // console.log(Computer);
    
   //determine the result
    let result;
    if (x == Computer) {
        result = "draw";
    } else if (
        (x == "Tom" && Computer == "Spike") ||
        (x == "Jerry" && Computer == "Tom") ||
        (x == "Spike" && Computer == "Jerry")
    )
    {
        result="win";
    }
    else {
        result="lose";
    }
    console.log(x);
    console.log(Computer);
    console.log(result);

    //output chosen
    human.innerHTML="You :" +x.toUpperCase();
    computer.innerHTML="PC :"+Computer.toUpperCase();
   //output result
   if (result=="draw"){
    draw.classList.remove("hidden");
    win.classList.add("hidden");
    lose.classList.add("hidden");
 } 
 
 else if (result=="win")  {
    draw.classList.add("hidden");
    win.classList.remove("hidden");
    lose.classList.add("hidden");
 } 


 else if(result=="lose") {
    draw.classList.add("hidden");
    win.classList.add("hidden");
    lose.classList.remove("hidden");

 }


}
