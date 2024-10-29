//Get the selected car from localStorage//
const selectedCar = JSON.parse(localStorage.getItem('selectedCar'))

const carDetailsContainer = document.getElementById('carDetails')

carDetailsContainer.innerHTML = `
<img src="${selectedCar.image}" alt="${selectedCar.name}" class="car-image">
<div class = "car-info">
<h1>${selectedCar.name}</h1>
<h3>${selectedCar.model}</h3>
`
