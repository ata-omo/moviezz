const mongoose = require("mongoose");

const RowSchema = new mongoose.Schema({

    title: {type: String, required: true, unique:true},
    type: {type: String},
    gener: {type: String},
    content: {type: Array}
},
{timestamps: true}
);


module.exports = mongoose.model("Row", RowSchema);