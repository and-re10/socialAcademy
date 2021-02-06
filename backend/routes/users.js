const express = require('express');
const Router = express();
const User = require('../models/User');

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
    }
});

// Route pour afficher les Utilisateur existants
Router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error)
    }
});

module.exports = Router;