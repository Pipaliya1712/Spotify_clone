let songIndex =0;
let audioElement = new Audio('11.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let masterSongName = document.getElementById('masterSongName')
let gif = document.getElementById('gif')
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"TVARI - Tokyo Cafe", filePath:"11.mp3" , coverPath: "1.jpg",songTime: '02:33'},
    {songName:"Happy Day (Background, Vlog Music)", filePath:"22.mp3" , coverPath: "2.webp",songTime: '01:48'},
    {songName:"Summer Party", filePath:"33.mp3" , coverPath: "3.webp",songTime: '01:41'},
    {songName:"calm chill beautiful", filePath:"44.mp3" , coverPath: "4.webp",songTime: '12:45'},
    {songName:"Motivational Electronic | Distant", filePath:"55.mp3" , coverPath: "5.webp",songTime: '03:26'},
    {songName:"One Last Time", filePath:"66.mp3" , coverPath: "6.webp",songTime: '01:12'},
    {songName:"Islamic Background sounds", filePath:"77.mp3" , coverPath: "7.webp",songTime: '03:24'}
]

songItem.forEach((element , i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
    element.getElementsByClassName('timeduration')[0].innerText = songs[i].songTime
    
})

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

const mackAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e) =>{
        if(e.target.classList.contains('fa-pause-circle') ){
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();
            gif.style.opacity =0;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }else{
            mackAllPlay();
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `${(songIndex+1) * 11}.mp3`
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.play();
            gif.style.opacity =1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    songIndex = (songIndex+1)%7;
    audioElement.src = `${(songIndex+1) * 11}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.cuurentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex-=1;
    }
    audioElement.src = `${(songIndex+1) * 11}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.cuurentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})