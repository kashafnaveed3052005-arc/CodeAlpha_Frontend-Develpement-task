let songs=[

{
title:"Perfect",
artist:"Ed Sheeran",
src:"songs/perfect.mp3"
},

{
title:"Hello",
artist:"Adele",
src:"songs/hello.mp3"
}

];


let index=0;


let audio=document.getElementById("audio");

let title=document.getElementById("title");

let artist=document.getElementById("artist");

let progress=document.getElementById("progress");

let volume=document.getElementById("volume");


function loadSong(){

audio.src=songs[index].src;

title.innerHTML=songs[index].title;

artist.innerHTML=songs[index].artist;

}

function playSong(){

audio.play();

}
function pauseSong(){

audio.pause();

}

function nextSong(){

index++;

if(index>=songs.length){

index=0;

}

loadSong();

playSong();

}

function previousSong(){

index--;

if(index<0){

index=songs.length-1;

}

loadSong();

playSong();

}


audio.addEventListener("timeupdate",()=>{

progress.value =
(audio.currentTime/audio.duration)*100;

});


progress.addEventListener("input",()=>{

audio.currentTime =
(progress.value/100)*audio.duration;

});



volume.addEventListener("input",()=>{

audio.volume=volume.value;

});



loadSong();