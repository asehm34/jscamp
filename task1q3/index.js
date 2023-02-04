//mükemmel sayı kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayıdır.

//tam bölenlerinin toplamı

function sumofDivisions(params) {
    let a = [1]
    for (let i = 2; i <= Math.ceil(params/2); i++) {
        if (params%i===0) {
            a.push(i)
        } else {
            continue
        }
        
    }
    //şimdi dizideki bölenlerin toplamını bulalım
    let sum = 0;
    a.forEach(element => {
  sum += element;
        
    });
    return sum;

    
}

function isPerfect(param) {
    if (sumofDivisions(param)===param) {
        console.log(param +" is perfect number")
        
    }
   

    
}

for (let i = 1; i < 1001; i++) {
    isPerfect(i)
    
}