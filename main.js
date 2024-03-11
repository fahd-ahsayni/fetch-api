import "./style.css";

const body = document.querySelector("body");

async function fetchApi() {
  const res = await fetch("http://localhost:3838");
  const data = await res.json();

  data.map((user) => {
    const card = document.createElement("div");

    card.classList.add("card");

    // <div class="card"></div>

    card.innerHTML = `
      <h1>name: ${user.name}</h1>
      <h2>id : ${user.id}</h2>
      <h2>age : ${user.age}</h2>
      <button class="btn-delete">X</button>
    `;

    const myBtn = card.querySelector(".btn-delete");

    myBtn.addEventListener("click", async () => {
      await fetch(`http://localhost:3838/${user.id}`, { method: "delete" });

      card.remove();
    });

    body.appendChild(card);
  });
}

fetchApi();
