let clock = document.getElementById("clock");
let dayDate = document.getElementById("day-date");
setInterval(updateTime, 1000);

function updateTime(){
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    if(seconds.toString().length == 1) {
        seconds = "0"+seconds;
    }
    if(minutes.toString().length == 1) {
        minutes = "0"+minutes;
    };
    if(hours.toString().length == 1) {
        hours = "0"+hours;
    };
    let currTime = hours + ":" + minutes + ":" + seconds;
    clock.innerHTML = currTime;
    dayDate.innerHTML = now.toDateString();
};

//Audio player
let songs = [
    {name:"Singing Birds", src:"birds-singing-calm-river-nature-ambient-sound-127411.mp3"},
    {name:"Fireplace",src:"crackling-fireplace-nature-sounds-8012.mp3"},
    {name:"Light Rain",src:"light-rain-ambient-114354.mp3"},
    {name:"Wavy Beach",src:"sandy-beach-calm-waves-water-nature-sounds-8052.mp3"}
];

let isPlaying = false;
let playpauseBtn = document.getElementById("playpause-btn");
let songTitle = document.getElementById("song-title");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");
let currSong = 0;

let audio = new Audio();
audio.src = songs[currSong].src;
songTitle.innerHTML = songs[currSong].name;

function playpauseSong(){
    if(!isPlaying){
        audio.play();
        isPlaying = true;
        playpauseBtn.src = "pause.png";
    }else{
        audio.pause();
        isPlaying = false;
        playpauseBtn.src = "play.png";
    }
}

function nextSong(){
    currSong++;
    if(currSong > songs.length-1){
        currSong = 0;
    }
    songTitle.innerHTML = songs[currSong].name;
    audio.src = songs[currSong].src;
    audio.play();
    isPlaying = true;
    playpauseBtn.src = "pause.png";
};

function prevSong(){
    currSong--;
    if(currSong < 0){
        currSong = songs.length-1;
    }
    songTitle.innerHTML = songs[currSong].name;
    audio.src = songs[currSong].src;
    audio.play();
    isPlaying = true;
    playpauseBtn.src = "pause.png";
};

playpauseBtn.addEventListener("click", playpauseSong);

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", prevSong);

document.onkeydown = function(key){
    if(key.key===" ") playpauseSong();
    if(key.key==="ArrowLeft") prevSong();
    if(key.key==="ArrowRight") nextSong();
};
audio.onended = function(){
    nextSong();
};
