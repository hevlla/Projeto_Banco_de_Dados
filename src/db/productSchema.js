const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: {
      required: true,
      type: String,
      unique: true
    },
    price: {
      required: true,
      type: Number
    }
  },
  { collection: "products" }
);

productSchema.statics.isNameTaken = function(name) {
  if (name)
    return this.findOne({ name: name }).then(function(product) {
      return product ? true : false;
    });
};
