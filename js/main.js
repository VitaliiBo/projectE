
const serviceLinks = document.querySelectorAll(".service a");
// Переключение вкладок
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
    }
    console.log(this.closest('.service').classList.contains('active'));
    
}
serviceLinks.forEach( item => item.addEventListener('click', toggleService));

const popupModal = document.querySelector('.popup-modal-wrapper');
const popupButton = document.querySelector('.popup-button');
// Вызов POPUP окна
function togglePopup(e) {
    // e.preventDefault();
    if(popupModal.classList.contains('popup-active')){
        if(e.toElement === popupModal){
            popupModal.classList.toggle('popup-active');  
        }
    } else {
        popupModal.classList.toggle('popup-active');  
    }
}
popupButton.addEventListener('click' , togglePopup);
popupModal.addEventListener('click' , togglePopup);


