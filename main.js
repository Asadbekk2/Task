//Task 1
// function Check() {
//     let age = +prompt("Введите ваш возраст"); 
//     if (age > 18) {
//         document.write("Можно");
//         return true;
//     } else {
//         document.write("Нельзя");
//         return false;
//     }
// }
// Check();

//Task 2

// function min(a,b){

//     if (a < b){
//         document.write("ЛОЛ")
//         return a;
//     } else{
//         document.write("Хз")
//         return b;
//     }
// }
// let input = +prompt("Введите число")
// console.log(min(input, 20))


//Task 3

// function pow(x = 2, n = 5){
//     return x ** n
// }
// document.write(pow())


//Task 4
// function CheckAge() {
//     let dad = +prompt("Сколько вам лет? Dedul"); 
//     let son = +prompt("Сколько вам лет? Sыn Moy"); 

//     let agedifference = dad - son;
//     return Math.abs(agedifference - son);
// }

// document.write(CheckAge());

//Task 5

// function Oddnumber(){
//     let input = +prompt("Введите число для проверки")
//        const chisla = n => {
//         if (n % 2 !== 0){
//             return `Число ${n} нечетное.`;
//         } else {
//             return `Число ${n} четное.`;
//         }
//        };

//     let ok = confirm("Вы уверены?");
//     if (ok){
//         document.write(chisla(input))
//     } else{
//         document.write("Действие отменено.")
//     }
// }
// Oddnumber()


//Task 6

// function ok(sentence){
//     return +sentence;
// }

// let sentence = "123456789"
// let chislo = ok(sentence);
// document.write(chislo)

// ok(sentence)



//Day 3 TASKS 1

// let sum = function (a, b){
//     return a + b
// };

// document.write(sum(3,5))

//Task 2


// const square = (num) => num * num;

// const userinput = prompt("Введите число для возведение в квадрат")
// const result = square(Number(userinput));

// document.write(`Квадрат числа ${userinput} равен ${result}`)


//Task 3

// let greet = prompt("What is your name?");
// let age = +prompt("What is your age?");

// let greeting = greet ?
// () => document.write("Assalomu Aleykum Va Raxmotulloxu va barakatu, brother!"):
// () => document.write("Say your name.")

// greeting();

// let University = (age >= 18) ?
// () => document.write("<br> Вы достигли возраста для поступление на наш Университет!"):
// () => document.write(" <br> К сожалению, вы не сможете поступить в наш Университет. Вы еще несовершелетний.")

// University()


//Task 4

// function Oddnumber(){

//     let input = +prompt("Введите число для проверки.")

//     if (input % 2 === 0){
//         document.write("Четное число!")
//     }else {
//         document.write("Не четное")
//     }
// }

// Oddnumber()

//Task 5

// const some = [1, 2, 3, 4, 5];
// const umnojeniy = some.map(element => element * 2)
// document.write(umnojeniy);


//Task 6

// const chislo = [44, 50, 42, 52, 10, 24];
// const minimun = Math.min(chislo);

// document.write(minimun);

//Task 7

// const getwords = (str) => str.split(' ');

// const word = "YOO WASSAP nIGGA";
// const wordsreturn = getwords(word);
// document.write(wordsreturn)


//Task 1

// function copy(obj){
//     return(obj);
// }

// const originObj = {
//     name:  "Max",
//     age: 22,
//     details: {
//         job: "Ingeerining",
//         city: "India"
//     }

// };

// const copied = copy(...originObj);

// copied.details.city = "Los Angeles";

// document.write("Оригинальный обьект:", originObj);
// document.write("Копия обьект:", copied);


//Task 2

// const originObj = {
//     name: "Bobo",
//     age: 12
// };

// const copyObj = {...originObj};
// copyObj.age = 30;

// document.write(originObj.age);
// document.write(" ")
// document.write(copyObj.age);

