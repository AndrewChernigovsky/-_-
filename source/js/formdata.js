import {sendData} from './server';

const formData = document.querySelector('#modal-formFeedBack');

formData.addEventListener('submit', (evt) => {
  const formDataTemplate = new FormData(evt.target);
  evt.preventDefault();

  sendData(formDataTemplate);
});
