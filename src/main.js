import './style.css'

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