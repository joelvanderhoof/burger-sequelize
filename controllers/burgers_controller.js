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
        //console.log(req.body);
        db.burgerSequelize.create(req.body)
        .then(
            () => {
                res.redirect("/");
            }
        );
    })
    .put("/:id?", (req, res) => {
        var id = parseInt(req.params.id);
        var devoured = Boolean(req.body.devoured);
        db.burgerSequelize.update(
            {
                devoured: req.body.devoured
            }, 
            {
                where: {
                    id: id
                }
            }
        ).then(
            () => {
                res.redirect("/");
            }
        );
    });

module.exports = router;