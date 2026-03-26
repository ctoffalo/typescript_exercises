// Exercise 4 - Class implementing an interface shape
//
// Create an interface called Animal with:
// - name: string
// - age: number
//
// Then create a class Dog with those same properties, and make an instance
// assigned to a variable typed as Animal.

interface Animal {
    name: string,
    age: number
}

class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const dog: Animal = new Dog('Simona', 4);

console.log(dog);