// Função genérica para abrir links
function openLink(url) {
  window.open(url, "_blank");
}

// Mostrar ano automático no footer
document.getElementById("year").textContent = new Date().getFullYear();

