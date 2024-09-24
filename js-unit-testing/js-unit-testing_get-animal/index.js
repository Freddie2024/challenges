export function getAnimal(animal) {
    if (animal === "cats") {
        return "I totally love cats!";
    } else if (!animal) { 
return "I do not like animals at all!"
    } else {
    const animalPluralName = animal.endsWith('s') ? animal : animal + 's';
    return `I like ${animalPluralName}!`;
    } 
}
