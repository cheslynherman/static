const express = require ("express");
const path = require ("path");

const app = express();

// serve static files from the public directory
app.use(express.static(path.join(__dirname, "public" )));

// start the server 
const port = process.env.PORT || 3000;
app.listen (port, () => {
    console.log(`Server is listening on port ${port}`);
});