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
    fetch(paramURL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        user: 'John Doe',
        score: 42,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        localStorage.setItem('Score', JSON.stringify(result));
      });
  };

  const getData = () => {
    fetch(paramURL)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem('Score', JSON.stringify(result));
      })
      .then(() => {
        return displayScores();
      });
  };

  const displayScores = () => {
    const ul = document.querySelector('ul');
    if (localStorage.Score !== undefined && ul.children.length === 0) {
      const localData = JSON.parse(localStorage.getItem('Score')).result;
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
