var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pet_db', {useNewUrlParser: true});

var PetSchema = new mongoose.Schema({
    name: { type: String, unique: [true, "Name must be unique"], required: [true, "Name is required"], minlength: [3, "Name must be at least 3 characters long"]},
    type: { type: String, required: [true, "Type is required"], minlength: [3, "The type must be at least 3 characters long"]},
    description: { type: String, required: [true, "Description is required"], minlength: [3, "Description must be at least 3 characters long"]},
    likes: { type: Number, required: [true], default: 0},
    skills: {
        type: [{ type: String }],
        validate: [arrayLimit, '{PATH} exceeds the limit of 3']
    }
}, { timestamps: true });

function arrayLimit(val) {
    return val.length <= 3;
}

module.exports = { Pet: mongoose.model('Pet', PetSchema) };