// 1 - arrays

const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Jonathas", true, 2, 4.12];

console.log(itens);

// 2 - mais sobre arrays

const arr = ["a", "b", "c", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]);

// 3 - propriedades

const numbers = [5, 12, 4, 22];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Jhon";

console.log(myName.length);


// 4 - métodos

const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto"

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log(text.indexOf("g"))

// 5 - objetos 

const person = {
    name: "Jhon",
    age: 16,
    job: "Programador"
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log( typeof person);

// 6 - criando e deletando prioridades

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos

const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object); 

const obj2 = {
    c: []
}

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhcendo melhor os objetos 

console.log(Object.keys(obj))

console.log(Object.keys(obj2))

console.log(Object.keys(car))

console.log(Object.entries(car))

// 9 - Mutação

const a = {
    name: "Jhon"
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loops em arrays

const users = ["Matheus", "João", "Pedro", "Lucas"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// 11 - push e pop

const array = ["a", "b", "c"]

console.log(array)

console.log(array.length)

array.push("d")

console.log(array)

console.log(array.length)

array.pop(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push("z", "x", "y")

console.log(array)

// 12 - sjift e unshift

const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)

console.log(letters)

letters.unshift("p", "q", "r")

letters.unshift("z")

console.log(letters)

// 13 - indexOf e lastIndexOf

const myElements = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maça"))

console.log(myElements.indexOf("Abacate"))

console.log(myElements[2]);

console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"))

console.log(myElements.indexOf("Mamão"))

console.log(myElements.lastIndexOf("Mamão"))

// 14 - slice

const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2,4)

console.log(subArray)

console.log(testeSlice)

const subArray2 =testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3)

const subArray4 = testeSlice.slice(2)

console.log(subArray4)

// 15 - foreach

const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {

    console.log(`O número é ${numero}`);

})

const posts = [
    {title: "Pimeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})

// 16 - includes

const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))

console.log(brands.includes("AUDI"))

if (brands.includes("BMW")) {
    console.log(`Temos carros da marca BMW`)
} else {
    console.log(`Não temos carros da marca BMW`)
}

if (brands.includes("AUDI")) {
    console.log(`Temos carros da marca AUDI`)
} else {
    console.log(`Não temos carros da marca AUDI`)
}

// 17 - reverse

const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest)

// 18 - trim

const trimTest = "  testando \n  ";

console.log(trimTest)

console.log(trimTest.trim());

console.log(trimTest.length)

console.log(trimTest.trim().length);

// 19 - padStart

const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart)

console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, 0)

console.log(testePadEnd)

// 20 - split

const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase)