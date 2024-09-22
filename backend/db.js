const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const routes = require('./Routes/routes'); 

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/abc');
        console.log('Successfully Connected to DB');
    } catch (error) {
        console.error('Error connecting to DB', error);
    }
}

connectDB();

module.exports = mongoose;
