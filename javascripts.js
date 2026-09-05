/*import { greet, goodbye } from "./train.js"*/
import greet from "./train.js"
/*const name = "parsa";
let age = 23;
const islearningjs= true;

console.log(name);
console.log(age);
console.log(islearningjs);

function sum(a,b){return a + b;}      
const result = sum(5,10);
console.log(result);


function IsEven(number2){return number2 % 2 === 0}
const result2 = IsEven(10)
console.log(result2)



const number3 = 75;
if (number3 >= 90){
        console.log("excellent")
} else if (number3 >= 70){
        console.log("good")
} else{
        console.log("keeplearning")
}

const fruits = ["apple","orange","blueberry"];
console.log(fruits[0])
console.log(fruits)
fruits.push("banana")
console.log(fruits)
console.log(fruits.length)
for(const fruit of fruits){
        console.log(fruit);
}
for (let i=1; i<=5; i++){
        console.log(i);
}
fruits.forEach((fruit) => {
        console.log(fruit);
})


const car = {
        brand : "toyota",
        model : "x12",
        year : 2024,
        describe(){
                console.log(this.model);
        }
}
console.log(car.brand)
console.log(car)
car["IsElectric"] = true;
console.log(car.IsElectric);
car.describe();

const title = document.querySelector("#title");
console.log(title);
let showingparsa = false;
setInterval(() => {
        if (showingparsa){
                title.textContent = "Hello World";
        }else{
                title.textContent = "Hello parsa"
        }
        showingparsa = !showingparsa;
}, 1000);   
let colorofparsa = false;
setInterval(() => {
        if (colorofparsa){
                title.style.color = "red"
        }else{
                title.style.color = "blue"
        }
        colorofparsa =! colorofparsa

}, 1000);
title.style.backgroundColor = "yellow";
let flag = false;
const button = document.querySelector("#button");
button.addEventListener("click", () =>{
        if (flag === false){
                title.style.backgroundColor = "purple";
                flag = true;
        }else{
                title.style.backgroundColor = "yellow";
                flag = false;
        }})
*/
 const numbers = [10, 20, 30, 40, 50]
 numbers.forEach((number) =>{
        console.log("number = "+ number)
        console.log(2 * number)
 })   
const numberss = [5, 10, 15, 20, 25];
const triple = numberss.map((number) => {
        return number * 3
})
console.log(triple)
const numbersss = [10, 20, 30, 40, 50];
const half = numbersss.map((number) => {
        return number / 2
})
console.log(half)
const numberssss = [2, 4, 6, 8, 10];
const powerof2 = numberssss.map((number) =>{
        return number * number
})
console.log(powerof2)
const names = ["parsa", "ali", "sara", "mike"];
const UpperCase = names.map((upper) => {
        return upper.toUpperCase()
})
console.log(UpperCase)
const num = [10, 15, 20, 25, 30, 35, 40];
const filt = num.filter((filter) => {
        return filter>= 30;
})
console.log(filt)
const numbe = [5, 12, 18, 25, 30, 40];
const finder = numbe.find((find25) => {
        return find25 > 20 ;
}) 
console.log(finder)
const numbersx = [5, 10, 15, 20, 25];
const total = numbersx.reduce((sum,number) => {
        return sum + number
}, 0)
console.log(total)
const numbersy = [2, 4, 6, 8]; 
const total2 = numbersy.reduce((sum,number) => {
        return sum * number
}, 1)
console.log(total2)
const numbersu = [5, 12, 8, 20, 3, 15];
const final = numbersu.filter((filter) => {
        return filter > 10;
})
const final2 = final.map((map) =>{
        return 2 * map
})
const final3 = final2.reduce((sum,number) => {
        return sum + number
},0)
console.log(final,final2,final3)
greet("parsa");
/*goodbye("parsa");*/
/*const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello parsa");
            reject("failed");  
        },2000)     
})*/
/*promise.catch((result) => {
        console.log(result)
})*/
/*async function test(){
        const result = await promise
        console.log(result)
}
test();*/
const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
                reject("failed");
        
}, 200);
})
async function test(){
        try{
                const result = await promise
                console.log(result)
        } catch(error)
        {
           console.log(error)
        }
}
test();
