function rain() {
    let heart=document.querySelector('.heart');
    let e=document.createElement('div');
    e.classList.add('drop');
    heart.appendChild(e);


    let left=Math.floor(Math.random()*400);
    let duration=Math.random()*0.5;

    e.style.right=left + 'px';
    e.style.animationDuration =1 +duration+'s';






    setTimeout(function(){

        heart.removeChild(e)
    },3000)
};
setInterval(function () {
    rain()
    
},50);