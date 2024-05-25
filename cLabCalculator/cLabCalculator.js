 let output=document.getElementById('result');
 let temStore="";

 function press(clickNum) {
    if (clickNum=='solve') {
        output.innerHTML=eval(temStore);
    } else {
        temStore += clickNum.innerHTML;
        output.innerHTML= temStore;
    }
    
 }
 function clearAll() {
 output.innerHTML='|';
 temStore="";
    
 }