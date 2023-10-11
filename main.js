const drones = [];
let visibleDrones = drones;

function createModal(droneIndex) {
    const existingModal = document.querySelector(".modal-content");
    if (existingModal) {
        existingModal.remove();
    }

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const nameLabel = document.createElement("label");
    nameLabel.innerText = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";

    const priceLabel = document.createElement("label");
    priceLabel.innerText = "Price:";
    const priceInput = document.createElement("input");
    priceInput.type = "number";

    const distanceLabel = document.createElement("label");
    distanceLabel.innerText = "Max fly distance:";
    const distanceInput = document.createElement("input");
    distanceInput.type = "number";

    const typeLabel = document.createElement("label");
    typeLabel.innerText = "Type drone:";
    const typeInput = document.createElement("input");
    typeInput.type = "text";

    const cancelButton = document.createElement("button");
    cancelButton.id = "button_cancel";
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", () => {
    closeModal();});

    const saveButton = document.createElement("button");
    saveButton.id = "button_save";
    saveButton.innerText = "Save";

    if (typeof droneIndex === "number") {
        const drone = drones[droneIndex];
        nameInput.value = drone.name;
        priceInput.value = drone.price;
        distanceInput.value = drone.distance;
        typeInput.value = drone.type;
    
        saveButton.addEventListener("click", () => {
            const newName = nameInput.value;
            const newPrice = parseFloat(priceInput.value);
            const newDistance = parseFloat(distanceInput.value);
            const newType = typeInput.value;
    
            if (newName === "" || isNaN(newPrice) || newPrice < 0 || isNaN(newDistance) || newDistance < 0 || newType === "") {
                alert("Please fill in all fields and make sure that price and distance are positive number.");
                return;
            }
    
            drone.name = newName;
            drone.price = newPrice;
            drone.distance = newDistance;
            drone.type = newType;
    
            renderDrones();
            closeModal();
        });
    } else {
        saveButton.addEventListener("click", () => {
            const newName = nameInput.value;
            const newPrice = parseFloat(priceInput.value);
            const newDistance = parseFloat(distanceInput.value);
            const newType = typeInput.value;
    
            if (newName === "" || isNaN(newPrice) || newPrice < 0 || isNaN(newDistance) || newDistance < 0 || newType === "") {
                alert("Please fill in all fields and make sure that price and distance are positive number.");
                return;
            }
    
            const newDrone = {
                name: newName,
                price: newPrice,
                distance: newDistance,
                type: newType,
            };
            drones.push(newDrone);
            renderDrones();
            closeModal();
        });
    }    

    modalContent.appendChild(nameLabel);
    modalContent.appendChild(nameInput);
    modalContent.appendChild(priceLabel);
    modalContent.appendChild(priceInput);
    modalContent.appendChild(distanceLabel);
    modalContent.appendChild(distanceInput);
    modalContent.appendChild(typeLabel);
    modalContent.appendChild(typeInput);
    modalContent.appendChild(saveButton);
    modalContent.appendChild(cancelButton);

    document.getElementById("modal").appendChild(modalContent);
    document.querySelector(".modal").style.display = "block";
}

function closeModal() {
    document.querySelector(".modal").style.display = "none";
}

function searchByName() {
    const searchInput = prompt("Type name drone for search:");
    visibleDrones = drones.filter((drone) =>
        drone.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    renderDrones(visibleDrones); 
}

function sortByFlyDistance() {
    visibleDrones.sort((a, b) => a.distance - b.distance);
    renderDrones(visibleDrones); 
}

function restoreDrones() {
    renderDrones();
}

function deleteDrone(index) {
    drones.splice(index, 1);
    renderDrones();
}

function renderDrones(droneArray = drones) {
    const droneList = document.getElementById("droneList");
    droneList.innerHTML = "";

    let totalPrice = 0;

    droneArray.forEach((drone, index) => {
        const droneItem = document.createElement("div");
        droneItem.classList.add("drone-item");

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.id = "button_save";
        editButton.addEventListener("click", () => createModal(index));

        const deleteButton = document.createElement("button");
        deleteButton.id = "button_delete";
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => deleteDrone(index));

        droneItem.innerHTML = `
            <h2>${drone.name}</h2>
            <p>Price: ${drone.price.toFixed(2)} $</p>
            <p>Max fly distance: ${drone.distance} meters</p>
            <p>Type drone: ${drone.type}</p>
            `;

        droneItem.appendChild(editButton);
        droneItem.appendChild(deleteButton);
        droneList.appendChild(droneItem);
        totalPrice += drone.price;
    });
}

function getVisibleDrones() {
    const visibleDrones = [];
    const droneItems = document.querySelectorAll(".drone-item");
    
    droneItems.forEach((droneItem, index) => {
        if (droneItem.style.display !== "none") {
            visibleDrones.push(drones[index]);
        }
    });
    
    return visibleDrones;
}

function calculateTotalPrice(droneArray) {
    return droneArray.reduce((total, drone) => total + drone.price, 0);
}

document.getElementById("createBtn").addEventListener("click", () => createModal());
document.getElementById("searchBtn").addEventListener("click", searchByName);
document.getElementById("totalPriceBtn").addEventListener("click", () => {
    const totalPrice = calculateTotalPrice(visibleDrones); 
    alert(`Total price all visible drones: ${totalPrice.toFixed(2)} $`);
});
document.getElementById("sortBtn").addEventListener("click", sortByFlyDistance);
document.getElementById("restoreBtn").addEventListener("click", () => {
    visibleDrones = drones; 
    renderDrones(); 
});
