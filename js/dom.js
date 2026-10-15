import { hotel } from './app.js';

// 1. Select DOM Elements (Sheet A)
const container = document.querySelector("#list");
const filterRow = document.querySelector("#filter");
const emptyMsg = document.querySelector("#empty-msg");
const form = document.querySelector("#contact-form");

// 2. Build Card for Single Room Item (Sheet B)
function buildCard(room) {
    const li = document.createElement("li");
    li.className = "card";
    li.textContent = `${room.name} - Rp ${room.price.toLocaleString("id-ID")}`;
    return li;
}

// 3. Render Function (Sheet B & D)
export function render(list) {
  container.textContent = ""; // Clear existing content to prevent duplication

    if (list.length === 0) {
    emptyMsg.hidden = false;
    return;
    }

    emptyMsg.hidden = true;
    list.forEach((room) => {
    container.append(buildCard(room));
    });
}

// Initial render call
render(hotel.roomTypes);

// 4. Event Delegation for Filter Buttons (Sheet C)
if (filterRow) {
    filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const category = button.dataset.category;

    const filteredRooms = hotel.roomTypes.filter(
        (room) => category === "all" || room.category === category
    );

    // Toggle active class
    document.querySelectorAll("#filter button").forEach((btn) => {
        btn.classList.toggle("active", btn === button);
    });

    render(filteredRooms);
    });
}

// 5. Form Submit Handling (Sheet D)
if (form) {
    form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    const nameInput = document.querySelector("#name");
    if (nameInput && nameInput.value.trim() === "") {
        nameInput.setAttribute("aria-invalid", "true");
        alert("Please fill out your name.");
    } else {
        alert("Room booking submitted!");
        form.reset();
    }
    });
}