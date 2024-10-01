
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://zaux:0D7Kxmz6tOZo9xpg@cluster0.capmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


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