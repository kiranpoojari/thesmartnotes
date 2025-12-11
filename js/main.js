// Smart Notes basic JS functionality

const input = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const list = document.getElementById("notesList");

saveBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) {
    alert("Please type a note first!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${text} — ${new Date().toLocaleString()}`;

  list.prepend(li);
  input.value = "";
});
