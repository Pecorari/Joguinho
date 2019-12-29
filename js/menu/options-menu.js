const modal = document.querySelector('.modal');
const btnOpcao = document.querySelector('#opcao');
const modalClose = document.querySelector('.modal_close');
const btnAplica = document.querySelector('#aplica');


btnOpcao.addEventListener('click', () => {
    modal.classList.toggle('modal_hidden');
});

modalClose.addEventListener('click', () => {
    modal.classList.toggle('modal_hidden');
});

btnAplica.addEventListener('click', () => {
    modal.classList.toggle('modal_hidden');
});
