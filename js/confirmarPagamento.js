document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".metodo");
  const confirmarBtn = document.getElementById("confirmarBtn");
  let metodoSelecionado = null;
  let linkDestino = null;

  botoes.forEach((b) => {
    b.style.borderColor = "transparent";
  });

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const nomeMetodo = botao
        .querySelector("p.font-semibold")
        ?.textContent.trim();

      if (metodoSelecionado === nomeMetodo) {
        botao.style.borderColor = "transparent";
        metodoSelecionado = null;
        linkDestino = null;

        confirmarBtn.classList.remove(
          "bg-green",
          "text-white",
          "cursor-pointer"
        );
        confirmarBtn.classList.add("bg-gray", "text-text");
        return;
      }

      botoes.forEach((b) => {
        b.style.borderColor = "transparent";
      });

      botao.style.borderColor = "#8EDB00";
      metodoSelecionado = nomeMetodo;

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
