
const path = require('path');
const express = require("express");
const app = express();

const basicPath = path.join(__dirname,"../public/New");

app.use(express.static(basicPath))

app.get('/', (req, res) => {
    res.send("Hello World From India !")
});

app.get('/about', (req, res) => {
    res.write("<h1>Hello World From India!.This is our About Page</h1>")
    res.write("<h2>Hello World From India!.This is our About Page</h2>");
    res.write("<h3>Hello World From India!.This is our About Page</h3>");
    res.write("<h4>Hello World From India!.This is our About Page</h4>");
    res.write("<h5>Hello World From India!.This is our About Page</h5>");
    res.write("<h6>Hello World From India!.This is our About Page</h6>");
    res.send();
});

app.get('/services', (req, res) => {
    res.send("Hello World From India !.This is our services Page")
});

app.get('/contact', (req, res) => {
    res.send([
        {
            id: "1317",
            name: "Vetri",
            age: "32",
            city: "Mayiladuthurai",
            Job: "MERNdeveloper"
        },
        {
            id: "5111",
            name: "subash",
            age: "32",
            city: "Mayiladuthurai",
            Job: "MERNdeveloper"
        },
        {
            id: "5112",
            name: "vasanthi",
            age: "32",
            city: "Mayiladuthurai",
            Job: "MERNdeveloper"
        },
        {
            id: "5113",
            name: "krithika",
            age: "32",
            city: "Mayiladuthurai",
            Job: "MERNdeveloper"
        },
    ])
});

app.listen(8080, () => {
    console.log("Server is running on port 8080")
});
