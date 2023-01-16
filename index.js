let equal_pressed = 0;
// Refer all buttons excluding AC and DEL
document.getElementById('demo').innerHTML="0"
let button_input = document.querySelectorAll("input-button");
// Refer input,equal,clear,erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
}
// Access each class using forEach
button_input.forEach((buton_class) => {
    button_class.addEventListener( "click", () => {
        if (equal_pressed == 1){
            input.value = "";
            equal_pressed = 0;
    }
        // display value of each button
        input.value += button_class.value;
   })
    })
    

//solve the user's input when clicked on equal signature

equal.addEventListener("click",() =>{
    equal_pressed = 1;
    let inp_val = input.value;
    try{
        // evelaute user's input
        let solution = eval(inp_val);
        // true for natural numbers
        // false for decimals numbers
        if(Number.isInteger(solution)){
            input.value = solution;
        }
        else{
            input.value = solution.tofixed(2);
        }
    } catch (err) {
        //if user has entered invalid input
        alert("invalid input");
    }
})

//clear whole input
clear.addEventListener("click", () =>{
    input.value = "";
})
//Erase single Digit
erase.addEventListener("click", () =>{
    input.value = input.value.substr(input.value.length-1);
})