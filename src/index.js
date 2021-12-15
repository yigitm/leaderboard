import './style.css';
import ApiCall from './api.call';

ApiCall.displayScores();

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.innerText === 'Refresh' ? ApiCall.getData() : ApiCall.postData();
  });
});
