function time(){
    let hours = document.querySelector(".hrs");
    let minutes = document.querySelector(".mins");
    let seconds = document.querySelector(".secs");
    let amPm = document.querySelector(".ampm-text");

    let currentTime = new Date();
    let currentHrs = currentTime.getHours();
    let currentMins = currentTime.getMinutes();
    let currentSecs = currentTime.getSeconds();
    let currentAmPm = "AM";


if(currentHrs == 0){
    currentHrs = 12;
}
if(currentHrs > 12){
    currentHrs = currentHrs - 12;
    currentAmPm = "PM";
}
if(currentHrs < 10){
    currentHrs = "0" + currentHrs;
}
if(currentMins < 10){
    currentMins = "0" + currentMins;
}
if(currentSecs < 10){
    currentSecs = "0" + currentSecs;
}
hours.innerText = currentHrs;
minutes.innerText = currentMins;
seconds.innerText = currentSecs;
amPm.innerText = currentAmPm;


}

let oneSecond = 1000;
setInterval(time,oneSecond);



//-------------------------------------------

//-------------------------------------------


function settime(){

    let i= document.getElementById('wakeup-time-selector').value;
    let j = document.getElementById("lunch-time-selector").value;
    let z = document.getElementById("evening-time-selector").value;
    let k = document.getElementById("night-time-selector").value;
    let hourr = new Date().getHours();
    
   
    if(i==hourr){

        document.getElementById('changeImg').src=("./morning.png");
        document.getElementById('message1').innerHTML='GOOD MORNING!! WAKE UP !!';
        document.getElementById("message2").innerHTML=" GRAB SOME HEALTHY BREAKFAST!!!";
    }

    if(j==hourr){
        document.getElementById('changeImg').src=("./component.png");
        document.getElementById('message1').innerHTML='GOOD AFTERNOON !! HAVE DELICIOUS LUNCH';
        document.getElementById("message2").innerHTML=" GRAB SOME HEALTHY LUNCH!!!";
    }

    if(z==hourr){
        document.getElementById('changeImg').src=("./snack.png");
        document.getElementById('message1').innerHTML='GOOD EVENING !! HAVE SOME SANCKS';
        document.getElementById("message2").innerHTML=" GRAB SOME HEALTHY SNACKS!!!";
    }    
    if(k==hourr){
        document.getElementById('changeImg').src=("./sleep.png");
        document.getElementById('message1').innerHTML='GOOD NIGHT !! HAVE SOUND SLEEP';
        document.getElementById("message2").innerHTML=" HAVE SOUND SLEEP!!!";
    }    
    
}