// console.log("Hello World")
// let x=5;
// console.log(x)
// let max=2307;
// let actual=max-13;
// let percentage=actual/max;
// if(percentage<1){
//     console.log("pussy")
// }
// else{
//     console.log("hello")

// function printNum(num){
//     var sum=num+6;
//     return sum
// }
// console.log(printNum(6))
// let printNums= (num)=>num+6;
// console.log(printNums(6))
// arrowfunction simpliefies the need to return any expression
//format is let function=argument => expression to be returned

// Write a function called add7 that takes one number and returns that number + 7.
// Write a function called multiply that takes 2 numbers and returns their product.
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

// Question1
let add7=(num) =>num+7;
console.log(add7(7))
// Question2
let multiply=(a,b) =>a*b;
console.log(multiply(7,8))
// Question3
function capitalize(word){
    // if (typeof word!=string){
    //     console.log("Non-String Detected")
    // }
    // else{
// }
    let firstletter=word[0].toUpperCase();
    let lower=word.toLowerCase()
    console.log(lower.replace(lower[0],firstletter))
}
capitalize("aAmed")
//Question 4
let lastLetter=(word)=>word[word.length-1];

//Question fizzbuzz

//pseudocode Prompt user for number
//if number div by three print fizz
//if number divisible by 5 buzz
//if both fizzbuzz
function fizz(i){
    if(i%3==0){
        return true;
    }
    else{return false;}
}
function buzz(i){
    if(i%5==0){
        return true;
    }
    else{return false;}
}
function fizzbuzz(range){
    for(var i=3;i<range;i++){

        if(fizz(i)&&buzz(i)){console.log("fizzBuzz")}
        else if(buzz(i)){console.log("Buzz")}
        else if(fizz(i)){
            console.log("fizz")
        }
        else(console.log(i))
    }
}
fizzbuzz(20)
//How to ask user for prompt
// let answer=parseInt(prompt("ENterr"));
//Rock Paper Scissor Game

function compchoice(){
    let choose=["rock","paper","scissor"];
    var choice=choose[Math.floor(Math.random() * 3)];
    return choice
}
var compscore=0;
var userScore=0;
//VVV.IMP variables need to be outside of function scope to not reset
function play(playerchoice,comp=compchoice()){
    let x=playerchoice.toLowerCase();
    console.log("You chose",x,"The Computer chose",comp)
    if(x=="rock"){
        if(comp=="paper"){
            console.log("You lose, Paper beats Rock")
            compscore++;
        }
        if(comp=="rock"){
            console.log("Draw")
        }
        if(comp=="scissor"){
            console.log("You win, rock beats scissor")
            userScore++;
        }
    }
    else if(x=="scissor"){
        if(comp=="paper"){
            console.log("You win, scissor beats paper")
            userScore++;
        }
        if(comp=="scissor"){
            console.log("Draw")

        }
        if(comp=="rock"){
            console.log("You lose, rock beats scissor")
            compscore++;

        }
    }
    else{
        if(comp=="scissor"){
            console.log("You lose, scissor beats paper")
            compscore++;

        }
        if(comp=="paper"){
            console.log("Draw")
        }
        if(comp=="rock"){
            console.log("You win, paper beats rock")
            userScore++;
        }
        
    }
    console.log(userScore,compscore)
    
}
function Game(){
    var trial=0
    while (trial<5){
        play("rock");
        trial++;
    }
if (compscore>userScore){
        console.log("Computer Wins Try Again")
    }
else if(userScore>compscore){
        console.log("You Win!!!!!")
    }
else{
        console.log("Draw")
    }
}
Game()