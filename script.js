const inputResumo = document.getElementById('inputResumo');
const btnAdicionar = document.getElementById('btnAdicionar');
const resumosDiv = document.getElementById('resumos');
let contadorLinhas = 0;

btnAdicionar.addEventListener('click', () => {
    const textoResumo = inputResumo.value.trim();

    if (textoResumo) {
        const paragrafo = document.createElement('p');
        paragrafo.textContent = textoResumo;
        resumosDiv.appendChild(paragrafo);

        contadorLinhas++;
        alert(`${contadorLinhas} linha(s) foram adicionadas.`);

        inputResumo.value = '';
        inputResumo.focus();
    } 
    else {
        alert('Por favor, insira um resumo antes de adicionar.');
    }
});