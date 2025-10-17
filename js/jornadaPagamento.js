document.addEventListener("DOMContentLoaded", () => {
  const btnProgresso = document.getElementById("btnProgresso");
  const btnMissoes = document.getElementById("btnMissoes");
  const progressoSection = document.getElementById("progressoSection");
  const missoesSection = document.getElementById("missoesSection");

  btnProgresso.classList.add("bg-[#8ED800]");

  btnProgresso.addEventListener("click", () => {
    progressoSection.classList.remove("hidden");
    missoesSection.classList.add("hidden");
    btnProgresso.classList.add("bg-[#8ED800]");
    btnMissoes.classList.remove("bg-[#8ED800]");
  });

  btnMissoes.addEventListener("click", () => {
    progressoSection.classList.add("hidden");
    missoesSection.classList.remove("hidden");
    btnMissoes.classList.add("bg-[#8ED800]");
    btnProgresso.classList.remove("bg-[#8ED800]");
  });
});
