const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const campoA = Number(document.getElementById("campoA").value);
  const campoB = Number(document.getElementById("campoB").value);

  if (campoB > campoA) {
    mensagem.textContent = " Sucesso! O número B é maior que o número A.";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = " Erro: o número B deve ser maior que o número A.";
    mensagem.style.color = "red";
  }
});
