import { createGame } from './fetch.js';
import showAllScores from './showScores.js';

const createForm = (createScore, baseURL, showScore) => {
  createScore.addEventListener('submit', (e) => {
    e.preventDefault();
    createGame(baseURL, e.target[0].value, e.target[1].value).then(() => {
      // show listed score on page load
      createScore.reset();
      showAllScores(showScore, baseURL);
    });
  });
};

export default createForm;