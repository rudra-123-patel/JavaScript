// Primitive types are stored in stack memory, while reference types are stored in heap memory.

let myName = "Rudra patel";

let anotherNaame = myName;
anotherNaame = "RajPAtel";

console.log(myName); // Rudra patel
console.log(anotherNaame); // RajPAtel

// Reference types are stored in heap memory, and the variable holds a reference to that memory location.

let user1 = {
  email: "rxp@f.co",
  name: "Rudra",
  upi: "use@ybl",
};

let user2 = user1;

user2.email = "rjp@google.com";

console.log(user1.email);
console.log(user2.email);
