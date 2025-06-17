let string = 'Hello';
console.log(Number(string), Boolean(string), String(string));

let number = 3;
console.log(Number(number), Boolean(number), String(number));

let bigNumber  = 16156165165n;
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));

let yname = true;
console.log(Number(yname), Boolean(yname), String(yname));

let myname = null;
console.log(Number(myname), Boolean(myname), String(myname));

let a1;
console.log(Number(a1), Boolean(a1), String(a1));

let car = {
	name: "Nissan",
	year: 2022,
	owner: Alex
  }
console.log(Number(car), Boolean(car), String(car));

let id = Symbol("5");
console.log(Number(id), Boolean(id), String(id));