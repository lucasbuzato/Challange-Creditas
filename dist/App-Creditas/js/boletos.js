document.addEventListener("DOMContentLoaded", () => {
  const boletosPendentes = [
    { mes: "Mar", valor: 550, data: "15/03/2023", num: 3 },
    { mes: "Abr", valor: 550, data: "15/04/2023", num: 4 },
    { mes: "Mai", valor: 550, data: "15/05/2023", num: 5 },
    { mes: "Jun", valor: 550, data: "15/06/2023", num: 6 },
    { mes: "Jul", valor: 550, data: "15/07/2023", num: 7 },
  ];

  const boletosPagos = [
    { mes: "Jan", valor: 550, data: "15/01/2023", num: 1 },
    { mes: "Fev", valor: 550, data: "15/02/2023", num: 2 },
  ];

  const listaBoletos = document.getElementById("listaBoletos");
  const tabPendentes = document.getElementById("tabPendentes");
  const tabPagos = document.getElementById("tabPagos");

  function renderBoletos(lista, pagos = false) {
    listaBoletos.innerHTML = "";

    lista.forEach((b, i) => {
      const titulo = document.createElement("h3");
      titulo.textContent = `${b.num}° Parcela`;
      titulo.className = "font-semibold text-xl text-text mb-2 px-1";
      listaBoletos.appendChild(titulo);

      const div = document.createElement("div");

      if (pagos) {
        div.className =
          "flex justify-between items-center w-full bg-green rounded-xl p-4";
      } else {
        div.className =
          "flex justify-between items-center w-full bg-white rounded-xl p-4";
      }

      const divEsq = document.createElement("div");
      divEsq.className = "flex items-center gap-3";

      let divMes;
      if (pagos) {
        divMes = `<div class="bg-white w-[63px] h-[51px] flex justify-center items-center text-text font-semibold text-lg rounded-xl">${b.mes}</div>`;
      } else {
        divMes = `<div class="bg-green w-[63px] h-[51px] flex justify-center items-center text-white font-semibold text-lg rounded-xl">${b.mes}</div>`;
      }

      divEsq.innerHTML = `
        ${divMes}
        <div class="flex flex-col">
          <p class="font-semibold text-[16px] ${
            pagos ? "text-white" : "text-text"
          }">R$ ${b.valor},00</p>
          <p class="text-xs ${pagos ? "text-white" : "text-light-text"}">
            ${pagos || i === 0 ? b.data : `Boleto disponível em ${b.data}`}
          </p>
        </div>
      `;

      let conteudoDireita = "";
      if (pagos) {
        conteudoDireita = `<button disabled class="bg-text-gray text-white w-[104px] h-[38px] rounded-lg text-sm font-semibold">Boleto Pago</button>`;
      } else if (i === 0) {
        conteudoDireita = `<button class="bg-green text-white w-[104px] h-[38px] rounded-lg text-sm">Pagar Boleto</button>`;
      } else {
        conteudoDireita = "";
      }

      div.appendChild(divEsq);
      if (conteudoDireita) div.innerHTML += conteudoDireita;

      listaBoletos.appendChild(div);

      if (i < lista.length - 1) {
        const linha = document.createElement("div");
        linha.className = "w-full h-[2px] bg-gray my-3";
        listaBoletos.appendChild(linha);
      }
    });
  }

  function mostrarPendentes() {
    tabPendentes.classList.add("bg-green", "text-white");
    tabPagos.classList.remove("bg-green", "text-white");
    tabPagos.classList.add("text-text-gray");
    renderBoletos(boletosPendentes);
  }

  function mostrarPagos() {
    tabPagos.classList.add("bg-green", "text-white");
    tabPendentes.classList.remove("bg-green", "text-white");
    tabPendentes.classList.add("text-text-gray");
    renderBoletos(boletosPagos, true);
  }

  tabPendentes.addEventListener("click", mostrarPendentes);
  tabPagos.addEventListener("click", mostrarPagos);

  mostrarPendentes();
});
