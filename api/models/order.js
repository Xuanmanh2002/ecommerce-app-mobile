const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true,
                min: 0
            },
            salePrice: {
                type: Number,
                required: true,
                min: 0
            },
            image: {
                type: String,
                required: true,
            },
            detail: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            }
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    shippingAddress: {
        name: {
            type: String,
            required: true,
        },
        mobileNo: {
            type: String,
            required: true,
        },
        houseNo: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
            required: true,
        },
        posttalCode: {
            type: String,
            required: true
        }
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now
    }

});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
