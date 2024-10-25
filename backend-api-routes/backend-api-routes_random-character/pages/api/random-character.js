import Chance from "chance";

export default function handler(request, response) {
  console.log("I am in the backend in /random-character");
  console.log("Request Method: ", request.method);
  console.log("Request query: ", request.query);

const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geohashName: chance.geohash(),
  };  

  response.status(200).json(character);
}