const SHOW_ERROR_TIME = 5000;
const KEY_ESCAPE = 27;
const bodyMain = document.querySelector('body');

const successMessage = () => {
  const template = document.querySelector('#success').content.cloneNode(true);
  bodyMain.appendChild(template);
  const messageSuccess = document.querySelector('.success');
  messageSuccess.addEventListener('click', () => {
    document.querySelector('.success').remove();
  });

  function onSuccessClose(evt) {
    if (evt.keyCode === KEY_ESCAPE) {
      document.querySelector('.success').remove();
      window.removeEventListener('keydown', onSuccessClose);
    }
  }

  window.addEventListener('keydown', onSuccessClose);
};

export {successMessage};
