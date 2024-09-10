
/*solution copied from the provided solutions - I didn't understand any of this typeOfDataThing, 
so I asked ChatGPT to explain the code for me. Explanations in German from ChatGPT.
*/

// Der Code überprüft den Typ der Variable data und führt je nach Typ bestimmte Aktionen aus. 

let data;
data = undefined;

/*
let data;: Eine Variable data wird deklariert, aber zunächst nicht initialisiert, daher ist ihr Wert am Anfang undefined.
data = "hello";: Der Variable wird der String "hello" zugewiesen.
*/

switch (typeof data) {

/*
Der switch-Block wird verwendet, um je nach Rückgabewert von typeof verschiedene Aktionen auszuführen.

typeof data: Diese Funktion gibt den Datentyp der Variable data als String zurück. 
Da data = "hello" ist, wird der Typ "string" sein.
*/

    case "object":
        // since null, array and object are alltogether considered objects
        // we need to do some more checks within the object case.
        if (data === null) {
            console.log("this is null");
        } else if (Array.isArray(data)) {
            console.log("this is an array");
        } else {
            console.log("this is an object");
        }
        break;
/*
typeof gibt "object" für Objekte, Arrays und null zurück. Deswegen gibt es hier eine zusätzliche Prüfung:
data === null: Falls data null ist, wird ausgegeben: "this is null".
Array.isArray(data): Falls data ein Array ist, wird ausgegeben: "this is an array".
Ein Array ist eine geordnete Liste von Werten (values), die unter einem gemeinsamen Namen gespeichert werden.
Ansonsten wird ausgegeben: "this is an object" für normale Objekte.
Ein Objekt ist eine Sammlung von Eigenschaften (Attributes oder Properties), die in Schlüssel-Wert-(key-value-)Paaren organisiert sind. 
*/

    case "number":
        if (Number.isNaN(data)) {
            console.log("this is a NOT a number");
/*
NaN ist ein spezieller Wert des Datentyps number, der verwendet wird, um ungültige oder undefinierbare mathematische Berechnungen zu kennzeichnen. 
*/
        } else {
            console.log("this is a number");
        }
        break;
    case "string":
        console.log("this is a string");
        break;
    case "boolean":
        console.log("this is a boolean");
        break;
/*
Wenn data = true oder data = false zugewiesen würde, würde die Konsole "this is a boolean" ausgeben.
*/
    case "bigint":
        console.log("this is a bigint");
        break;
/*
Um in dem gegebenen Code die Ausgabe "this is a bigint" zu erhalten, 
muss der Variable data ein Wert des Datentyps bigint zugewiesen werden,
also eine sehr große Ganzzahl, die größer ist, als als der normale Datentyp number es erlauben würde.
Wenn also z.B. data = 12345678901234567890n; zugewiesen würde, würde die Konsole "this is a bigint" ausgeben.
Das n am Ende der Zahl weist darauf hin, dass es sich um einen bigint-Wert handelt. 
Der switch-Block erkennt den Datentyp als bigint und gibt die entsprechende Nachricht aus.
*/
    case "function":
        console.log("this is a function");
        break;
    case "undefined":
        console.log("this is undefined");
        break;
/*
Wenn data nicht initialisiert oder nicht zugewiesen wurde, also undefined, wird "this is undefined" ausgegeben.
*/
    default:
        console.log("no idea what this is");
}
/*
Um den default-Fall auszulösen und die Ausgabe "no idea what this is" zu erhalten, müsste data einen Datentyp haben, 
der nicht in den vorhandenen case-Zweigen abgefangen wird. In JavaScript gibt es jedoch nicht viele solcher Typen.
*/