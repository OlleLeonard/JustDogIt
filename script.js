document.getElementById("kontaktform").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Tack! Vi har mottagit ditt meddelande.");
});

function toggleText() {
  const text = document.getElementById("extraText");
  text.style.display = text.style.display === "none" ? "block" : "none";
}
