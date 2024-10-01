1.// Even/Odd
    function EvenOrOdd(number) {
    if ( number % 2 === 0){
        return "even";}
        else{
            return "odd";}
    }
    console.log(EvenOrOdd(4));
    console.log(EvenOrOdd(7));

    
2.// For Loop
    for(let i = 1; i <= 50; i++){
        if (i % 3 === 0)
        {
            console.log(i);
            
        }}

3.// Factotial        
        function factorial(number){
            let result = 1;
            for (let i = 1; i <= number; i++){
                result *= i;
            }
            return result;
        }
        console.log(factorial(5));
        console.log(factorial(7));
        

4.// Sum of Even numbers    
        function Sum(n){
            let sum = 0;
            for(let i = 1; i <= n; i++){
                if(i % 2 === 0){
                    sum += i;
                }}
                return sum;
        }
        console.log(Sum(10));
        console.log(Sum(20));

5.// Even Number
    function Even(n) {
        for ( let i = 1; i <= n; i ++){
            if ( i % 2 === 0){
                console.log(i);
                }}} 
                console.log(Even(10));
                console.log(Even(15));
                     
     