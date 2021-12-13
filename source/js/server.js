import {
  successMessage,
} from './reset-form';

const getUrl = 'https://23.javascript.pages.academy/keksobooking/data';
const onSuccess = (ads) => {
  formFilterSwitch(false);
};

const getData = () => {
  fetch(getUrl)
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      showAlertError('Произошла ошибка, попробуйте перезагрузить страницу.');
      formFilterSwitch(true);
    });
};

const sendUrl = 'https://23.javascript.pages.academy/keksobooking';

const sendData = (formData) => {
  fetch(sendUrl, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      successMessage();
    } else {
      errorMessage();
    }
  });
};

getData(onSuccess);

export {sendData};
