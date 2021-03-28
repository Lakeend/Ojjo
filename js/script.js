'use strict';
const menuBtn = document.querySelector('.icon-menu'),
      menuContent = document.querySelector('.menu-body');
menuBtn.addEventListener('click', function () {
    this.classList.toggle('active')
    menuContent.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})
function closeModal() {
    menuBtn.classList.remove('active')
    menuContent.classList.remove('active');
    document.body.classList.remove('no-scroll');
}
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && menuContent.classList.contains('active')) { 
        closeModal();
    }
});
document.addEventListener('click', (e) => {
   if(e.target !== menuContent || e.target !== menuBtn || e.target !== menuContent.children || e.target !== menuBtn,children) {
    closeModal();
   }
});