document.addEventListener("DOMContentLoaded", () => {
  const services = [
    {
      nome: "Seguro Residencial",
      categoria: ["Seguro", "Imóveis"],
      imagem: "../imgs/Rectangle 71.png",
      descricao: "10% de desconto",
      pontos: "10000",
    },
    {
      nome: "Seguro de Vida",
      categoria: ["Seguros"],
      imagem: "../imgs/Rectangle 71.png",
      descricao: "10% de desconto",
      pontos: "10000",
    },
    {
      nome: "Seguro Auto",
      categoria: ["Seguro", "Carro"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "7% de desconto",
      pontos: "4000",
    },
    {
      nome: "Seguro de Celular",
      categoria: ["Seguro"],
      imagem: "../imgs/Rectangle 71.png",
      descricao: "5% de desconto",
      pontos: "1000",
    },
    {
      nome: "Seguro de Viagem",
      categoria: ["Seguro", "Viagem"],
      imagem: "../imgs/Rectangle 71-2.png",
      descricao: "7% de desconto",
      pontos: "4000",
    },
    {
      nome: "Garantia Locatícia",
      categoria: ["Imóveis"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "3% CashBack",
      pontos: "15000",
    },
    {
      nome: "Financiamento de veículos",
      categoria: ["Financiamento", "Carro"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "5% CashBack",
      pontos: "15000",
    },
    {
      nome: "Empréstimo com Garantia de Veículo",
      categoria: ["Empréstimo", "Carro"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "3% CashBack",
      pontos: "15000",
    },
    {
      nome: "Empréstimo de Imóvel",
      categoria: ["Empréstimo", "Imóveis"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "3% CashBack",
      pontos: "15000",
    },
    {
      nome: "Empréstimo consignado privado",
      categoria: ["Empréstimo"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "3% CashBack",
      pontos: "15000",
    },
    {
      nome: "Financiamento de Imóvel",
      categoria: ["Financiamento", "Imóveis"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "5% CashBack",
      pontos: "15000",
    },
  ];

  const premiosList = document.getElementById("premiosList");
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.querySelectorAll(".category-btn");

  if (!premiosList) {
    console.error(
      "Elemento #premiosList não encontrado. Verifique o id no HTML."
    );
    return;
  }

  let activeCategory = null;

  function getFilteredServices() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    return services.filter((s) => {
      if (activeCategory) {
        const matchesCategory = s.categoria.some(
          (c) => c.toLowerCase() === activeCategory.toLowerCase()
        );
        if (!matchesCategory) return false;
      }
      if (!query) return true;
      return (
        s.nome.toLowerCase().includes(query) ||
        s.descricao.toLowerCase().includes(query)
      );
    });
  }

  function renderServices() {
    const filteredServices = getFilteredServices();
    premiosList.innerHTML = "";

    if (filteredServices.length === 0) {
      premiosList.innerHTML = `<p class="col-span-2 font-poppins text-center text-light-text">Nenhum serviço encontrado.</p>`;
      return;
    }

    const grupos = filteredServices.reduce((acc, s) => {
      const pontos = Number(s.pontos);
      if (!acc[pontos]) acc[pontos] = [];
      acc[pontos].push(s);
      return acc;
    }, {});

    const pontosOrdenados = Object.keys(grupos)
      .map((k) => Number(k))
      .sort((a, b) => a - b);

    pontosOrdenados.forEach((pontos) => {
      const items = grupos[pontos];
      const groupWrap = document.createElement("div");
      groupWrap.className = "space-y-6";

      const header = document.createElement("div");
      header.className = "flex items-center gap-2";
      header.innerHTML = `
        <img src="../imgs/Group 112.png" alt="pts" class="w-5 h-5">
        <h4 class="font-semibold text-[16px]">${pontos.toLocaleString(
          "pt-BR"
        )} pts</h4>
      `;
      groupWrap.appendChild(header);

      const grid = document.createElement("div");
      grid.className = "grid grid-cols-2 gap-4";

      items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-xl overflow-hidden";
        card.innerHTML = `
          <img src="${item.imagem}" alt="${item.nome}" class="w-full aspect-[6/3] object-contain bg-white">
          <div class="bg-[#8ED800] p-4 text-left rounded-b-xl">
            <h4 class="text-sm font-semibold pb-1 text-white leading-tight overflow-hidden text-ellipsis whitespace-nowrap">${item.nome}</h4>
            <p class="text-xs font-semibold  text-text overflow-hidden text-ellipsis whitespace-nowrap">${item.descricao}</p>
          </div>
        `;
        grid.appendChild(card);
      });

      groupWrap.appendChild(grid);
      premiosList.appendChild(groupWrap);
    });
  }

  renderServices();

  if (searchInput) {
    searchInput.addEventListener("input", renderServices);
  }

  categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    if (activeCategory === category) {
      activeCategory = null;
      button.classList.remove("bg-[#8ED800]", "text-white");
      button.classList.add("bg-white", "text-black"); // volta pro padrão
      renderServices(services);
    } else {
      activeCategory = category;
      categoryButtons.forEach((btn) => {
        btn.classList.remove("bg-[#8ED800]", "text-white");
        btn.classList.add("bg-white", "text-black"); // volta padrão
      });
      button.classList.add("bg-[#8ED800]", "text-white");
      button.classList.remove("bg-white", "text-black");

      const filtered = services.filter((service) =>
        service.categoria.some((cat) => cat === category)
      );
      renderServices(filtered);
    }
  });
});


  window.addEventListener("load", () => {
    setTimeout(renderServices, 100);
  });
});
