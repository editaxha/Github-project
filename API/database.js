const mongoose = require('mongoose');
const DATABASE_CONECTION = 'mongodb://localhost:27017/git';


exports.initializeMongo = function () {
    mongoose.connect(DATABASE_CONECTION, { useNewUrlParser: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB', err))
    // console.log("hello")
}