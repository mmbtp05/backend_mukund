const db = require("../models/index");
const User = db.user;

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })

    app.post("/api/auth/signup" , (req,res,next) => {
        User.create({
            id: req.data.id,
            firstname: req.data.firstname,
            lastname: req.data.lastname
        }).then(() => {
            res.status(200).send({
                msg: "success!"
            })
        })
    })
}