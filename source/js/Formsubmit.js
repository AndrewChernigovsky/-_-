const btnSumbit = document.getElementById('dataFormFBbtn');
const formData = document.getElementById('formFeedBackData');
const tel = document.getElementById('dataFormFBphone');
const email = document.getElementById('dataFormFBemail');

formData.onsubmit = function(evt) {
  if (tel.value !== '[0-9]') {
    evt.preventDefault();
    function validateEmail(email) {
      var emailRegex = `/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/`;
        return emailRegex.test(email);

    function validatePhone(phone) {
      var phoneRegex = `/^(\+91-|\+91|0)?\d{10}$/`;
        return phoneRegex.test(phone);
    }

    function doValidate() {
      if (!validateEmail(document.appointment.requiredphone.value) || !validatePhone(document.appointment.requiredphone.value) ){
        alert("Invalid Email");
        return false;
   }
  }
};
