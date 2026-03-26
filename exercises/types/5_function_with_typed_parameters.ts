// Exercise 5 - Function with typed parameters
//
// Using a User interface, create a function printUser that receives a user
// and prints their name and id to the console.

interface User {
    name: string,
    id: number
}

function printUser(user: User): void {
    console.log(`Name: ${user.name} - Id: ${user.id}`)
}

const user: User = { name: "Cristian", id: 8 } 
printUser(user);