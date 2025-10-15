document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".metodo");
  const confirmarBtn = document.getElementById("confirmarBtn");
  let metodoSelecionado = null;
  let linkDestino = null;

  // Reset inicial
  botoes.forEach((b) => {
    b.style.borderColor = "transparent";
  });

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const nomeMetodo = botao.querySelector("p.font-semibold")?.textContent.trim();

      // Clica novamente no mesmo botão → desmarca
      if (metodoSelecionado === nomeMetodo) {
        botao.style.borderColor = "transparent";
        metodoSelecionado = null;
        linkDestino = null;

        // Desativa o botão confirmar
        confirmarBtn.classList.remove("bg-green", "text-white", "cursor-pointer");
        confirmarBtn.classList.add("bg-gray", "text-text");
        return;
      }

      // Desmarca os outros
      botoes.forEach((b) => {
        b.style.borderColor = "transparent";
      });

      // Marca o atual
      botao.style.borderColor = "#8EDB00";
      metodoSelecionado = nomeMetodo;

      // Define o destino com base no método
      switch (nomeMetodo.toLowerCase()) {
        case "pix":
          linkDestino = "../Pages/confirmarPagamentoPix.html";
          break;
        case "boleto bancário":
          linkDestino = "../Pages/confirmarPagamentoBoleto.html";
          break;
        case "mastercard":
          linkDestino = "../Pages/confirmarPagamentoMastercard.html";
          break;
        default:
          linkDestino = null;
      }

      // Ativa o botão confirmar
      confirmarBtn.classList.remove("bg-gray", "text-text");
      confirmarBtn.classList.add("bg-green", "text-white", "cursor-pointer");
    });
  });

  confirmarBtn.addEventListener("click", () => {
    if (linkDestino) {
      window.location.href = linkDestino;
    }
  });
});

