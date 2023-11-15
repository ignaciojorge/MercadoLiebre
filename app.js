const express = require ('express');
const app = express();
const path = require ('path');

const port = process.env.PORT || 3001
app.listen(port, ()=>console.log(`Servidor corriendo en el puerto ${port}`));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});

app.use(express.static('public'));
