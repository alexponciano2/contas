function subtrair() {
  const salario = document.getElementById("salario").value;
  const cartao = document.getElementById("cartao").value;

  const resultado = salario - cartao;

  document.getElementById("resultado").value = resultado;
}