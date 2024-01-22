// look into styling app, then work on matching up get/fetch/etc requests from backend to front end
const express = require('express');
const app = express();
const PORT = 3333;

const api_routes = require('./routes/api');


app.use(express.json());
app.use(express.static('public'));
app.use('/api/', api_routes);

app.listen(PORT, () => {
    console.log('Server started on port', PORT);
})