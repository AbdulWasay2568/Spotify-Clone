console.log("Welcome to Spotify");

let songindex = 0;
let audioElement = new Audio('./Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let Progressbar = document.getElementById('Progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let masterArtists = document.getElementById('masterArtists');
let songPic = document.getElementById('songPic');
let currentTimeDisplay = document.getElementById('currentTime');  // Timer element for current time
let durationDisplay = document.getElementById('duration');  // Timer element for total duration
let songItems = Array.from(document.getElementsByClassName('songItem'));

let Songs = [
    { songName: "Mrama de tande na", artist: "Wajid Layaq", filepath: "./Songs/Mrama.mp3", coverPath: "./Cover/1.jpg", description: "Some description 1" },
    { songName: "Zama Khkulay janaana", artist: "Bilal Khatak, Ali Shah", filepath: "./Songs/zama khkulay janaana.mp3", coverPath: "./Cover/1.jpg", description: "Some description 2" },
    { songName: "Khanda Rata Kawi", artist: "Wajid Layaq", filepath: "./Songs/Khanda Rata Kawi.mp3", coverPath: "./Cover/2.jpg", description: "Some description 3" },
    { songName: "Wo De Sedge Wazirey", artist: "Artist 4", filepath: "./Songs/Wo De Sedge Wazirey.mp3", coverPath: "./Cover/3.jpg", description: "Some description 4" },
    { songName: "Hayye Oye", artist: "Artist 5", filepath: "./Songs/4.mp3", coverPath: "./Cover/4.jpg", description: "Some description 5" },
    { songName: "Dheere Dheere", artist: "Artist 6", filepath: "./Songs/5.mp3", coverPath: "./Cover/5.jpg", description: "Some description 6" },
    { songName: "Bekhayali", artist: "Artist 7", filepath: "./Songs/6.mp3", coverPath: "./Cover/6.jpg", description: "Some description 7" },
    { songName: "Fakira By Sanam", artist: "Artist 8", filepath: "./Songs/7.mp3", coverPath: "./Cover/7.jpg", description: "Some description 8" },
    { songName: "Jeene Laga Hu", artist: "Artist 9", filepath: "./Songs/8.mp3", coverPath: "./Cover/8.jpg", description: "Some description 9" },
    { songName: "Zara Zara By Jalraj", artist: "Artist 10", filepath: "./Songs/9.m4a", coverPath: "./Cover/9.jpg", description: "Some description 10" },
    { songName: "O Mere Sona re", artist: "Artist 11", filepath: "./Songs/10.mp3", coverPath: "./Cover/10.jpg", description: "Some description 11" }
];

// Function to update the playlist UI
function updatePlaylistUI() {
    const songContainers = document.querySelectorAll('#songsPlayList');

    Array.from(songContainers).forEach((container, i) => {
        if (Songs[i]) {
            const img = container.querySelector('img');
            const playListName = container.querySelector('#playListName');
            const playListDescription = container.querySelector('#playListDescription');

            img.src = Songs[i].coverPath;
            playListName.innerText = Songs[i].songName;
            playListDescription.innerText = Songs[i].artist;
        }
    });
}

function updatePlaylistUII() {
    const playListContainers = document.querySelectorAll('.songNumber');

    Array.from(playListContainers).forEach((container, i) => {
        if (Songs[i]) {
            const img = container.querySelector('img');
            const playListName = container.querySelector('#playListNames'); 
            const singersName = container.querySelector('#singersName'); 

            img.src = Songs[i].coverPath;
            playListName.innerText = Songs[i].songName;
            singersName.innerText = Songs[i].artist;
        }
    });
}

// Function to update the song info in the emptyContainer
function updateSongInfo(index) {
    masterSongName.innerText = Songs[index].songName;
    masterArtists.innerText = Songs[index].artist;
    songPic.src = Songs[index].coverPath;
}

// Function to format time in mm:ss format
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Function to toggle play/pause icons
function togglePlayPauseIcon(isPlaying) {
    if (isPlaying) {
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
}

updatePlaylistUI(); 
updatePlaylistUII();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        togglePlayPauseIcon(true);
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        togglePlayPauseIcon(false);
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    let Progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    Progressbar.value = Progress;

    // Update current time and duration display
    currentTimeDisplay.innerText = formatTime(audioElement.currentTime);
    if (audioElement.duration) {
        durationDisplay.innerText = formatTime(audioElement.duration);
    }
});

Progressbar.addEventListener('change', () => {
    audioElement.currentTime = Progressbar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-circle-play')) {
            makeAllPlays();
            songindex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `./Songs/${songindex + 1}.mp3`;
            updateSongInfo(songindex);  
            audioElement.currentTime = 0;
            audioElement.play();
            togglePlayPauseIcon(true);  
            gif.style.opacity = 1;
        } else {
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioElement.currentTime = 1;
            audioElement.pause();
            gif.style.opacity = 0;
            togglePlayPauseIcon(false);  
        }
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= Songs.length - 1) {
        songindex = 0;
    } else {
        songindex += 1;
    }
    audioElement.src = Songs[songindex].filepath;
    updateSongInfo(songindex);  
    audioElement.currentTime = 0;
    audioElement.play();
    togglePlayPauseIcon(true);  
    gif.style.opacity = 1;
});

document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = Songs.length - 1;
    } else {
        songindex -= 1;
    }
    audioElement.src = Songs[songindex].filepath;
    updateSongInfo(songindex);  
    audioElement.currentTime = 0;
    audioElement.play();
    togglePlayPauseIcon(true);  
    gif.style.opacity = 1;
});

// Adding event listeners to songNumber 
Array.from(document.querySelectorAll('.songNumber')).forEach((element, index) => {
    element.addEventListener('click', () => {
        songindex = index;
        audioElement.src = Songs[songindex].filepath;
        updateSongInfo(songindex); 
        audioElement.currentTime = 0;
        audioElement.play();
        togglePlayPauseIcon(true);  
        gif.style.opacity = 1;
    });
});

// Adding event listeners to songsPlayList
Array.from(document.querySelectorAll('#songsPlayList')).forEach((element, index) => {
    element.addEventListener('click', () => {
        songindex = index;
        audioElement.src = Songs[songindex].filepath;
        updateSongInfo(songindex); 
        audioElement.currentTime = 0;
        audioElement.play();
        togglePlayPauseIcon(true);  
        gif.style.opacity = 1;
    });
});
