function sumOfMul(a, b, l) {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum += l[i];
        }
    }
    return sum;
}

// function multipleSum() {
//     let a = parseInt(document.getElementById("a").value);
//     let b = parseInt(document.getElementById("b").value);
//     let l = document.getElementById("l").value.split(',').map(Number);
    
//     let result = sumOfMul(a, b, l);
//     alert("Sum is: " + result);
// }
const a = 5;
const b = 2;
const l = [1, 4, 6, 10];
alert(sumOfMul(a, b, l))