
    <h1></h1>
    <button id="meuOutroBotao">Clique aqui!</button>
    <p id="paragrafoExemplo"></p>

    <script>
        // Obter referências aos elementos
        const meuOutroBotao = document.getElementById('meuOutroBotao');
        const paragrafoExemplo = document.getElementById('paragrafoExemplo');

        // Adicionar um ouvinte de evento ao botão
        meuOutroBotao.addEventListener('click', function() {
            paragrafoExemplo.textContent = 'Seja forte e corajoso!';
            paragrafoExemplo.style.color = 'blue';
            paragrafoExemplo.style.fontWeight = 'bold';
        });
    </script>
