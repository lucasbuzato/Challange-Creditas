document.addEventListener("DOMContentLoaded", () => {
  const services = [
    {
      nome: "Seguro Residencial",
      categoria: ["Seguro", "Imóveis"],
      imagem: "../imgs/Rectangle 71.png",
      descricao: "Minuto Seguros"
    },
    {
      nome: "Seguro de Vida",
      categoria: ["Seguros"],
      imagem: "../imgs/Rectangle 71.png",
      descricao: "Minuto Seguros"
    },
    {
      nome: "Seguro Auto",
      categoria: ["Seguro", "Carro"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "Creditas"
    },
    {
      nome: "Seguro de Celular",
      categoria: ["Seguro"],
      imagem: "../imgs/Rectangle 71.png",
      descricao: "Minuto Seguros"
    },
    {
      nome: "Seguro de Viagem",
      categoria: ["Seguro", "Viagem"],
      imagem: "../imgs/Rectangle 71-2.png",
      descricao: "Porto Seguro"
    },
    {
      nome: "Garantia Locatícia",
      categoria: ["Imóveis"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "Creditas"
    },
    {
      nome: "Financiamento de veículos",
      categoria: ["Financiamento", "Carro"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "Creditas"
    },
    {
      nome: "Empréstimo com Garantia de Veículo",
      categoria: ["Empréstimo", "Carro"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "Creditas"
    },
    {
      nome: "Empréstimo de Imóvel",
      categoria: ["Empréstimo", "Imóveis"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "Creditas"
    },
    {
      nome: "Empréstimo consignado privado",
      categoria: ["Empréstimo"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "Creditas"
    },
    {
      nome: "Financiamento de Imóvel",
      categoria: ["Financiamento", "Imóveis"],
      imagem: "../imgs/Rectangle 71-1.png",
      descricao: "Creditas"
    }
  ];

  const serviceList = document.getElementById("serviceList");
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.querySelectorAll(".category-btn");

  let activeCategory = null;

  // --- Renderização dos serviços ---
  function renderServices(filteredServices) {
    serviceList.innerHTML = "";

    if (filteredServices.length === 0) {
      serviceList.innerHTML = `<p class="col-span-2 font-poppins text-center text-light-text">Nenhum serviço encontrado.</p>`;
      return;
    }

    filteredServices.forEach(service => {
      const card = document.createElement("div");
      card.className = `
        bg-white rounded-xl overflow-hidden flex flex-col justify-between
      `;

      card.innerHTML = `
        <img src="${service.imagem}" alt="${service.nome}" 
          class="w-full aspect-[6/3] object-contain bg-white">
        <div class="bg-[#8ED800] p-4 text-left rounded-b-xl font-poppins">
          <h4 class=" text-sm font-semibold text-text leading-tight">${service.nome}</h4>
          <p class="text-xs font-semibold text-white">${service.descricao}</p>
        </div>
      `;

      serviceList.appendChild(card);
    });
  }

  renderServices(services);

  // --- Filtro por pesquisa ---
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = services.filter(service =>
      service.nome.toLowerCase().includes(query) ||
      service.descricao.toLowerCase().includes(query)
    );
    renderServices(filtered);
  });

  // --- Filtro por categoria (com toggle) ---
  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      if (activeCategory === category) {
        // desmarca
        activeCategory = null;
        button.classList.remove("bg-[#8ED800]", "text-white");
        renderServices(services);
      } else {
        // marca o botão atual e desmarca os outros
        activeCategory = category;
        categoryButtons.forEach(btn => btn.classList.remove("bg-[#8ED800]", "text-white"));
        button.classList.add("bg-[#8ED800]", "text-white");

        const filtered = services.filter(service =>
          service.categoria.some(cat => cat === category)
        );
        renderServices(filtered);
      }
    });
  });
});
