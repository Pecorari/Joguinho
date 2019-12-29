const user = document.querySelector('#user');
const entrar = document.querySelector('#entrar');
const erro = document.querySelector('.erro');

function criaP() {
    const p = document.createElement('p');
    return p;
}
const p = criaP();

entrar.addEventListener('click', () => {
    if (user.value == '') {
        p.classList.add('paragrafo-invalido');
        p.innerHTML = 'Digite um nome para entrar!';
        erro.appendChild(p);
    } else {
        window.location.href = 'menu.html';

        const usuario = JSON.stringify(user.value);
        sessionStorage.setItem('nome', usuario );
    }
});

function presionaEnter() {
    user.addEventListener('keyup', evento => {  
        if (evento.keyCode === 13) {
            if (user.value == '') {
                p.classList.add('paragrafo-invalido');
                p.innerHTML = 'Digite um nome para entrar!';
                erro.appendChild(p);
            } else {
                window.location.href = 'menu.html';
        
                const usuario = JSON.stringify(user.value);
                sessionStorage.setItem('nome', usuario );
            }
        }
    });
};
presionaEnter();