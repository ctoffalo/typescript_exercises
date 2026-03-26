// Exercise 17 - Error with incompatible generics
//
// Starting from this type:
//
// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }
//
// Declare a Backpack<number> and try to add a string.
// Explain why TypeScript should report an error.
