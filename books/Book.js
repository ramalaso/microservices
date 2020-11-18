const mongoose = require('mongoose');

module.exports = mongoose.model('Book', {
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    numberPages: {
        type: String,
        require: true
    },
    publisher: {
        type: String,
        require: true
    }
});
