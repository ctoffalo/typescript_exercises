// Exercise 3 - Detect a property error
//
// Given this interface:
//
// interface User {
//   name: string;
//   id: number;
// }
//
// What error would this object produce, and why?
//
// const user: User = {
//   username: "Cristian",
//   id: 1,
// };

// Solution: It would point out that the username property does not exist on type User.