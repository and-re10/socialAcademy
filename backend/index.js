// Importations pour la DATA BASE
const mongoose = require('mongoose');
require('dotenv/config');// Sécuriser le connection a la base de données

// Connection a la DATA BASE
mongoose.connect(
    process.env.DB_CONNECTION, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }, 
    async () => {
        try {
            console.log("DB CONNECTED");
        } catch (error) {
            console.error(error);
        };
    }
);


// Importations pour le server
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Création des Middlewares
app.use(cors()); // 
app.use(bodyParser.urlencoded({ extended: true })); // 
app.use(express.json()); //

// Créatio des Routes
const userRoute = require('./routes/users');
app.use("/api/", userRoute);

// Création de la port de connection au server
app.listen(3000, () => {
    try {
        console.log("CONNECTED ON PORT 3000");
    } catch (error) {
        console.log(error);
    };
});
