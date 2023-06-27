// Import the Vehicle class from the vehicle.js file
const VehicleModule = require("./vehicle").Vehicle;

// Define the Car class that extends the Vehicle class
class Car extends VehicleModule {
  // The constructor function is used to initialize properties
  constructor(make, model, year, color, mileage) {
    // Call the parent class constructor
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  // The checkService function determines if the car needs service
  checkService() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }

  // The start function starts the car if there's enough fuel
  start() {
    if (this.fuel > 0) {
      console.log("The engine has started.");
      return (this.started = true);
    } else {
      console.log("There's no fuel.");
      return (this.started = false);
    }
  }

  // The loadPassenger function loads passengers into the car
  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if (num + this.passenger <= this.maxPassengers) {
        this.passenger = num;
        return this.passenger;
      } else {
        console.log(
          this.model +
            " " +
            this.make +
            " doesn't have enough space to take all passengers."
        );
      }
    } else {
      console.log(this.model + " " + this.make + " is full");
    }
  }
}

// Create an instance of Car
let myCar = new Car("Mercury", "Sedan", "2002", "White", 50000);

// Use the start method
myCar.start();
// Use the loadPassenger method
myCar.loadPassenger(5);
// Use the stop method
myCar.stop();
// Use the checkService method
myCar.checkService();

// Log the Car instance
console.log(myCar);
