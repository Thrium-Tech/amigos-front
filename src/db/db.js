// database.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/Whatsapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const messageSchema = new mongoose.Schema({
  phoneNumber: String,
  direction: String, // 'sent' or 'received'
  type: String, // 'text' or 'template'
  content: String
},{ timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;