// Importations pour le server
const express = require('express');
const app = express();

// Création de la port de connection au server
app.listen(3000, () => {
    try {
        console.log("CONNECTED ON PORT 3000");
    } catch (error) {
        console.log(error);
    };
});
