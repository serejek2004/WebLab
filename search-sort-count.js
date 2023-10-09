let drones = document.querySelectorAll(".drone")

let array_drones = [];

drones.forEach(function(drone) {
    array_drones.push(drone);
})



searchButton.addEventListener("click", function () {

  const findDrone = document.getElementById("search__title").value.toLowerCase();

  drones.forEach(function (drone) {
      let name = drone.querySelector("#title").textContent.toLowerCase();
      if (name.includes(findDrone)) {
          console.log(name);
          drone.style.display = "block";
      } else {
          drone.style.display = "none";
      }

  });

});

function restore(){

    drones.forEach(function (drone) {
    drone.style.display = "block"
  })

}

function TotalByPrice() {

    let totalPrice = 0;

    drones.forEach( function(drone) {
        if (drone.style.display != "none") {
            totalPrice += parseFloat(drone.querySelector("#price").textContent);
        }
    });

    console.log(totalPrice);
    const totalPriceElement = document.getElementById("total__price");
    totalPriceElement.textContent = `Total Price: ${totalPrice}`;

  }

function SortDrones() {

    const sortedDrones = Array.from(drones).sort((a, b) => {
        const flyDistanceA = parseFloat(a.querySelector("#flyDistance").textContent);
        const flyDistanceB = parseFloat(b.querySelector("#flyDistance").textContent);
        return flyDistanceB - flyDistanceA;
    });

    const dronesContainer = document.getElementById("content_id");

    dronesContainer.style.display = "flex";
    dronesContainer.style.justifyContent = "center";
    dronesContainer.style.margin = "30px";


    dronesContainer.innerHTML = "";

    sortedDrones.forEach(function (drone) {
        dronesContainer.appendChild(drone);
    });

}
