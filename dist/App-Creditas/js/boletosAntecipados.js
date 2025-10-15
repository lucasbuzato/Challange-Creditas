document.addEventListener("DOMContentLoaded", () => {
  const boletosPendentes = [
    { mes: "Mar", valor: 550, data: "15/03/2023", num: 3 },
    { mes: "Abr", valor: 550, data: "15/04/2023", num: 4 },
    { mes: "Mai", valor: 550, data: "15/05/2023", num: 5 },
    { mes: "Jun", valor: 550, data: "15/06/2023", num: 6 },
    { mes: "Jul", valor: 550, data: "15/07/2023", num: 7 },
  ];

  const listaBoletos = document.getElementById("listaBoletos");
  const btnConfirmar = document.getElementById("btnConfirmar");

  function renderBoletos(lista) {
    listaBoletos.innerHTML = "";

    lista.forEach((b, i) => {
      const titulo = document.createElement("h3");
      titulo.textContent = `${b.num}° Parcela`;
      titulo.className = "font-semibold text-xl text-text mb-2 px-1";
      listaBoletos.appendChild(titulo);

      const card = document.createElement("div");
      card.className =
        "flex justify-between items-center w-full bg-white rounded-xl p-4";

      const divEsq = document.createElement("div");
      divEsq.className = "flex items-center gap-3";
      divEsq.innerHTML = `
        <div class="bg-green w-[63px] h-[51px] flex justify-center items-center text-white font-semibold text-lg rounded-xl">
          ${b.mes}
        </div>
        <div class="flex flex-col">
          <p class="font-semibold text-[16px] text-text">R$ ${b.valor},00</p>
          <p class="text-xs text-light-text">${b.data}</p>
        </div>
      `;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.dataset.parcela = b.num;
      checkbox.className = "w-6 h-6";

      card.appendChild(divEsq);
      card.appendChild(checkbox);
      listaBoletos.appendChild(card);

      if (i < lista.length - 1) {
        const linha = document.createElement("div");
        linha.className = "w-full h-[2px] bg-gray my-3";
        listaBoletos.appendChild(linha);
      }
    });
  }

  renderBoletos(boletosPendentes);

  function atualizarBotao() {
    const selecionados = document.querySelectorAll(
      "#listaBoletos input[type='checkbox']:checked"
    );
    if (selecionados.length > 0) {
      btnConfirmar.disabled = false;
      btnConfirmar.classList.add("bg-green");
    } else {
      btnConfirmar.disabled = true;
      btnConfirmar.classList.remove("bg-green");
    }
  }

  listaBoletos.addEventListener("change", atualizarBotao);

  btnConfirmar.addEventListener("click", () => {
    const selecionados = Array.from(
      document.querySelectorAll("#listaBoletos input[type='checkbox']:checked")
    ).map((c) => c.dataset.parcela);

    localStorage.setItem("parcelasSelecionadas", JSON.stringify(selecionados));
    localStorage.setItem("todosBoletos", JSON.stringify(boletosPendentes));

    window.location.href = "../Pages/avisoAntecipacao.html";
  });
});
