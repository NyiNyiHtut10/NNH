//declare variable using DM
let trackImage=document.querySelector(".trackImage");
let trackName=document.querySelector(".trackName");
let trackArtist=document.querySelector(".trackArtist");

let audioTag=document.querySelector(".audioTag");

let playBtn=document.querySelector(".playBtn");
let pauseBtn=document.querySelector(".pauseBtn");
let nextBtn=document.querySelector(".nextBtn");

//original line
let totalDisplay=document.querySelector(".totalDisplay");
let currentDisplay=document.querySelector(".currentDisplay");

//orange line
let currentTime=document.querySelector(".currentTime");



let  count=0;
let isPlay=false;

//creat array
const songList=[
    {
        name:"Waka Waka",
        artist:"Shakira",
        image:"./image/waka.jpg",
        path:"./Music/Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup.m4a",
    },
    {
        name:"Oh!Africa",
        artist:"Akon",
        image:"./image/oh.jpg",
        path:"./Music/Oh.m4a",
    },
    {
        name:"Waving the Flag",
        artist:"K'NANN",
        image:"./image/wave.jpg",
        path:"./Music/K'NAAN - Wavin' Flag (Coca-Cola Celebration Mix).m4a",
    },

] ;
// start function
function start() {
    trackImage.style.backgroundImage="url("+ songList[count].image   +" )";
    trackName.textContent=songList[count].name;
    trackArtist.textContent=songList[count].artist;
    audioTag.src=songList[count].path;
    audioTag.pause();
    console.log(audioTag.src);
    }

    //play function
    function playSong() {
        audioTag.play();
        isPlay=true;
        playBtn.classList.add("hidden");
        pauseBtn.classList.remove("hidden");
    
    }
    //pause function
    function pauseSong() {
        audioTag.pause();
        isPlay=false;
        playBtn.classList.remove("hidden");
        pauseBtn.classList.add("hidden");

        
    }

    //next function
    function next(){
        if (count==2) {
            return;
        }
       if (count<3) {
        count++;
        start();
        audioTag.pause();
        if (isPlay) {
            audioTag.play();
            };
    };
    BgColor();
    };
    function previous(){
      if (count>0) {
        count--;
        start();
        audioTag.pause();
        if (isPlay) {
            audioTag.play();
           
        };
    };
    BgColor();
    };
    
    //display sound,time
    audioTag.addEventListener("loadeddata",function() {
      let totalDuration =Math.floor(audioTag.duration);
      let minutes=Math.floor(totalDuration/60);
      let seconds=Math.floor(totalDuration%60);
      totalDisplay.textContent=
      (minutes <10?"0"+minutes:minutes)
      +":"+
      (seconds <10?"0"+seconds:seconds);

      audioTag.addEventListener("timeupdate",function() {
       let currentDuration= audioTag.currentTime;
       let minutes=Math.floor(currentDuration/60);
       let seconds=Math.floor(currentDuration%60);
       currentDisplay.textContent=
       (minutes <10?"0"+minutes:minutes)
       +":"+
       (seconds <10?"0"+seconds:seconds)
      console.log(currentDuration);

      currentTime.style.width=(currentDuration/totalDuration*100)+"%";
    }
      );
    });
    

    //random backgrounf function
    function BgColor() {
       let red=Math.floor(Math.random()*256);
       let green=Math.floor(Math.random()*256);
       let blue=Math.floor(Math.random()*256);

       let bgColor="rgb("+ red +","+ green + "," + blue +")";
       document.body.style.background=bgColor;
    }
    console.log(Math.floor(Math.random()*256));

   

 
//start function
start();
 
