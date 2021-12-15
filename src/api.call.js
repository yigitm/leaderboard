/*
    Create game function called and game: Micronaut is created.
    Game ID : pHJ29donGbnWnRz8vdHU"
*/
const ApiCall = (() => {
  const baseURL =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const paramURL = baseURL + 'games/pHJ29donGbnWnRz8vdHU/scores/';
  let r = false;
  const createGame = () => {
    const gameURL = apiURL + 'games/';
    fetch(gameURL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Micronaut',
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        localStorage.setItem('Game', JSON.stringify(result));
      });
  };

  const postData = () => {
    let name = document.getElementById('name');
    let score = document.getElementById('score');

    fetch(paramURL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
      });
    name.value = '';
    score.value = '';
  };

  const getData = async () => {
    const response = await fetch(paramURL);
    const scores = await response.json();
    const result = () => {
      localStorage.setItem('Score', JSON.stringify(scores.result));
      return displayScores();
    };
    result();
  };

  const displayScores = () => {
    const ul = document.querySelector('ul');
    if (localStorage.Score !== undefined && ul.children.length === 0) {
      const localData = JSON.parse(localStorage.getItem('Score'));
      localData.forEach((data) => {
        const li = document.createElement('li');
        li.innerText = data.user + ' : ' + data.score;
        ul.append(li);
      });
    }
  };

  return { postData, getData, displayScores };
})();
export default ApiCall;
