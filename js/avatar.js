const masc = document.querySelector('#masc');
const femi = document.querySelector('#femi');

masc.addEventListener('click', () => {
    window.location.href = 'name.html';

    sessionStorage.setItem('sexo', 'masculino' );
});

femi.addEventListener('click', () => {
    window.location.href = 'name.html';

    sessionStorage.setItem('sexo', 'feminino' );
});
