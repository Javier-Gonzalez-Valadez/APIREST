var mongoose = require('mongoose');
var Libro = require('./modelos/libros.js');


mongoose.connect('mongodb+srv://usrfes:icoF354@cluster0.c1vqi.mongodb.net/biblioteca?retryWrites=true&w=majority', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));

  function altaLibro(){
    var nuevo = Libro({
      isbn: "13213123",
      titulo:"La vuelta al mundo en 80 dias",
      autor:"Julio Verne",
      anio:1950,
      editorial:"Planeta"
    });

    nuevo.save((err,data)=>{
      if (err) {
        console.log("Ocuurrio un error");
      } else {
        console.log( data );
      }
    });

  }

  function main(){
      altaLibro();
    };
    main();
