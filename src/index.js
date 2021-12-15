import './style.css';

const getUsers = () => {
  fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores',
  )
    .then((response) => response.json())
    .then((data) => {
      //document.getElementsByTagName('ul')[0].innerHTML = `<li></li>`;
      console.log(data);
    });
};

getUsers();
