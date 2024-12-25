const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema({
    description:{
        type:String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    paymentMethod:{
        type: String,
        required: true
    }
},
{ timestamps: true }
)

module.exports = mongoose.model("expense",expenseSchema)
