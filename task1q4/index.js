function findPrime(...nums) {
    for(let i= 0; i<nums.length; i++) {

        if (nums[i]<0) {
            console.log("cannot be negative");
           continue;
        }     
        if (nums[i]==1) {
            continue;
        }

        if (nums[i]==2||nums[i]==3) {
            console.log(nums[i]+": is prime");
           continue;
        }

        let isPrime = true;
        let j = 2;

        while ( j <= Math.sqrt(nums[i])) {
            
            if (nums[i]%j===0) {
               
                isPrime = false; 
                break;   
            }
           
           j++;
           
            
        }
                 if (isPrime) {
                    console.log(nums[i]+": is prime");
                } 
                 else {
                    continue;
                }
  };
}

for (let i = 1; i < 1001; i++) {
    findPrime(i)
    
}
