class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("biipp");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Bus extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("VRUUMM");
  }
  public startDrivingProcess(): void {
    this.drive();
  }
}

const bus = new Bus(6, "red");
bus.startDrivingProcess();
