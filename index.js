const tasks = require("./routes/tasks");
const path=require('path');
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
require('dotenv').config();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + './client/build/index.html'));
        });
}
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
