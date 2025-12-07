let express = require('express');

let app = express();

let port = 5500;

app.get('/', (req,res) => {
    res.send("Servidor aberto")
});

app.listen(port, () => {
    console.log("Servidor aberto na porta 5500")
});