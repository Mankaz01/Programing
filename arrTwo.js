function sumOfMul(a, l) {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] % a[0] === 0 || l[i] % a[1] === 0) {
            sum += l[i];
        }
    }
    return sum;
}

function multipleSum() {
    let a = [parseInt(document.getElementById("a").value),
    parseInt(document.getElementById("b").value)];
    let l = document.getElementById("l").value.split(',').map(Number);

    let result = sumOfMul(a, l);
    alert("Sum is: " + result);
}
