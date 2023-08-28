const express = require("express");
const db = require("./models/index")


const app = express();

require("./routes/index")(app);


db.sequelize.sync().then(() => {
    console.log("sync successfully!!!");
})

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello!!!!!!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});