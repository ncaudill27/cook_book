import React from 'react';

function TempApi() {

  var unirest = require("unirest");

  var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer");

  req.query({
    "q": "How much vitamin c is in 2 apples%3F"
  });

  req.headers({
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "6d78bd7fe3mshc6520d854a8ac4ap109fbdjsn74808e2a8e4f",
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default TempApi;