import { getGameScore } from './fetch.js';

const showAllScores = (showScore, baseURL) => {
  showScore.innerHTML = '';
  getGameScore(baseURL).then((res) => res.result.forEach((element) => {
    showScore.innerHTML += `
          <li>
            ${element.user}
            <span>${element.score}</span>
          </li>`;
  })).catch((error) => error);
};

export default showAllScores;