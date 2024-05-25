let timer=document.getElementById('timer');
let startTime;
let TimeDiffernce=0;
let runTime;
let notRun=false;


const start=()=>{
    if(notRun!=true){
        startTime=Date.now()-TimeDiffernce; //need current time
        runTime=setInterval(updateTime,10);
        //When program run 
        notRun=true;

    
    }
    

 }

 //time calculate
 const updateTime=()=>{
    TimeDiffernce= Date.now()-startTime;
  
    updateDisplay();
 }
 
const stop=()=>{
   if(notRun){
    clearInterval(runTime);
    //to allow press start button
    notRun=false;
   }

} 
const reset=()=>{
    TimeDiffernce=0;
    stop();
    updateDisplay();
    
}
 //just for display
 const updateDisplay=()=>{
   
    let milliSec=Math.floor((TimeDiffernce % 1000)/10); //millionSec %1000
    // divided by 10 becoz two decimal places
    let second=Math.floor(TimeDiffernce/1000);
    second=second>59? second%60:second;
    
    //minute & hour
    let minute=Math.floor((TimeDiffernce/1000)/60);
    let hour=Math.floor((TimeDiffernce/1000)/360);
    hour=hour<10? "0"+hour:hour;
    minute=minute<10? "0"+minute:minute;
    second=second<10? "0"+second:second;
    milliSec=milliSec<10? "0"+milliSec:milliSec;


    timer.innerHTML=hour + ":" +minute+":" +second+":"+milliSec;


}

