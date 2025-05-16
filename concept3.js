
    <h2> Async, await, promise, fetch, axios</h2>
    
        async function fetchData() {
            const url ='https://jsonplaceholder.typicode.com/todos/1';
            try{
                const response = await fetch(url);
              //Check if the response is ok
                if(!response.ok){
                    throw new Error('Data Not Found');
                }
                const data = await response.json();
                console.log(data);
            }
            catch(error){
                console.log('Error fetching data');
                
            }
        }
        fetchData();
   
