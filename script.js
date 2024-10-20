const openModalbtnElement = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const modelContentElement = modalElement.querySelector('.modal__content');

openModalbtnElement.addEventListener('click', () => {
    modalElement.classList.add('open');
})

modelContentElement.addEventListener('click', () => {
    modalElement.classList.remove('open');
})