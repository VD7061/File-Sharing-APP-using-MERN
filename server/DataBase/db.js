import mongoose from 'mongoose';

const DBconnection = async () => {
    const DB_URL = `mongodb+srv://user1:Hello123@cluster0.zxqbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(DB_URL);
        console.log('Database Connected');
    } catch (error) {
        console.error('Error while connecting to database', error.message);
    }
};

export default DBconnection;
