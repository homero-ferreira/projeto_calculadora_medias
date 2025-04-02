const form = document.getElementById('form-atividade'); //Criar variável para manipular form
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';


const atividades = [];
const notas = [];

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'; //média final
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima"));


let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault(); //Função para anular o carregamento da páginaao clicar no botão submit
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});


function adicionaLinha() {

    const inputNomeAtividade = document.getElementById('nome-atividade'); //Carregar a constante de cada input
    const inputNotaAtividade = document.getElementById('nota-atividade');


    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`);3
    }else{

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = "<tr>"
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;
    linhas += linha;

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody'); //Recuperar o elemento para inserir HTML
    corpoTabela.innerHTML = linhas; //Inserir HTML

}

function atualizaMediaFinal() { //média final

    const mediaFinal = calculaMediaFinal();

   document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){     //média final
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}