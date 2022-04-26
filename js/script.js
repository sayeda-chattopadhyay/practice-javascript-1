// Filter method with strings

const names = ["Alice", "Anders", "Ben", "Mari", "Marie", "Xander"];

const filteredNames = names.filter(filterNames);

function filterNames(name) {
  if (name.toLowerCase().startsWith("m")) {
    return true;
  }
}
console.log(names);
console.log(filteredNames);

// // to get all the names that have a in it, use includes method
// // function filterNames(name) {
// //   if (name.toLowerCase().includes("a")) {
// //     return true;
// //   }
// // }

// console.log(names);
// console.log(filteredNames);

// inline name function

// const filteredNames = names.filter(function(name){
//     if (name.toLowerCase().startsWith("m")) {
//         return true;
//     }

// });

// console.log(names);
// console.log(filteredNames);

// inline arrow function

// const filteredNames = names.filter((name) =>
//   name.toLowerCase().startsWith("m")
// );
// console.log(names);
// console.log(filteredNames);

// Filter method with objects
// the filter method on an array of objects.

const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Anders" },
  { id: 3, name: "Mari" },
];

// const filteredPeople = people.filter(filterPeople);

// function filterPeople(person) {
//   if (person.name.toLowerCase().startsWith("a")) {
//     return true;
//   }
// }

console.log(people);
// console.log(filteredPeople);

// inline arrow function

const filteredPeople = people.filter((person) =>
  person.name.toLowerCase().startsWith("a")
);
console.log(filteredPeople);
