let files = JSON.parse(localStorage.getItem("files")) || {};
let currentFile = null;

const fileList = document.getElementById("fileList");
const markdownInput = document.getElementById("markdownInput");
const preview = document.getElementById("preview");

function saveFiles() {
  localStorage.setItem("files", JSON.stringify(files));
}

function renderFiles() {
  fileList.innerHTML = "";
  Object.keys(files).forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    if (name === currentFile) li.classList.add("active");
    li.onclick = () => loadFile(name);
    fileList.appendChild(li);
  });
}

function loadFile(name) {
  currentFile = name;
  markdownInput.value = files[name];
  updatePreview();
  renderFiles();
}

function updatePreview() {
  preview.innerHTML = marked.parse(markdownInput.value);
}

document.getElementById("newFile").onclick = () => {
  const name = prompt("File name?");
  if (!name || files[name]) return;
  files[name] = "";
  saveFiles();
  renderFiles();
};

markdownInput.addEventListener("input", () => {
  if (!currentFile) return;
  files[currentFile] = markdownInput.value;
  saveFiles();
  updatePreview();
});

renderFiles();
