
    <h2>Exception Handling</h2>
    
        function divideNumbers(num1,num2){
            try{
                if(num2 === 0){
                throw new Error('Division  by zero is Not allowed');
            }
            const result = num1 / num2;
            return result; 
        }
        catch (error){
            return error.message;
        }
    }
            console.log(divideNumbers(4,2));
          console.log(divideNumbers(4,0));
    
