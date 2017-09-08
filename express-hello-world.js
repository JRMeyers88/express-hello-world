let express = require('express');
let app = express();
require('dotenv').config();


app.get('/', (req, res) => {
    //provide endpoints
    res.send('Hello world!');
});

let port = process.env.PORT || 8082;
app.listen(port, () => {
    console.log(`listenin on ${port}`);
});