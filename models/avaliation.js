const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AvaliationSchema = new Schema({
    user_name: { type: String, required: true, maxLength: 100 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, maxLength: 500 },
});


AvaliationSchema.virtual("url").get(function () {
    return `/catalog/avaliation/${this._id}`;
});

// Export model (collection name forced to avoid pluralization confusion)
module.exports = mongoose.model("Avaliation", AvaliationSchema, "avaliations");