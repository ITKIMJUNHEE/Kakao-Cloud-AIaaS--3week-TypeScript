interface Dog {
  type: "dog";
  name: string;
  breed: string;
  bark(): void;
}

interface Cat {
  type: "cat";
  name: string;
  color: string;
  meow(): void;
}

interface Bird {
  type: "bird";
  name: string;
  wingspan: number;
  fly(): void;
}

type Animal = Dog | Cat | Bird;

function isDog(animal: Animal): animal is Dog {
  return animal.type === "dog";
}

function isCat(animal: Animal): animal is Cat {
  return animal.type === "cat";
}

function isBird(animal: Animal): animal is Bird {
  return animal.type === "bird";
}

function isAnimalType<T extends Animal>(
  animal: Animal,
  type: T["type"]
): animal is T {
  return animal.type === type;
}

function makeSound(animal: Animal): void {
  if (isDog(animal)) {
    animal.bark();
  } else if (isCat(animal)) {
    animal.meow();
  } else if (isBird(animal)) {
    animal.fly();
  }
}

const dog: Dog = { type: "dog", name: "Max", breed: "Labrador", bark: () => console.log("Woof!") };
const cat: Cat = { type: "cat", name: "Whiskers", color: "orange", meow: () => console.log("Meow!") };

makeSound(dog);  
makeSound(cat);  

export {};