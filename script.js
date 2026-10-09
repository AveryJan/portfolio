const form = document.getElementById("recommendation-form");
const popup = document.getElementById("popup");

function showPopup() {
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("person-name").value.trim();
  const recommendation = document.getElementById("recommendation-text").value.trim();

  if (!name || !recommendation) {
    return;
  }

  const list = document.getElementById("recommendations-list");
  const newItem = document.createElement("div");
  newItem.className = "recommendation-item";

  newItem.innerHTML = `
    <p>"${recommendation}"</p>
    <h4>- ${name}</h4>
  `;

  list.appendChild(newItem);

  form.reset();
  showPopup();
});
