let selectedRating = null;
// Selecione todos os itens da lista
const rateItems = document.querySelectorAll(".numberRate li");

// Adicione um evento de clique a cada item
rateItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remova a classe 'active' de todos os itens
    rateItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Adicione a classe 'active' ao item clicado
    item.classList.add("active");

    // Armazene o valor selecionado
    selectedRating = item.getAttribute("data-value");
  });
});

// Selecione o botão de submit
const submitButton = document.querySelector(".submitButton");

// Selecione o elemento "ratingStart"
const ratingStart = document.querySelector(".ratingStart");

// Selecione o elemento "ratingStatus"
const ratingStatus = document.querySelector(".ratingStatus");

// Adicione um evento de clique ao botão de submit
submitButton.addEventListener("click", () => {
  // Remova a classe "active" do elemento "ratingStart"
  ratingStart.classList.remove("active");

  // Adicione a classe "active" ao elemento "ratingStatus"
  ratingStatus.classList.add("active");
  
  // Exiba o valor selecionado na tela de agradecimento
  const ratingText = document.querySelector(".rate-component");
  ratingText.textContent = `You selected ${selectedRating} out of 5`;
});
