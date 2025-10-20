import './style.css'
import { album } from './albumData'; // Imports the album track data

// =================================================================
// # SIDENAV (MOBILE MENU) TOGGLE LOGIC
// =================================================================

// Get necessary DOM elements for the sidenav
const sidenavOpenBtn = document.getElementById('sidenav-open-btn');
const sidenavCloseBtn = document.getElementById('sidenav-close-btn');
const sidenav = document.getElementById('sidenav');
const overlay = document.getElementById('sidenav-overlay');

/**
 * Opens the side navigation menu and shows the overlay.
 */
function openSidenav() {
    sidenav.classList.remove('translate-x-full'); // Slides the menu in
    overlay.classList.remove('hidden'); // Fades in the overlay
}

/**
 * Closes the side navigation menu and hides the overlay.
 */
function closeSidenav() {
    sidenav.classList.add('translate-x-full'); // Slides the menu out
    overlay.classList.add('hidden'); // Hides the overlay
}

// Attach event listeners to the buttons and overlay
sidenavOpenBtn.addEventListener('click', openSidenav);
sidenavCloseBtn.addEventListener('click', closeSidenav);
overlay.addEventListener('click', closeSidenav); // Also close when clicking outside the menu


// =================================================================
// # TRACKLIST & MUSIC PLAYER LOGIC
// =================================================================

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get DOM elements for the tracklist and audio player
    const tracklistContainer = document.getElementById('tracklist-container');
    const audioPlayer = document.getElementById('audio-player');

    // State variable to keep track of the currently playing track's DOM element
    let currentTrackElement = null;

    // Halt execution if essential elements are not found
    if (!tracklistContainer || !audioPlayer) {
        console.error("Required elements (tracklist container or audio player) not found!");
        return;
    }
    
    // --- Populate the Tracklist from albumData.js ---
    album.tracks.forEach((track, index) => {    
        // Create an HTML string for each track
        const trackHTML = `
            <div class="track-item" data-track-path="${track.filePath}">
                <!-- Left side of the track item -->
                <div class="flex items-center">
                    <span class="track-num">${index + 1}</span>
                    <button class="play-btn">
                        <img class="w-8 mr-5 cursor-pointer" src="assets/icons/play.png" alt="Play ${track.title}">
                    </button>
                    <div class="flex flex-col">
                        <span class="track-title">${track.title}</span>
                        <span class="track-artist">${track.artist}</span>
                    </div>
                </div>

                <!-- Right side of the track item -->
                <div class="duration-share">
                    <span class="track-duration">${track.duration}</span>
                    <button>
                        <img class="w-6 cursor-pointer" src="assets/icons/share.png" alt="Share ${track.title}">
                    </button>              
                </div>
            </div>
        `;
        // Insert the new track HTML into the container
        tracklistContainer.insertAdjacentHTML('beforeend', trackHTML);
    });

    // --- Music Player Event Handling ---
    // Use event delegation on the container to handle clicks on play buttons
    tracklistContainer.addEventListener('click', event => {
        const playButton = event.target.closest('.play-btn');

        // If the click was not on a play button, do nothing
        if (!playButton) return;

        const trackElement = playButton.closest('.track-item');
        const trackPath = trackElement.dataset.trackPath;

        // CASE 1: A new/different track is clicked
        if (trackElement !== currentTrackElement) {
            // If another track is already playing, reset its icon to 'play'
            if (currentTrackElement) {
                const oldPlayBtnImg = currentTrackElement.querySelector('.play-btn img');
                oldPlayBtnImg.src = 'assets/icons/play.png';
            }

            // Update the state to the new track
            currentTrackElement = trackElement;

            // Set the audio player's source to the new track's file path and play it
            audioPlayer.src = `${import.meta.env.BASE_URL}${trackPath}`;
            audioPlayer.play();

            // Change the clicked button's icon to 'pause'
            playButton.querySelector('img').src = 'assets/icons/pause.png';
        }
        // CASE 2: The currently playing track's button is clicked again (toggle play/pause)
        else {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playButton.querySelector('img').src = 'assets/icons/pause.png';
            } else {
                audioPlayer.pause();
                playButton.querySelector('img').src = 'assets/icons/play.png';
            }
        }
    });
});