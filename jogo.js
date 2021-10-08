var jogada = 0;

function jogar(event) {
    if (event.textContent.length > 0) {
        alert('Não pode');
    } else { 
        event.appendChild(criaTexto(jogadorVez()));
        jogada++;
        verificarVencedor();
    }
}


function criaTexto(texto) {
    return document.createTextNode(texto);
}

function jogadorVez() {
    return jogada % 2 === 0 ? 'X' : 'O';
}

function verificarVencedor() {
    const vencedor = verificarHorizontal();
    if (vencedor !== '-') {
        alert(`O jogador ${vencedor}`);
    }
}

function verificarHorizontal() {
    const linhas = document.getElementsByClassName('linha');
    const existeVencedor = Array.from(linhas).filter((linha) => {
        const xVencedor = Array.from(linha.children).every(linha => linha.textContent === 'X'); 
        const oVencedor = Array.from(linha.children).every(linha => linha.textContent === 'O');
        return xVencedor || oVencedor;
    });

    if (existeVencedor.length > 0) {
        return existeVencedor[0].children[0].textContent;
    }

    return '-';

}