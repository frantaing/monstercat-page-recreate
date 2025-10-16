import './style.css'

// Import the tracklist album data
import { album } from './albumData';

// ===========================
// # Toggle sidenav menu
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
// # Toggle sidenav menu
// ===========================
document.addEventListener('DOMContentLoaded', () => {

    // Find tracklist container
    const tracklistContainer = document.getElementById('tracklist-container');

    // If container doensn't exist, HALT
    if (!tracklistContainer) {
        console.error("Tracklist container not found!");
        return;
    }
    
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
});