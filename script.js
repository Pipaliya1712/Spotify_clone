console.log("object")
let songIndex =0;
let audioElement = new Audio('11.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songs = [
    {songName:"xyz", filePath:"11.mp3" , coverPath: "1.jpg"},
    {songName:"xyz", filePath:"22.mp3" , coverPath: "2.webp"},
    {songName:"xyz", filePath:"xyz" , coverPath: "3.webp"},
    {songName:"xyz", filePath:"xyz" , coverPath: "4.webp"},
    {songName:"xyz", filePath:"xyz" , coverPath: "5.webp"},
    {songName:"xyz", filePath:"xyz" , coverPath: "6.webp"},
    {songName:"xyz", filePath:"xyz" , coverPath: "7.webp"}
]
masterPlay.addEventListener('click' , () => {
    if(audioElement.paused || audioElement.time <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }  
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})
audioElement.addEventListener('timeupdate' , () =>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)  *100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})
