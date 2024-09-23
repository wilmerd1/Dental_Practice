const mongoose = require('mongoose')

const {DENTAL_APP_MONGOSDB_HOST, DENTAL_APP_MONGOSDB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${DENTAL_APP_MONGOSDB_HOST}/${DENTAL_APP_MONGOSDB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));