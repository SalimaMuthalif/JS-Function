// 1.Positive , Negative OR Zero

    function PosituveNegativeorZero(number) {
        if ( number % 2 == 0){
            return "Positive";}
            {
                return "Negative";}
            {
                return "Zero";}
               
        }
        console.log(PosituveNegativeorZero(-5));
        console.log(PosituveNegativeorZero(12));
        console.log(PosituveNegativeorZero(0));
        
// 2. MAX/MIN

        const number = [2,4,1,0,6,8.10,150,225,998,12,14,16,18];
        const maxValue = Math.max(...number);
        const minValue = Math.min(...number);
        console.log("min", minValue);
        console.log("max", maxValue);

// 3. Date & Time

        const now = new Date();
        console.log(now); 
        console.log(now.getFullYear());        
        
// 4. 7 days

        
        
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const days2=[,"Saturday","Sunday","Munday","Tuesday","Wednesday","Thursday","Friday"];
        const today = days[new Date().getDay()];
        console.log(today+days2);
        const n = new Date(2024,10,15);
        console.log(n.toDateString()); 
        
// 5. Positive

function isPositive(number) {
    if ( number > 0){
        console.log('Positive.');
        return true;
    }else{
        console.log('not.');
            return false;}

    }
    
    
    isPositive(25);
    isPositive(-2);
    isPositive(-5);
    isPositive(5);

    
    

        

