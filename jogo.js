var jogada = 0;

function jogar(itemClicado) {
    if (itemClicado.textContent.length > 0) {
        alert('Não pode');
    } else {
        itemClicado.appendChild(criaTexto(jogadorVez()));
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
    const linhaVencedora = Array.from(linhas).find((linha) => {
        const colunas = linha.children;
        const xVencedor = verificarLinhaCompleta('X', colunas);
        const oVencedor = verificarLinhaCompleta('O', colunas);
        return xVencedor || oVencedor;
    });

    if (linhaVencedora) {
        const jogadorVencedor = linhaVencedora.children[0].textContent
        return jogadorVencedor;
    }

    return '-';

}


function verificarLinhaCompleta(nomeJogador, colunas) {
    return Array.from(colunas).every(coluna => coluna.textContent === nomeJogador);
}
