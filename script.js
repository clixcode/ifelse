let calculateAB = document.getElementById("calculateAB");
let abResult = document.getElementById("AB");
let error1 = document.getElementById("error1");

//////////////////////////////////////////////
calculateAB.addEventListener("click", function(){

    let a1 = document.getElementById("a1").value;
    let b1 = document.getElementById("b1").value;
    let result = 0;

    if (b1 != 0) {
        error1.style.display = 'none';
        result = a1/b1
        abResult.innerText = result;

    }
    else{
        error1.style.display = 'block';
        abResult.innerText = 0;
    }
})

////////////////////////////////////////////////

let calculateABCD = document.getElementById("calculateABCD");
let abcdResult = document.getElementById("ABCD");
let error2 = document.getElementById("error2");
let letter = document.getElementById("letter");
///////////////////////////////////////////////


calculateABCD.addEventListener("click", function(){

    let a2 = document.getElementById("a2").value;
    let b2 = document.getElementById("b2").value;
    let c2 = document.getElementById("c2").value;
    let d2 = document.getElementById("d2").value;
    let result2 = 0;
    let result3 = 0;
//DLA AB
    if (b2 != 0) {
        error1.style.display = 'none';
        result2 = a2/b2

    }
    else{
    }
//DLA CD
    if (d2 != 0) {
        error2.style.display = 'none';
        result3 = c2/d2

    }
    else{
    }
// AB CD result
//////////////////
//Bukwa oshibki//
///////////////////////////
if (b2 == 0) {
    letter.innerText = "B";
    abcdResult.innerText = 0;
}
if (d2 == 0) {
    letter.innerText = "D";
    abcdResult.innerText = 0;
}
if(b2 == 0 && d2 == 0){
    letter.innerText = "B i D"
}
//////////////////////////
if(b2 != 0 && d2 != 0){
    error2.style.display = 'none';
    abcdRes = result2+result3;
    abcdResult.innerText = abcdRes;

    if (abcdRes == 0) {
    abcdResult.innerText = 0;
}
}
else{
    error2.style.display = 'block';
    abcdResult.innerText = 0;
}
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////x = (a+6) / (b – 4).//////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let calculate64 = document.getElementById("calculate64");
let ab64Result = document.getElementById("ab64");
let error = document.getElementById("error");
///////////////////////////////////////////////


calculate64.addEventListener("click", function(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let a6 = 0;
    let b4 = 0;
    let ab = 0;
    a6 = parseInt(a)+6;
    if(b != 4){
        error.style.display = 'none';
        b4 = b - 4;
        ab64Result.innerText = b4/a6;
    }
    else{
        ab64Result.innerText = 0;
        error.style.display = 'block';
    }
    if (a == 0 && b == 0) {
        ab64Result.innerText = 6/-4;
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////PARZYSTA//////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

