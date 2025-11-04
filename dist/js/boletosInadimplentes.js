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
      titulo.textContent = `${b.num}° Parcela${!pagos && i === 0 ? " - Atrasado" : ""}`;
      titulo.className = "font-semibold text-xl text-text mb-2 px-1";
      listaBoletos.appendChild(titulo);

      const div = document.createElement("div");

      if (pagos) {
        div.className =
          "flex justify-between items-center w-full bg-green rounded-xl p-4";
      } else {
        if (i === 0) {
          div.className =
            "flex justify-between items-center w-full bg-red rounded-xl p-4";
        } else {
          div.className =
            "flex justify-between items-center w-full bg-white rounded-xl p-4";
        }
      }

      const divEsq = document.createElement("div");
      divEsq.className = "flex items-center gap-3";

      let corMesBG = "bg-white";
      let corMesTxt = "text-text";

      if (!pagos && i !== 0) {
        corMesBG = "bg-green";
        corMesTxt = "text-white";
      }

      const divMes = `
        <div class="${corMesBG} w-[63px] h-[51px] flex justify-center items-center ${corMesTxt} font-semibold text-lg rounded-xl">
          ${b.mes}
        </div>`;

      divEsq.innerHTML = `
  ${divMes}
  <div class="flex flex-col">
    <p class="font-semibold text-[16px] ${!pagos && i === 0 ? "text-white" : "text-text"}">
      R$ ${b.valor},00
    </p>
    <p class="text-xs ${!pagos && i === 0 ? "text-white" : "text-text"}">
      ${
        pagos
          ? b.data
          : i === 0
          ? b.data
          : i === 1
          ? b.data
          : "Boleto disponível em " + b.data
      }
    </p>
  </div>
`;


      let conteudoDireita = "";

      if (pagos) {
        conteudoDireita = `<a disabled class="bg-text-gray flex justify-center items-center text-white w-[104px] h-[38px] rounded-lg text-sm font-semibold">Boleto Pago</a>`;
      } else if (i === 0) {
        conteudoDireita = `<a class="bg-white flex justify-center items-center text-text w-[154px] h-[38px] rounded-lg text-xs" href="../Pages/confirmarPagamento.html">Pagar Boleto Atrasado</a>`;
      } else if (i === 1) {
        conteudoDireita = `<a class="bg-green flex justify-center items-center text-white font-semibold w-[104px] h-[38px] rounded-lg text-xs" href="../Pages/confirmarPagamento.html">Pagar agora</a>`;
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
