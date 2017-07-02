var express = require("express");
var db = require("../models");

var router = express.Router();

//Create routes to handle AJAX requests for CRUD
router.get("/", (req, res) => {
    db.burgerSequelize.findAll({}).then( (result) => {
        var burgerOjbect = {
            burgers: result
        }
            res.render("index", burgerOjbect);
        });
    })
    .post("/", (req, res) => {
        console.log(req.body);
        db.burgerSequelize.create(req.body,
            (result) => {
                res.redirect("/");
            }
        );
    })
    .put("/:id?", (req, res) => {
        var id = parseInt(req.params.id);
        console.log(req.params.id);
        db.burgerSequelize.update(id, 
            (result) => {
                res.redirect("/");
            }
        );
    });

module.exports = router;