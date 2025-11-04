const selecionadas =
  JSON.parse(localStorage.getItem("parcelasSelecionadas")) || [];
const todosBoletos = JSON.parse(localStorage.getItem("todosBoletos")) || [];

const boletosSelecionados = todosBoletos.filter((b) =>
  selecionadas.includes(b.num.toString())
);

const parcelasTexto =
  boletosSelecionados.length > 0
    ? boletosSelecionados[0].num +
      "° à " +
      boletosSelecionados[boletosSelecionados.length - 1].num +
      "°"
    : "--";

const valorTotal = boletosSelecionados.reduce((acc, b) => acc + b.valor, 0);

document.getElementById("parcelasSelecionadas").textContent = parcelasTexto;
document.getElementById("parcelasOriginais").textContent = `R$${valorTotal},00`;
document.getElementById("descontos").textContent = "R$0,00";
document.getElementById("valorTotal").textContent = `R$${valorTotal},00`;
