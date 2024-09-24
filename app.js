const express = require('express');
let axios = require('axios');
var app = express();
app.use(express.json()); // Add this line to parse JSON request bodies

app.post('/', async function(req, res, next) { // Make the function async
  try {
    let results = await Promise.all(req.body.developers.map(d => // Use Promise.all to handle multiple async calls
      axios.get(`https://api.github.com/users/${d}`).catch(err => ({ error: err.message })) // Handle errors for each request
    ));

    let out = results.map(r => r.error ? { error: r.error } : { name: r.data.name, bio: r.data.bio }); // Check for errors in results

    return res.send(JSON.stringify(out)); // Send the output as JSON
  } catch (err) { // Catch the error and pass it to next
    next(err);
  }
});

app.get('/', (req, res) => { // {{ edit_1 }}
    res.send('Welcome to the Broken App!'); // Respond with a welcome message
});

app.listen(3000);
