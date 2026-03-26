# Run the proyect

```bash
docker-compose build
docker-compose up -d
```

# Validate the exercise
```bash
docker ps # get <container_name>
docker exec -it <container_name> ts-node exercises/types/<exercise>
```

# TypeScript Exercises

## Exercises

## Beginner level

- [Exercise 1 - Basic Type Inference](./exercises/types/1_basic_type_inference.ts)

Create a constant `product` with these properties:
- `title` as a string
- `price` as a number

Then, without declaring an `interface`, write down which type TypeScript would infer for each property.

---

- [Exercise 2 - Create a simple interface](./exercises/types/2_create_a_simple_interface.ts)
Define an `interface` called `Car` with:
- `brand: string`
- `year: number`

Then create an object `myCar` that matches that structure.

---

- [Exercise 3 - Detect a property error](./exercises/types/3_detect_a_property_error.ts)

Given this interface:

```ts
interface User {
  name: string;
  id: number;
}
```

What error would this object produce, and why?

```ts
const user: User = {
  username: "Cristian",
  id: 1,
};
```

---

- [Exercise 4 - Class implementing an interface shape](./exercises/types/4_class_implementing_an_interface_shape.ts)

Create an `interface` called `Animal` with:
- `name: string`
- `age: number`

Then create a class `Dog` with those same properties, and make an instance assigned to a variable typed as `Animal`.

---

- [Exercise 5 - Function with typed parameters](./exercises/types/5_function_with_typed_parameters.ts)

Using a `User` interface, create a function `printUser` that receives a user and prints their name and id to the console.

---

## Basic-intermediate level

- [Exercise 6 - Function returning a type](./exercises/types/6_function_returning_a_type.ts)

Define an `interface` `Admin` with:
- `name: string`
- `role: string`

Then create a function `getAdmin()` that returns an object of that type.

---

- [Exercise 7 - Identify primitive types](./exercises/types/7_identify_primitive_types.ts)

State which type corresponds to each variable:

```ts
let isActive = true;
let total = 99;
let message = "Hello";
let emptyValue = undefined;
let nothing = null;
```

Then rewrite them by explicitly declaring the type.

---

- [Exercise 8 - Using any](./exercises/types/8_using_any.ts)

Create a variable `data` with type `any`.
Assign a string to it first, then a number, and then an object.

Then explain one advantage and one risk of using `any`.

---

- [Exercise 9 - Using unknown](./exercises/types/9_using_unknown.ts)

Create a variable `value` of type `unknown`.
Assign a string to it, then try to use `.toUpperCase()` directly.

After that, solve it correctly using `typeof`.

---

- [Exercise 10 - void case](./exercises/types/10_void_case.ts)

Write a function `sayHello` that receives a name and uses `console.log`.
State which return type that function would have according to the documentation.

---

## Intermediate level

- [Exercise 11 - Create literal unions](./exercises/types/11_create_literal_unions.ts)

Define the following types:
- `TrafficLight = "red" | "yellow" | "green"`
- `ResponseStatus = "success" | "error"`

Then create valid and invalid variables for each case.

---

- [Exercise 12 - Union types in parameters](./exercises/types/12_union_types_in_parameters.ts)

Create a function `printLength` that receives a parameter of type `string | string[]` and returns its length.

Test it with:
- a string
- an array of strings

---

- [Exercise 13 - Narrowing with typeof](./exercises/types/13_narrowing_with_typeof.ts)

Create a function `formatValue` that receives `value: string | number`.

If it is a string, return the text in uppercase.
If it is a number, return the number with two decimal places.

---

- [Exercise 14 - Narrowing with arrays](./exercises/types/14_narrowing_with_arrays.ts)

Create a function `normalizeInput` that receives `input: string | string[]`.

If it receives a string, it should return an array containing that string.
If it receives an array, it should return it unchanged.

---

- [Exercise 15 - Arrays with generics](./exercises/types/15_arrays_with_generics.ts)

Define these types using `Array<T>`:
- an array of strings
- an array of numbers
- an array of objects with `{ name: string }`

Then create one variable of each type with example values.

---

## Intermediate-advanced level

- [Exercise 16 - Create a generic interface](./exercises/types/16_create_a_generic_interface.ts)

Define a generic interface `Box<Type>` with:
- `set: (value: Type) => void`
- `get: () => Type`

Then declare it to work with `string`.

---

- [Exercise 17 - Error with incompatible generics](./exercises/types/17_error_with_incompatible_generics.ts)

Starting from this type:

```ts
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
```

Declare a `Backpack<number>` and try to add a string.
Explain why TypeScript should report an error.

---

- [Exercise 18 - Correct structural typing](./exercises/types/18_correct_structural_typing.ts)

Define:

```ts
interface Point {
  x: number;
  y: number;
}
```

Then:
- create one object with `x` and `y`
- create another one with `x`, `y`, and `z`
- pass both of them to a function `logPoint`

Explain why both should work.

---

- [Exercise 19 - Structural typing with an error](./exercises/types/19_structural_typing_with_an_error.ts)

Using the same `Point` interface, try to pass this object to `logPoint`:

```ts
const color = { hex: "#187ABF" };
```

Explain why TypeScript gives an error and which properties are missing.

---

- [Exercise 20 - Class and shape matching](./exercises/types/20_class_and_shape_matching.ts)

Create a class `VirtualPoint` with:
- `x: number`
- `y: number`

Then instantiate it and pass it to a function that expects a `Point`.

Explain why it works even though the variable was not explicitly declared as `Point`.
