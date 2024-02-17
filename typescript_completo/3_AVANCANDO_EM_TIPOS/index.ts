// 1 - arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[3])

// numbers = "teste"

const nomes: string[] = ["Matheus", "João"]

// nomes.push(4)

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

// nums.push("teste")

console.log(nums[0])

// 3 - any

const arr1: any = [1, "teste", true, [], {nome: "Matheus"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parametros tipados

function soma(a:number, b:number) {
	console.log(a + b)
}

soma(4, 5)

// soma("a", "b")

// 5 - retorno de função
function greeting(name: string):string {
	// return  5
	return `Olá ${name}`
}

console.log(greeting("Jhon"))
// console.log(greeting(123))

// 6 - funcao anonima
setTimeout(function() {

	const sallary: number = 1000

	// console.log(parseFloat(sallary))

	// console.log(sallary)

}, 2000)

// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y: number}) {
	console.log("X coordinates: " + coord.x)
	console.log("X coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 34.65}

passCoordinates(objCoord)
// passCoordinates({nome: 1, sobrenome: 2})

const pessoaObj:{nome: string, surname: string} = {nome: "Matheus", surname: "Battisti"}