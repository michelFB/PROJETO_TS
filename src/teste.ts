
//number: representa número (inteiros e ponto flu
let age: number = 33;
let weight: number = 74.2;
//string: representa sequência de caracteres
let names: string = "Fullstack";
//boolean: representa true (verdadeiro) ou false (falso)
let isReady: boolean = true;
let isActivated: boolean = false;
//array: array com número fixo de elementos
let person: [string, number] = ["João", 20];


//enum: define um conjunto de valores nomeados co numérico associado
enum Color {
     Red,
     Green,
     Blue
}

let favoriteColor: Color = Color.Blue;
console.log(favoriteColor); //Saída: 2

//any: permite que uma variável aceite qualquer tipo de valor 
//Usado quando o tipo não é conhecido ou em uma migração JS para TS
let data: any = 42;
data = "hello";
data = [1, 2, 3];


//void: ausência de um tipo de valor. Geralment
// funções que não retornam valor.
function welcome(): void {
}
console.log("Olá!")
welcome(); //Saída: Olá!
//null e undefined
let x: null = null;
let y: undefined = undefined;


//never: tipos de valores que nunca ocorrem
//Geralmente usado em funções que lançam exceções ou entram em loop infinito
function throwError(message: string): never {
     throw new Error(message);
}
function inifiniteLoop(): never {
     while (true) {
          //Nunca sai daqui!
     }
}
