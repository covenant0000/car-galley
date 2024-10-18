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
       allCars = data.Cars

      // initially display all cars when the page loads//
      displayCars(allCars)
      //handles any error that occurs during the fetch process//
    }catch(error){
      //log error message in the console//
      console.error('Error fetch car data', error)
    }
}

//define a function to display//
const displayCars = (cars) =>{
  const carcontainer = document.getElementById('carContainer')
  
  carcontainer.innerHTML = '';
  cars.forEach(car => {
   // create a new div for each car card//
   const carCard = document.createElement('div')

   //Add a css class 'card to the '<div>' for styling purposes//
   carCard.classList.add('card')

   //Add HTML content to the car card, including an Image, name, and model of the car//
   carCard.innerHTML = ''
   
    
  });

}


