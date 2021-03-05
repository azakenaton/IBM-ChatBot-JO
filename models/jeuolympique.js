const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const pays = require('./pays').schema;

const jeuOlympiqueSchema = new Schema({
  name: String,
  annee: Number,
  participants: [
    {
      type: ObjectId,
      ref: 'pays'
    }
  ]
});
module.exports = mongoose.model('jeuolympique', jeuOlympiqueSchema);
