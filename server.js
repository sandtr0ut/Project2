const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(request, response) {
    response.send("Hello, world!");
});

app.listen(PORT);
