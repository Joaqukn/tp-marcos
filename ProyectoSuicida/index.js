const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Sirve archivos estáticos desde la carpeta 'pagina'
app.use(express.static(path.join(__dirname, "pagina")));

// Definimos las imágenes disponibles (aquí tienes la imagen que mencionas)
const img = [
    { id: 1, imagenes1: 'img/negro.jpg' }
];

// Ruta para obtener una imagen por ID
app.get('/img/:id', (req, res) => {
    const id = Number(req.params.id);
    const imagen = img.find(i => i.id === id);
    if (imagen) {
        // Asegúrate de que la ruta sea correcta
        res.sendFile(path.join(__dirname, 'pagina', imagen.imagenes1));
    } else {
        res.status(404).send('Imagen no encontrada');
    }
});

// Configurar servidor para servir archivos estáticos (como videos)
app.use(express.static(path.join(__dirname, 'pagina')));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
