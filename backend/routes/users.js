const express = require('express');
const Router = express();
const User = require('../models/User');

// Route pour afficher les Utilisateur existants
Router.get("/showAll", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error)
    };
});

// Route pour afficher un Utilisateur spécifique
Router.get('/showOne/:userId', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        res.send(user);
        console.log(user);
    } catch (error) {
        console.log(error);
    };
});

// Route pour ajouter un nouveau Utilisateur
Router.post('/store', async (req, res) => {
    const user = new User({
        name: req.body.userName,
        age: req.body.userAge,
        role: req.body.userRole
    });
    
    try {
        const saveUser = await user.save();
        console.log(saveUser);
        res.send(saveUser);
    } catch (error) {
        console.error(error);
    };
});

// Route pour actualizer un Utilisateur existant
Router.put('/update/:userId', async (req, res) => {
    try {
        const user = await User.updateOne({
            _id: req.params.userId
        },{
            name: req.body.userName,
            age: req.body.userAge,
            role: req.body.userRole
        }); // (filter, data updated)
        res.send(user);
        console.log(user);
    } catch (error) {
        console.log(error);
    };
});

// Route pour supprimer un Utilisateur existant
Router.delete("/delete/:userId", async (req, res) => {
    try {
        const user = await User.deleteOne({
            _id: req.params.userId
        });
        res.send(user);
        console.log(user);
    } catch (error) {
        console.log(error);
    };
});

module.exports = Router;