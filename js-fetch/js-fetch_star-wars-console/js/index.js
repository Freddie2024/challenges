console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    try {const response = await fetch(url);
        console.log("fetching data");
        if (!response.ok) {
			console.log('Response not ok');			
			return;
        }
        const people = await response.json(); 
        console.log(people);   

        people.results.forEach(person => {
            console.log(person.name);
         });

        const eyeColor = people.results[2]["eye_color"];
        console.log("eyeColor:", eyeColor)
        
} catch (error) {
    console.log('Error in fetch: ', error);
}
}
fetchData();

