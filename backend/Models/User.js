const { string } = require('joi');
const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://amandeep:amandeep@cluster0.vem3ndw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>console.log("database is connected"))

  
}



const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        // required: true,
    },
    message: {
        type: String,
        required: true,
    },
}); 

const UserModel = mongoose.model('signup', UserSchema);
module.exports = UserModel;