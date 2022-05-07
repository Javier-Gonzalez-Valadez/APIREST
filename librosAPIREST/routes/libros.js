var express = require('express');
var router = express.Router();
var tablaLibros={'id':'1', 'titulo':'El Perfume', 'autor':'Toukind'};
var tablaLibros2=[
    {'id':'1', 'titulo':'El Perfume', 'autor':'Toukind1'},
    {'id':'2', 'titulo':'El Hobbit', 'autor':'Toukind2'},
    {'id':'3', 'titulo':'El Oro', 'autor':'Toukind3'}

];

router.get('/', function(req, res, next) {
  res.status(200).json(tablaLibros2);
});

router.get('/:idLibro',(req, res, next)=>{
  var id= req.params.idLibro;
  res.status(200).json(tablaLibros2[id-1]);
});

router.post('/:idLibro', (req, res, next)=>{
  res.status(400).json({'error':'Operacion no permritida'});
});

router.post('/', (req,res,next)=>{
  console.log(req.body);
  var libro = {
    'id': tablaLibros2[tablaLibros2.length-1]['id']+1,
    'titulo':req.body.titulo,
    'autor':req.body.autor
  };
  //insert en bd del objeto libro
  tablaLibros2.push(libro);
  //la respuesta de la bd regresarla al cliente
  res.status(200).json(tablaLibros2[tablaLibros2.length-1]);
});


router.patch('/:idLibro' ,(req, res, next)=>{
  var id= req.params.idLibro;
  

  tablaLibros2[id-1]['titulo']=req.body.titulo;
  tablaLibros2[id-1]['autor']=req.body.autor;
  res.status(200).json({'mensaje': 'Actualizado'});
});

module.exports = router;
