const request = require('request');
// const api = "cda736f7-614e-4ea7-b4db-ce839ec3260f"


const fetchBreedDescription = (name, callback) =>{
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error);
    }else{
      const data = JSON.parse(body)[0];
      const description = data ? data.description.trim() : 'Error, no information found.'
      callback(null, description);

    }


  });
};

module.exports = { fetchBreedDescription };