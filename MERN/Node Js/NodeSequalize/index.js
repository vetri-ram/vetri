const express = require('express');
const app = express();

const port = 8080;
require('./models/app');

var userCtrl = require('./Controller/userController');

app.get("/", (req,res) => {
    res.send("Home page")
});

app.get("/add", userCtrl.addUser);

app.get("/Crud",userCtrl.crudOperation);

app.get("/Query",userCtrl.modelQuery);

app.get("/finder",userCtrl.dataFinder);

app.get("/getset",userCtrl.getterSetter);

app.get("/validate",userCtrl.dataValidation);

app.get("/rawquery",userCtrl.rawQuery);

app.get("/onetoone",userCtrl.oneToOne);

app.get("/belongsto",userCtrl.belongsTo);


app.listen(port,() => {
    console.log(`App is Listening at http://localhost:${port}`);
});