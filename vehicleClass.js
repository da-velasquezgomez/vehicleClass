// Define the Vehicle class
class Vehicle {
  // The constructor function is used to initialize properties
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passenger = 0;
    this.speed = 0;
    this.mileage = mileage;
    this.started = false;
    this.numberOfWheels = 0;
    this.fuel = 100;
  }

  // The accelerate function increases speed and decreases fuel
  accelerate() {
    if (this.started) {
      if (this.fuel > 0) {
        console.log((this.speed += 1));
        this.fuel = this.fuel - 1;
      } else {
        console.log("We're out of fuel.");
        this.stop();
      }
    } else {
      console.log("You need to start the engine first.");
    }
  }

  // The decelerate function decreases speed and decreases fuel
  decelerate() {
    if (this.started) {
      if (this.fuel > 0) {
        if (this.speed > 0) {
          console.log((this.speed -= 1));
          this.fuel = this.fuel - 1;
        } else {
          console.log("We've stopped moving");
          this.fuel = this.fuel - 1;
        }
      } else {
        console.log("We're out of fuel.");
        this.stop();
      }
    } else {
      console.log("You need to start the engine first.");
    }
  }

  // The stop function turns off the engine
  stop() {
    console.log("The engine is off now.");
    this.started = false;
  }

  // The typeOfVehicle function determines the type of vehicle
  typeOfVehicle() {
    if (this.numberOfWheels == 8) {
      console.log(this.model + " " + this.make + " is a Truck");
    } else if (this.numberOfWheels == 4) {
      console.log(this.model + " " + this.make + " is a Car");
    } else if (this.numberOfWheels == 2) {
      console.log(this.model + " " + this.make + " is a Bike");
    } else {
      console.log("Unknown type of vehicle");
    }
  }
}

// This allows us to use the Vehicle class in other files
module.exports = { Vehicle };
