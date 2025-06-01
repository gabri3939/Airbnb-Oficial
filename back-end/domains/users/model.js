import pkg from "mongoose"; 
const { Schema, model } = pkg;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    // outros campos que você quiser
});

export default model("User", userSchema);
