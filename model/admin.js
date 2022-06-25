const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Campo obrigatório'],
        unique: [true, 'Este email já existe'],
        validate: {
            validator: function (email) {
                return email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            },
            message: props => `${props.value} não é válido!`
        },
    },
    password: {
        type: String,
        required: [true, 'Campo obrigatório']
    },
    createdAt: { type: Date, default: Date.now }
})


const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminModel;