import './style.css'

// Import the tracklist album data
import { album } from './albumData';

// ===========================
// # Toggle sidenav menu logic
// ===========================
const sidenavOpenBtn = document.getElementById('sidenav-open-btn');
const sidenavCloseBtn = document.getElementById('sidenav-close-btn');
const sidenav = document.getElementById('sidenav');
const overlay = document.getElementById('sidenav-overlay');

function openSidenav() { sidenav.classList.remove('translate-x-full'); overlay.classList.remove('hidden') }
function closeSidenav() { sidenav.classList.add('translate-x-full'); overlay.classList.add('hidden') }

sidenavOpenBtn.addEventListener('click', openSidenav);
sidenavCloseBtn.addEventListener('click', closeSidenav);
overlay.addEventListener('click', closeSidenav);


// ===========================
// # Tracklist & music player logic
// ===========================
document.addEventListener('DOMContentLoaded', () => {

    // Get elements
    // tracklistContainer for populating the tracklist
    const tracklistContainer = document.getElementById('tracklist-container');
    // audioPlayer for playing audio
    const audioPlayer = document.getElementById('audio-player');

    // State management variable
    // Keep track which .track-item is currently playing
    let currentTrackElement = null;

    // If containers doensn't exist, HALT
    if (!tracklistContainer || !audioPlayer) {
        console.error("Tracklist container and audio player not found!");
        return;
    }
    
    // Populate the tracklist
    // Loop thru each track in the album data
    album.tracks.forEach((track, index) => {    
        // For each track, create the HTML template
        const trackHTML = `
            <div class="track-item" data-track-path="${track.filePath}">
                <!-- Right side -->
                <div class="flex items-center">
                <!-- Track # -->
                <span class="track-num">${index + 1}</span>
                <!-- Play icon -->
                <button class="play-btn"><img class="w-8 mr-5 cursor-pointer" src="assets/icons/play.png" alt="Play track button"></button>
                <!-- Track title + Artist -->
                <div class="flex flex-col">
                    <span class="track-title">${track.title}</span>
                    <span class="track-artist">${track.artist}</span>
                </div>
                </div>

                <!-- Left side -->
                <div class="duration-share">
                <!-- Track duration -->
                <span class="track-duration">${track.duration}</span>
                <!-- Share icon -->
                <button><img class="w-6 cursor-pointer" src="assets/icons/share.png" alt="Share track button"></button>              
                </div>
            </div>
        `;
        // Insert the newly created HTML into the tracklist container
        tracklistContainer.insertAdjacentHTML('beforeend', trackHTML);
    });

    // For music player
    tracklistContainer.addEventListener('click', event => {
        // Find the closest .play-btn that was clicked on
        const playButton = event.target.closest('.play-btn');

        // If the click was not on a play button, do nothing
        if (!playButton) { return; }

        // Find the parent .track-item of the clicked play butotn
        const trackElement = playButton.closest('.track-item');
        const trackPath = trackElement.dataset.trackPath;

        // [1] If a new song is clicked (or the first song is clicked)
        if (trackElement !== currentTrackElement) {
            // If another songn is playing, reset the icon to the play button
            if (currentTrackElement) {
                const oldPlayBtnImg = currentTrackElement.querySelector('.play-btn img');
                oldPlayBtnImg.src = 'assets/icons/play.png';
            }

            // Update the current track
            currentTrackElement = trackElement;

            // Set the audio source and play the new track
            audioPlayer.src = `${import.meta.env.BASE_URL}${trackPath}`;
            audioPlayer.play();

            // Update the new track's icon to 'pause'
            playButton.querySelector('img').src = 'assets/icons/pause.png';
        }

        // [2] If the currently playing song's button is clicked again
        else {
            if (audioPlayer.paused) {
                // If it's paused, play it and change the icon to 'pause'
                audioPlayer.play();
                playButton.querySelector('img').src = 'assets/icons/pause.png';
            }
            else {
                // If it's playing, pause and change the icon to 'play'
                audioPlayer.pause();
                playButton.querySelector('img').src = 'assets/icons/play.png';
            }
        }
    });
});