const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, "pagina",)));


const img = [
    { id: 1, imagenes1: 'img/test.jpg' },
    { id: 2, imagenes1: 'img/test.jpg' },
    { id: 3, imagenes1: 'img/html.jpg' },
    { id: 4, imagenes1: 'img/css.jpg' },
    { id: 5, imagenes1: 'img/c++.jpg' },
    { id: 6, imagenes1: 'img/Python.jpg' },
    { id: 7, imagenes1: 'img/unity.jpg' },
    { id: 8, imagenes1: 'img/javascript.jpg' },
    { id: 9, imagenes1: 'img/libro.jpg' },
    { id: 10, imagenes1: 'img/lapiz.jpg' }
];

app.get('/img/:id', (req, res) => {
    const id = Number(req.params.id);
    const imagen = img.find(i => i.id === id);
    if (imagen) {
        res.sendFile(path.join(__dirname, 'pagina', imagen.imagenes1));
    } else {
        res.status(404).send('Imagen no encontrada');
    }
});

/* puede fallar no se si esta bien experimente algo extraño aca*/
app.use(express.static(path.join(__dirname, "pagina", 'ds.html')));


const img2 = [
    { id: 1, imagenes2: 'img2/discord.jpg' },
];

app.get('/img2/:id', (req, res) => {
    const id = Number(req.params.id);
    const imagen2 = img2.find(i => i.id === id);
    if (imagen2) {
        res.sendFile(path.join(__dirname, 'pagina',  imagen2.imagenes2));
    } else {
        res.status(404).send('Imagen no encontrada');
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
