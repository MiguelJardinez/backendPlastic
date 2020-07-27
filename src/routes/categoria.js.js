const express = require('express');
const app = express();

const connection = require('../db/db');

app.get('/categorias', (req, res) => {

  let limit = req.body.limit || 8;
  let query = `SELECT * FROM categorias limit ${limit}`; 

  connection.query( query, (err, categoria) => {

    if (err) throw err;
    res.json({
      ok: true,
      categoria
    })

  });

}); 

app.get('/productos', (req, res) => {

  let limit = 12;
  let query = `SELECT * FROM catalogo_productos limit ${limit}`; 

  connection.query( query, (err, productos) => {

    if (err) throw err;

    let query = `SELECT COUNT(*) FROM catalogo_productos`; 

    connection.query( query, (err, conteo) => {
      res.json({
        ok: true,
        conteo: conteo[0],
        productos,
      })
    })

  });
}); 


app.get('/productos/:id', (req, res) => {

  let id = req.params.id
  let query = `SELECT * FROM catalogo_productos WHERE id = ${id}`; 

  connection.query( query, (err, producto) => {
    if( err ) throw err;
    res.json({
      ok: true,
      producto,
    })

  });
}); 

app.get('/colores', (req, res) => {

  let query = `SELECT * FROM colores`; 

  connection.query( query, (err, productos) => {

    if (err) throw err;

    let query = `SELECT COUNT(*) FROM colores`; 

    connection.query( query, (err, conteo) => {
      res.json({
        ok: true,
        conteo: conteo[0],
        productos,
      })
    })

  });
}); 

app.get('/colores-productos', (req, res) => {

  let query = `SELECT * FROM catalogo_productos_color`; 

  connection.query( query, (err, productos) => {

    if (err) throw err;

    let query = `SELECT COUNT(*) FROM catalogo_productos_color`; 

    connection.query( query, (err, conteo) => {
      res.json({
        ok: true,
        conteo: conteo[0],
        productos,
      })
    })

  });
}); 

app.get('/imagenes-productos', (req, res) => {

  const limit = 12

  let query = `SELECT * FROM catalogo_productos_img limit ${limit}`; 
  connection.query( query, (err, productos) => {

    if (err) throw err;

    let query = `SELECT COUNT(*) FROM catalogo_productos_img`; 

    connection.query( query, (err, conteo) => {
      res.json({
        ok: true,
        conteo: conteo[0],
        productos,
      })
    })

  });
}); 

module.exports = app;