// Exercise 6 - Function returning a type
//
// Define an interface Admin with:
// - name: string
// - role: string
//
// Then create a function getAdmin() that returns an object of that type.

interface Admin {
    name: string,
    role: string
}

function getAdmin(): Admin {
    return {
      name: "Cristian",
      role: "admin"
    }
}

console.log(getAdmin());