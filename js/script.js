const cepInput = document.getElementById("cep-input");
const searchButton = document.getElementById("search-button");
const street = document.getElementById("street");
const district = document.getElementById("district");
const city = document.getElementById("city");
const state = document.getElementById("state");

searchButton.addEventListener("click", searchCep);

async function searchCep() {
  const cep = cepInput.value;

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  console.log(url);

  const response = await fetch(url);

  const data = await response.json();

  if (data.erro) {
    alert("CEP não encontrado.");
    return;
  }

  street.textContent = data.logradouro;

  district.textContent = data.bairro;

  city.textContent = data.localidade;

  state.textContent = data.uf;
}
