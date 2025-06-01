import "dotenv/config";
import pkg from "mongoose";
const { connect } = pkg;

const { MONGO_URL } = process.env;

export const connectDb = async () => {
    try {
        await connect(MONGO_URL);
        console.log("Deu certo ao conectar com o banco");
    } catch (error) {
        console.log("Não deu certo ao conectar com o banco", error);
    }
};
