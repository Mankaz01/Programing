
function multiples(a, b, n){
    let sum =0;
    
    for (let i=0; i< n; i++) {
        if( i % a === 0 || i % b === 0) {
            sum += i
        }
    }
    return sum
}
function multipleSum(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
    let result = multiples(a, b, n);
    alert("sum is: " + result)    
}
