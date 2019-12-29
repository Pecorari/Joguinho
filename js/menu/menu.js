const divImg = document.querySelector('.containerImg');
const btnInicia = document.querySelector('#inicia');
const btnContinua = document.querySelector('#continua');

const nomeSave = sessionStorage.getItem('nome');
const nome = JSON.parse(nomeSave);
const h1 = document.querySelector('.h1').innerHTML = nome;

const sexo = sessionStorage.getItem('sexo');

function criaImg() {
    const img = document.createElement('img');
    img.width = 200;
    img.height = 200;
    if (sexo === 'masculino') {
        img.src = 'img/guerreiro.jpg';
    }else{
        img.src = 'img/guerreira.jpg';
    }
    divImg.appendChild(img);
    return img;
}
const image = criaImg();

function criaP() {
    const p = document.createElement('p');
    p.innerHTML = 'Escolha uma acao';
    divImg.appendChild(p);
    return p;
}
const paragrafo = criaP();


function criaPessoa(nome) {
    this.nome = nome;
}


criaPessoa.prototype.inicia = function() {
    if (sexo === 'masculino') {
        image.src = 'img/guerreiro.jpg';
    }else{
        image.src = 'img/guerreira.jpg';
    }

    paragrafo.innerHTML = `${this.nome} esta iniciando!`;
};
criaPessoa.prototype.continua = function() {
    if (sexo === 'masculino') {
        image.src = 'img/guerreiro.jpg';
    }else{
        image.src = 'img/guerreira.jpg';
    }

    paragrafo.innerHTML = `${this.nome} esta continuando!`;
};

const pessoa = new criaPessoa(nome);

btnInicia.addEventListener('click', () => {
    pessoa.inicia();
});
btnContinua.addEventListener('click', () => {
    pessoa.continua();
});

