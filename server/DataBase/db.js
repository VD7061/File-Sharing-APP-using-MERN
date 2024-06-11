import mongoose from 'mongoose';

const DBconnection = async () => {
    const DB_URL = `mongodb+srv://user1:hello123cluster0.zxqbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; //create your own password and user name here

    try {
        await mongoose.connect(DB_URL);
        console.log('Database Connected');
    } catch (error) {
        console.error('Error while connecting to database', error.message);
    }
};

export default DBconnection;
