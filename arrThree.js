const a = [2, 3,6,7,8]; 
const l = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

 function calsum(){
     let sum = 0;
     
alert('working');
for (let i = 0; i < l.length; i++) {
    let num =l[i];
    for (let j = 0; j < a.length; j++) {
        if (num % a[j] === 0) {
            sum += num; 
            break; 
        }
    }
}
console.log("Sum of multiples:", ${sum});
alert('sum of multiple:'+ sum)
}

window.onload=calsum;