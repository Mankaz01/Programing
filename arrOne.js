function sumOfMul(a, b, l){
    let sum = 0
    for(let i = o; i <l.length; i++){
        if(l[i] % a === 0 || l[i] % b === 0){
            sum +=l[i]
        }
    }
    return sum;
}

function multipleSum(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let l = parseInt(document.getElementById("l").value);
    let result = sumOfMul(a, b, l);
    alert("sum is: " + result)    
}
