var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://usrfes:icoF354@cluster0.c1vqi.mongodb.net/biblioteca?retryWrites=true&w=majority', {
    useNewUrlParser: true
  }).then(() => {
    console.log('Conectado a Mongo DB Atlas')
  })
  .catch(err => console.log(err));
