'use strict';

const create = document.querySelector(".create");
const inputSize = document.querySelector(".size");
const form = document.querySelector(".form");
const fragment = document.createDocumentFragment();
const fill = document.querySelector(".fill");
const parentInputBox = document.querySelector(".parentInputBox");
const sumHigherMain = document.querySelector(".sumHigherMain");
const sumBelowSide = document.querySelector(".sumBelowSide");
let inputBox;
let arr;


createForm();
fillOut();
burger();
countSumHigherMain();
countSumBelowSide();


function randomHundred() {
    return Math.floor(Math.random() * 101);
}

function fillOut() {
    fill.addEventListener("click", (e) => {
        e.preventDefault();

        inputBox.forEach((item, i) => {
            item.value = randomHundred();
            
        });

        


    });
};

function createForm() {
    create.addEventListener("click", (e) => {
        e.preventDefault();
        parentInputBox.innerHTML = "";


        const size = +inputSize.value;

        if (!size) {
            alert("Введите правильное значение!")
            fill.classList.add("hideFill");
        }

        for (let i = 0; i < size; i++) {
            
            for (let j = 0; j < size; j++) {
                const item = document.createElement('input');
                item.classList.add("inputBox");
                fragment.appendChild(item);
            }
            parentInputBox.insertAdjacentHTML("beforeend", "<br>");
            parentInputBox.appendChild(fragment);
            fill.classList.remove("hideFill");
            
            

        }
        
        inputSize.value = "";
        inputBox = document.querySelectorAll(".inputBox");
        
        return inputBox;
    });
    
}

function burger() {
    const burger = document.querySelector(".burger");
    const mainMenu = document.querySelector(".mainMenu");
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger_active");
        mainMenu.classList.toggle("mainMenu_active");
    });
}

function createArray(rows) {
    const a = [];
    arr = [];

    inputBox.forEach((item) => {
        a.push(item.value);
    });   
          
    let n = 0;

    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < rows; j++) {
                
            arr[i].push(a[n]);
            n++;
                
             
        }
    }
    return arr;
}   






function countSumHigherMain() {
    sumHigherMain.addEventListener("click", (e) => {
        e.preventDefault();
        createArray(Math.sqrt(inputBox.length));
        let sum = 0;
        
        for (let i = 0; i < arr.length; i++){
            for (let j = 0; j < arr.length; j++) {
                if (j > i) {
                    sum += +(arr[i][j]);
                } else {
                    continue;
                }
            }
        }
        console.log(sum);
        return sum;       
        
    });
}

function countSumBelowSide() {
    sumBelowSide.addEventListener("click", (e) => {
        e.preventDefault();

        createArray(Math.sqrt(inputBox.length));
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (i + j > arr.length - 1) {
                    sum += +(arr[i][j]);
                } else {
                    continue;
                }
            }
        }
        console.log(sum);
        return sum;
    });
}