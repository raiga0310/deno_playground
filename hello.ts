import Person, { sayHello } from "./person.ts";

const ada: Person = {
    firstName: "Ada",
    lastName: "Lovelace",
};

console.log(sayHello(ada));


// fetch API
const site = await fetch("https://www.deno.com");
console.log(await site.text());
