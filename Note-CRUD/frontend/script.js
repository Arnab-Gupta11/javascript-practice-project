const API_URL = "http://localhost:5000/notes";
const noteForm = document.getElementById("note-form");

noteForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description }),
  });
  noteForm.reset();
  loadNotes();
});
async function loadNotes() {
  console.log("loadNotes");
  const res = await fetch(API_URL);
  const notes = await res.json();

  const noteContainer = document.getElementById("notes-container");
  noteContainer.innerHTML = "";

  notes?.forEach((note) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
    <h3>${note.name}</h3>
    <p>${note.description}</p>
    <div class="btn-group">
        <button class="submit-btn" onclick="editNote('${note._id}')">Edit</button>
        <button class="submit-btn" onclick="deleteNote('${note._id}')">Delete</button>
    </div>
    `;
    noteContainer.appendChild(noteDiv);
  });
}

async function deleteNote(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  loadNotes();
}

async function editNote(id) {
  const newName = prompt("Edit Note Title: ", name);
  const newDoc = prompt("Edit Note Description: ", description);

  if (newName && newDoc) {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName, description: newDoc }),
    });
  }
  loadNotes();
}

loadNotes();
