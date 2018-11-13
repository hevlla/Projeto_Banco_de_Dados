const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = Schema(
  {
    name: {
      required: true,
      type: String
    },
    login: {
      required: true,
      type: String,
      unique: true
    },
    password: {
      required: true,
      type: String
    },
    phone: {
      required: false,
      type: String
    },
    address: {
      required: false,
      type: String
    }
  },
  { collection: "clients" }
);
