function verPromocao() {
  const nome = document.getElementById('produto').value;
  const preco = parseFloat(document.getElementById('preco').value);

  if (!nome || isNaN(preco) || preco <= 0) {
    alert("Por favor, preencha corretamente os campos.");
    return;
  }

  const terceiroProduto = preco / 2;
  const totalPromocao = preco * 2 + terceiroProduto;

  document.getElementById('mensagem').innerHTML =
    `<p>${nome} - Promoção: Leve 3 por R$: ${totalPromocao.toFixed(2)}</p>
     <p>O 3º produto custa apenas R$: ${terceiroProduto.toFixed(2)}</p>`;
}