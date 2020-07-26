import React from 'react';
import './App.css';
const axios = require('axios');

// Make a request for a user with a given ID
const api = 'https://github.com/540792740/NexMovie/blob/master/src/asserts/myDate.json'
axios.get(api)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

// Optionally the request above could also be done as

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
