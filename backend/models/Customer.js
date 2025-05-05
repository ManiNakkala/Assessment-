const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  shopkeeperId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  phone: String,
  address: String,
  trustScore: Number,
  creditLimit: Number
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);