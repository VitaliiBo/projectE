
const serviceLinks = document.querySelectorAll(".service a");
// Переключение вкладок со сменой услуги в POPUP
function toggleService(e){
    e.preventDefault();
    if(this.closest('.service').classList.contains('active')) {
        return ;
    } else {
        document.querySelector('.service.active').classList.toggle('active');
        document.querySelector('.service-active').classList.toggle('service-active');
        this.closest('.service').classList.toggle('active');
        let selector = '#'+this.dataset.service;
        document.querySelector(selector).classList.toggle('service-active');
        
        //  Смена услуги в POPUP по вкладке
        $(`option[value=${this.dataset.service}]`)[0].selected = true;
        
    }    
}
serviceLinks.forEach( item => item.addEventListener('click', toggleService));

const popupModal = document.querySelector('.popup-modal-wrapper');
const popupButton = document.querySelector('.popup-button');
//=============================================================
// Вызов POPUP окна
function togglePopup(e) {
    if(e.toElement === $('.popup-close')[0]){
        e.preventDefault(); 
    }
    // e.preventDefault();
    if(popupModal.classList.contains('popup-active')){
        if(e.toElement === popupModal || e.toElement === $('.popup-close')[0]){
            popupModal.classList.toggle('popup-active');  
        }
    } else {
        popupModal.classList.toggle('popup-active');  
    }
}
if(popupButton != null){
    popupButton.addEventListener('click' , togglePopup);
}
if(popupModal != null){
    popupModal.addEventListener('click' , togglePopup);
}
//=============================================================
//Маска ввода номера в POPUP
$(document).ready(function(){
    if($('.form-box__phone-field')[0] != undefined) {
        $('.form-box__phone-field').inputmask({"mask": "+7(999) 999-9999"}); //specifying options
    }
});
//=============================================================
// Отправка формы POPUP в mail.php
const callbackForm = document.querySelector('#callback-form');
function handlePopupSubmit(e) {
    e.preventDefault();
    const formData = new FormData(callbackForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://element/php/mail.php');
    xhr.responseType = 'json';
    xhr.send( formData );
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status == 200){
            if (xhr.response === true) {
                document.querySelector('.form-box__send-button').innerHTML = 'отправлено';
                if (xhr.response === true) {
                    setTimeout(() => {
                        popupModal.classList.toggle('popup-active');
                        formReset();
                    }, 2000)
                }
            }
        } else if( xhr.readyState === 4 && xhr.status != 200 ){
            document.querySelector('.form-box__send-button').innerHTML = 'ошибка';
        }
    }
}
if (callbackForm != null) {
    callbackForm.addEventListener('submit', handlePopupSubmit );
}
function formReset() {
  $('#callback-form')[0].reset();
  $('.form-box__send-button')[0].innerHTML = 'Отправить';
}

//=============================================================
//Сэндвич
// const sandwichButton = document.querySelector('.sandwich');
// const sandwichList = document.querySelector('.navigation ul');

// function toggleSandwich(e) {
//     sandwichList.classList.toggle('sandwich-active');
// }
// sandwichButton.addEventListener('click' , toggleSandwich);
// $('.navigation ul li').on('click', toggleSandwich);

