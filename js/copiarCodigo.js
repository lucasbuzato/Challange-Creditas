document.addEventListener("DOMContentLoaded", () => {
  const homeURL = "../index.html";

  const btnPix = document.getElementById("btnCopiarPix");
  if (btnPix) {
    const codigoPix = "421543215321532143211234567423425321634321";

    btnPix.addEventListener("click", () => {
      navigator.clipboard.writeText(codigoPix).then(() => {
        mostrarAlerta("Código Copiado Pix com sucesso");

        setTimeout(() => {
          window.location.href = homeURL;
        }, 3000);
      });
    });
  }

  const btnBoleto = document.getElementById("btnCopiarBoleto");
  if (btnBoleto) {
    const codigoBoleto = "34191234123412341234123412341234123412341234";

    btnBoleto.addEventListener("click", () => {
      navigator.clipboard.writeText(codigoBoleto).then(() => {
        mostrarAlerta("Código Copiado com sucesso");

        setTimeout(() => {
          window.location.href = homeURL;
        }, 3000);
      });
    });
  }

  const btnMaster = document.getElementById("btnConfirmarMastercard");
  if (btnMaster) {
    btnMaster.addEventListener("click", () => {
      mostrarAlerta("Processando pagamento...");

      setTimeout(() => {
        removerAlerta();
        mostrarAlerta("Pagamento aprovado com sucesso!");

        setTimeout(() => {
          window.location.href = homeURL;
        }, 2000);
      }, 2000);
    });
  }
});

function mostrarAlerta(mensagem) {
  const alerta = document.createElement("div");
  alerta.className = "toast-alerta";
  alerta.textContent = mensagem;
  document.body.appendChild(alerta);

  setTimeout(() => alerta.classList.add("mostrar"), 100);

  setTimeout(() => {
    alerta.classList.remove("mostrar");
    setTimeout(() => alerta.remove(), 300);
  }, 2500);
}

function removerAlerta() {
  const alerta = document.querySelector(".toast-alerta");
  if (alerta) alerta.remove();
}
