const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const paysSchema = new Schema({
    name: String
});
module.exports = mongoose.model('pays', paysSchema);