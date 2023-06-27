// Import the Vehicle class from the vehicle.js file
const VehicleModule = require('./vehicle').Vehicle;

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
            this.scheduleService = true
        }
    }
}
