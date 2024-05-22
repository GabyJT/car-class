// Gabriela Terrazas (U54107257)

class Car {
    // Constructor initializes make and speed properties
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Accelerating increases speed by 10 km/h
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    // Braking decreases speed by 5 km/h
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

// Test Data
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Testing Car 1
car1.accelerate(); // BMW is going at 130 km/h
car1.accelerate(); // BMW is going at 140 km/h
car1.brake();      // BMW is going at 135 km/h
car1.brake();      // BMW is going at 130 km/h

// Testing Car 2
car2.accelerate(); // Mercedes is going at 105 km/h
car2.accelerate(); // Mercedes is going at 115 km/h
car2.brake();      // Mercedes is going at 110 km/h
car2.brake();      // Mercedes is going at 105 km/h
