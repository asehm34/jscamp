//İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
//sayının bölenlerini bulan ve bunları bir array içerisine atayan fonksiyonu yazalım
//let a = [1]
//a.push(2)//artık a =[1,2] dir
//console.log(a)

function arrayofDivisions(params) {
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

//şimdi sayılarımızı yukarıdaki fonksiyona atıp karşılaştıralım

function areTheyFrienly(param1,param2) {
    if (arrayofDivisions(param1)===param2 && arrayofDivisions(param2)===param1) {
        console.log(param1 + " and " +param2 + " are friendly numbers")
    }
    else
    console.log(param1 + " and " +param2 + " are not friendly numbers")
    
}

//şimdi fonksiyonlarımızı çalıştıralım
areTheyFrienly(220, 284)
areTheyFrienly(100,200)