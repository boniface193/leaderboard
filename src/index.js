import './style.css';
import showAllScores from './modules/showScores.js';
import createForm from './modules/createScore';

const showScore = document.querySelector('.show-scores');
const refresh = document.querySelector('.refresh');
const createScore = document.querySelector('form');

// API baseUrl
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M5Tuihau2Xpn4waLVj0X/scores/';

// show listed score on page load
showAllScores(showScore, baseURL);
// make a request on button click
refresh.addEventListener('click', () => {
  showAllScores(showScore, baseURL);
});

createForm(createScore, baseURL, showScore);
