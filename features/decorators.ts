class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError("ops.. sunk")
  pilot(): void {
    throw new Error();
    console.log("swish!");
  }
}

function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

//new Boat().pilot();
