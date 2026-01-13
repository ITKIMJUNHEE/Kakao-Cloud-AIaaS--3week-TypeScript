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

// 1. isDog 타입 가드 구현
function isDog(animal: Animal): animal is Dog {
  return animal.type === "dog";
}

// 2. isCat 타입 가드 구현
function isCat(animal: Animal): animal is Cat {
  return animal.type === "cat";
}

// 3. isBird 타입 가드 구현
function isBird(animal: Animal): animal is Bird {
  return animal.type === "bird";
}

// 4. 범용 타입 가드 구현
function isAnimalType<T extends Animal>(
  animal: Animal,
  type: T["type"]
): animal is T {
  return animal.type === type;
}

// 5. 동물 소리 내기 (타입 가드 활용)
function makeSound(animal: Animal): void {
  if (isDog(animal)) {
    // 여기서 animal은 Dog 타입으로 추론됨
    animal.bark();
  } else if (isCat(animal)) {
    // 여기서 animal은 Cat 타입으로 추론됨
    animal.meow();
  } else if (isBird(animal)) {
    // 여기서 animal은 Bird 타입으로 추론됨
    animal.fly();
  }
}


// 테스트 


const dog: Dog = { 
  type: "dog", 
  name: "Max", 
  breed: "Labrador", 
  bark: () => console.log("Woof!") 
};

const cat: Cat = { 
  type: "cat", 
  name: "Whiskers", 
  color: "orange", 
  meow: () => console.log("Meow!") 
};

makeSound(dog);  // 결과: Woof!
makeSound(cat);  // 결과: Meow!

// 파일 간 변수 이름 충돌 방지
export {};