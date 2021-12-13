const modalForm = document.getElementById('modal-formFeedBack');
const BtnClose = document.getElementById('btnModalFormClose');
const btnCost = document.querySelectorAll('.btn-cost');
for(let i = 0; i < btnCost.length; i++){
  btnCost[i].addEventListener('click', showPopup);
}

BtnClose.addEventListener('click', closePopup);

function showPopup(){
  modalForm.style.display = "flex";
  modalForm.style.justifyContent = "center";
}

function closePopup(){
  modalForm.style.display = "none";
}
