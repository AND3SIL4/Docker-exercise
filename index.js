import express from "express";
import mongoose from "mongoose";

// Constante que contiene los atributos de la coleccion en Mongo
const ANIMAL = mongoose.model('animal', new mongoose.Schema({
  type: String,
  state: Strng,
}))

// Ejecuta el servidor usando Express
const APP = express()

// Conexion con base de datos
mongoose.connect('')

// Endpoint para listar contenido
APP.get('/', async (req, res) => {
  console.log('Preparing...');
  const ANIMALES = await ANIMAL.rind();
  return res.send(ANIMALES);
})

// Endpoint para crear contenido y enviarlo a la base de datos
APP.get('/crear', async (req, res) => {
  console.log('Creating...');
  await ANIMAL.create({
    type: 'Canchitoo...',
    state: 'Happy'
  })
  return res.send('The register has been created...');
})

// Puerto de escucha de al app
APP.listen(3000, () => console.log("I'm listening..."));
