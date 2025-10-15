const botoes = document.querySelectorAll("#botoes button");
const vencimentoAtual = document.getElementById("vencimento-atual");
const vencimentoNovo = document.getElementById("vencimento-novo");
const valorNovo = document.getElementById("valor-novo");
const botaoConfirmar = document.querySelector('button[type="submit"]');

let botaoAtivo = null;
const diaAtual = parseInt(vencimentoAtual.textContent);
const valores = { 1: 510, 5: 520, 10: 530, 15: 500, 20: 540, 25: 550, 30: 560 };

function atualizarBotaoConfirmar(ativo) {
  if (ativo) {
    botaoConfirmar.style.backgroundColor = "var(--color-green)";
    botaoConfirmar.style.color = "white";
    botaoConfirmar.style.cursor = "pointer";
    botaoConfirmar.disabled = false;
  } else {
    botaoConfirmar.style.backgroundColor = "var(--color-gray)";
    botaoConfirmar.style.color = "#666";
    botaoConfirmar.style.cursor = "not-allowed";
    botaoConfirmar.disabled = true;
  }
}

botoes.forEach((botao) => {
  const dia = parseInt(botao.textContent);

  botao.addEventListener("click", () => {
    if (botaoAtivo === botao) {
      botao.style.backgroundColor = "";
      botao.style.color = "";
      botaoAtivo = null;
      vencimentoNovo.textContent = "0";
      valorNovo.textContent = "R$0";
      atualizarBotaoConfirmar(false);
      return;
    }

    if (botaoAtivo) {
      botaoAtivo.style.backgroundColor = "";
      botaoAtivo.style.color = "";
    }

    if (dia === diaAtual) {
      botao.style.backgroundColor = "var(--color-gray)";
      botao.style.color = "#666";
      botaoAtivo = botao;
      vencimentoNovo.textContent = "0";
      valorNovo.textContent = "R$0";
      atualizarBotaoConfirmar(false);
    } else {
      botao.style.backgroundColor = "var(--color-green)";
      botao.style.color = "white";
      botaoAtivo = botao;
      vencimentoNovo.textContent = dia;
      valorNovo.textContent = `R$${valores[dia].toFixed(2).replace(".", ",")}`;
      atualizarBotaoConfirmar(true);
    }
  });
});

atualizarBotaoConfirmar(false);

botaoConfirmar.addEventListener("click", (e) => {
  e.preventDefault();
  if (!botaoConfirmar.disabled) {
    window.location.href = "avisoVencimento.html";
  }
});
