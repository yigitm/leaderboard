/*
  Micronaut game is created wiht a post request.
  Game ID : pHJ29donGbnWnRz8vdHU"
*/
const ApiCall = (() => {
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const paramURL = `${baseURL}games/pHJ29donGbnWnRz8vdHU/scores/`;

  const displayScores = () => {
    if (localStorage.Score !== undefined) {
      const ol = document.querySelector('ol');
      const localData = JSON.parse(localStorage.getItem('Score'));
      ol.innerHTML = '';
      localData.forEach((data) => {
        const li = document.createElement('li');
        li.innerText = `${data.user} : ${data.score}`;
        ol.append(li);
      });
    }
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

  const postData = async () => {
    const name = document.getElementById('name');
    const score = document.getElementById('score');
    const response = await fetch(paramURL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        user: name.value,
        score: parseInt(score.value, 10),
      }),
    });
    const message = await response.json();
    if (message.result === 'Leaderboard score created correctly.') {
      name.value = '';
      score.value = '';
      getData();
      displayScores();
    }
  };

  return { postData, getData, displayScores };
})();
export default ApiCall;
