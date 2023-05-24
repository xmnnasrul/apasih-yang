function scrollToMenu() {
  document.querySelector(".menu").scrollIntoView({ behavior: "smooth" });
}

function showOrderForm() {
  document.getElementById("order-form-modal").style.display = "block";
}

function closeOrderForm() {
  document.getElementById("order-form-modal").style.display = "none";
}

function submitOrder() {
  // Mengirim data pemesanan
  alert("Terima kasih telah memesan!");
}
