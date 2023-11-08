import express from "express";
import mongoose from "mongoose";

// Constante que contiene los atributos de la colección en MongoDB
const Animal = mongoose.model('Animal', new mongoose.Schema({
  type: String,
  state: String,
}))

// Ejecuta el servidor Express
const app = express();

// Conexión con la base de datos
mongoose.connect('mongodb://nico:password@monguito:27017/miapp?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Iniciar el servidor Express después de la conexión exitosa
    app.listen(3000, () => console.log("I'm listening..."));
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

// Endpoint para obtener todos los animales
app.get('/', async (req, res) => {
  console.log('Preparing...');
  try {
    const animales = await Animal.find();
    return res.send(animales);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Internal Server Error');
  }
});

// Endpoint para crear contenido y enviarlo a la base de datos
app.get('/crear', async (req, res) => {
  console.log('Creating...');
  try {
    await Animal.create({
      type: 'Canchitoo...',
      state: 'Happy',
    });
    return res.send('The register has been created...');
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Internal Server Error');
  }
});
