interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const beverage = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My benerage is ${this.color}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.summary()}`);
};

printSummary(oldCivic);
printSummary(beverage);
