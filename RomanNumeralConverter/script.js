/*
User Stories:

You should have an input element with an id of "number"
You should have a button element with an id of "convert-btn"
You should have a div, span or p element with an id of output
When you click on the #convert-btn element without entering a value into the #number element, the #output element should contain the text "Please enter a valid number"
When the #number element contains the number -1 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1"
When the #number element contains the number 4000 or greater and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999"
When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX"
When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI"
When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX"
When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII"
When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX"

*/

const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const romanOutput = document.getElementById("output");

const Roman = [
    { Roman_Num: "M", Arab_Num: 1000},
    { Roman_Num: "CM", Arab_Num: 900},
    { Roman_Num: "D", Arab_Num: 500},
    { Roman_Num: "CD", Arab_Num: 400},
    { Roman_Num: "C", Arab_Num: 100},
    { Roman_Num: "XC", Arab_Num: 90},
    { Roman_Num: "L", Arab_Num: 50},
    { Roman_Num: "XL", Arab_Num: 40},
    { Roman_Num: "X", Arab_Num: 10},
    { Roman_Num: "IX", Arab_Num: 9},
    { Roman_Num: "V", Arab_Num: 5},
    { Roman_Num: "IV", Arab_Num: 4},
    { Roman_Num: "I", Arab_Num: 1}
]



convertBtn.addEventListener("click", ()=>{
    let convertNum = parseInt(numInput.value);
    let output = "";
    if (Number.isNaN(convertNum)) {
        romanOutput.innerHTML = "Please enter a valid number";
    }
    else if (convertNum < 0 ) {
        romanOutput.innerHTML = "Please enter a number greater than or equal to 1";
    }
    else if (convertNum >= 4000) {
        romanOutput.innerHTML = "Please enter a number less than or equal to 3999";
    }
    else {
        Roman.forEach((Roman)=> {
            //console.log(Roman.Roman_Num);
            console.log(Roman.Arab_Num);
            while (convertNum >= Roman.Arab_Num) {
                output += Roman.Roman_Num;
                convertNum =  convertNum - Roman.Arab_Num
                
                //console.log(Roman.Arab_Num)
            }


        });
        romanOutput.innerHTML = output;

    }
});


