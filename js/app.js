let total;
limpar();

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let split = produtoSelecionado.split(' - R$');
    let produtoNome = split[0];
    let produtoValorUnitario = split[1];
    let quantidadeSelecionada = document.getElementById('quantidade').value;
    let preco = quantidadeSelecionada * produtoValorUnitario;
    if (quantidadeSelecionada == '') {
        alert('Selecionar quantidade desejada do produto.');
    }
    
    let sessaoProdutos = document.getElementById('lista-produtos');
    sessaoProdutos.innerHTML = sessaoProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeSelecionada}x</span> ${produtoNome} <span class="texto-azul">R$${preco}</span>
    </section>`;
    
    total = total + preco;
    valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `R$ ${total}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$ ${0}`;
}