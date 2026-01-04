/* =========================
   CORIZEN APP CONTROLLER
========================= */

/* ---------- PAGE LOAD ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // Notes page
  if (document.getElementById("notes-list")) {
    loadNotes();
  }

  // Cart page
  if (document.getElementById("cart-items")) {
    renderCart();
  }

  // Profile page
  if (document.getElementById("profile-box")) {
    loadProfile();
  }
});

/* ---------- NAVIGATION ---------- */
function goNotes() {
  localStorage.setItem("selectedSubject", "science");
  window.location.href = "notes.html";
}

/* ---------- LOAD NOTES ---------- */
function loadNotes() {
  const subjectId =
    localStorage.getItem("selectedSubject") || "science";

  const notes = NOTES[subjectId] || [];
  const list = document.getElementById("notes-list");
  list.innerHTML = "";

  notes.forEach(note => {
    const div = document.createElement("div");
    div.className = "note-item";

    div.innerHTML = `
      <strong>${note.title}</strong>
      <span>${note.type}</span>
    `;

    list.appendChild(div);
  });
}

/* ---------- LOAD PROFILE ---------- */
function loadProfile() {
  const box = document.getElementById("profile-box");

  box.innerHTML = `
    <h2>${USER.name}</h2>
    <p>${USER.class} • ${USER.board}</p>

    <button onclick="logout()">Logout</button>
  `;
}

/* ---------- LOGOUT ---------- */
function logout() {
  localStorage.clear();
  alert("Logged out");
  window.location.href = "index.html";
}
