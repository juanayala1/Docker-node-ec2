const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => res.send({status: "Estoy vivo"}));

app.listen(port, () => console.log(`Aplicación de ejemplo escuchando en el puerto ${port}!`));