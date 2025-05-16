
    <h2>String replaceAll()</h2>
    
         const input = 'apple banana apple grape apple';
         const search = 'apple';
         const replace = 'orange';

       function replaceAllSubstrings(inputString, searchString, replaceString) {
            return inputString.replaceAll(searchString, replaceString);
     }

        
       const result = replaceAllSubstrings(input, search, replace);
       console.log(result);
        
   
