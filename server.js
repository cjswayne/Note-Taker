// Getting required packages/modules
const express = require('express');
const app = express();
const PORT = 3333;

//path to api routes
const api_routes = require('./routes/api');

// having server read json automatically
app.use(express.json());
// having server auto create routes for frontend
app.use(express.static('public'));
// routes for api
app.use('/api/', api_routes);

app.listen(PORT, () => {
    console.log('Server started on port', PORT);
})