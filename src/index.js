import './style.css';
import ApiCall from './api.call';

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.innerText === 'Refresh' ? ApiCall.displayScores() : ApiCall.postData();
  });
});
