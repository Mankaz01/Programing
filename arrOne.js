function sumOfMul(a, b, l){
    let sum = 0
    for(let i = o; i <l.length; i++){
        if(l[i] % a === 0 || l[i] % b === 0){
            sum +=l[i]
        }
    }
    return sum;
}

const a = 3;
const b = 5;
const l = [1, 3, 5, 7, 9, 10];
alert(sumOfMul(a,b,l))