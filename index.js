//store all cars globally for filtering//
let allCars = []

//define an assynchronous function to get our car data from our json file//
const fetchCarData = async () =>{
    try{
     //fetch the json file container// 
     const response = await fetch ('cars.json')
    // parse the response into a javascript object//
        const data = await response.json()

       // store the array of cars in the global variable 'allcars' for future filtering//
       allCars = data.cars

      // initially display all cars when the page loads//
      displayCars(allCars)
      generateFilterButtons(allCars)
      //handles any error that occurs during the fetch process//
    }catch(error){
      //log error message in the console//
      console.error('Error fetch car data', error)
    }
}

//define a function to display//
const displayCars = (cars) =>{
  const carContainer = document.getElementById('carContainer')
  
  carContainer.innerHTML = '';
  if(cars.length === 0){
    carContainer.innerHTML = "<p>No data found</>"
    return;
  }
  cars.forEach((car) => {
   // create a new div for each car card//
   const carCard = document.createElement('div')

   //Add a css class 'card to the '<div>' for styling purposes//
   carCard.classList.add('card')

   //Add HTML content to the car card, including an Image, name, and model of the car//
   carCard.innerHTML = `
<img src = "${car.image}" alt = ${car.name} ${car.model}" width= "300">
<h2>${car.name}</h2>
<p>Model: ${car.model}</p>
   `
   //add a click event to store car data in local storage to navigate to details//
   carCard.addEventListener('click', () =>{
    localStorage.setItem('selectedCar', JSON.stringify(car));
    window.location.href =  'car-details.html'
   })
   carContainer.appendChild(carCard)
   

    
  })

}
//Define a function to dynamically create filter buttons//
const generateFilterButtons = (cars) => {
  //get the html Element where the filter button will be placed//
  const filterButtonsContainer = document.getElementById('filterButtons')

  // use map to Set( ) to an array of all car names
  const uniqueNames = [...new Set(cars.map((car) =>car.name))];
  //Use set to remove duplicates and filter buttons will be placed
  uniqueNames.forEach((name) => {
    const button = document.createElement('button')

   // set the text of the button to car name//
   button.textContent = name

   button.addEventListener('click', () => filterCarsByName(name))

   filterButtonsContainer.appendChild(button)
  }
)

}

const filterCarsByName =(name) =>{
  const filterredCars = allCars.filter((car) => car.name ===name)

  displayCars(filterredCars)
}


const searchCars = (query) =>{
  const searchedCars = allCars.filter((car) => {

    car.name.toLowerCase().includes(query.toLowerCase()) ||
    car.model.toLowerCase().includes(query.toLowerCase())
  })
  displayCars(searchedCars)
}


// fetch and display car data when the page loads
window.onload = fetchCarData