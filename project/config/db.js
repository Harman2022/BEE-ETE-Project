import mongoose from "mongoose";

const mongo = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_URL).then(() => {
        console.debug("[DEBUG]\tConnected to database");
    }).catch((err) => {
        console.log(err);
    });
}

export default mongo;