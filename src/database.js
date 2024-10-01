/* const mongoose = require('mongoose')

const {DENTAL_APP_MONGOSDB_HOST, DENTAL_APP_MONGOSDB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${DENTAL_APP_MONGOSDB_HOST}/${DENTAL_APP_MONGOSDB_DATABASE}`;


const uri = "mongodb+srv://zaux:<db_password>@cluster0.capmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err)); */

const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://zaux:0D7Kxmz6tOZo9xpg@cluster0.capmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Asegúrate de reemplazar <db_password> con tu contraseña real

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión a MongoDB establecida');
})
.catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
});

module.exports = mongoose;