console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    try {const response = await fetch(url);
        console.log("fetching data");
        if (!response.ok) {
			console.log('Response not ok');			
			return;
        }
        const data = await response.json(); 
        console.log(data);   

        data.results.forEach(person => {
            console.log(person.name);
         })
        
} catch (error) {
    console.log('Error in fetch: ', error);
}
}
fetchData();

