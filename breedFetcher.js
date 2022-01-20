const request = require('request');


// const api = "cda736f7-614e-4ea7-b4db-ce839ec3260f"
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const args = process.argv.slice(2);
const breed = args[0];
const search = url + breed;


  
request(search, (error, response, body) => {

  if (error) {
    console.log('breed was not found');
    throw error;
  }
  
  const data = JSON.parse(body);
  
  const description = data[0].description;

  console.log(description);
});
  



