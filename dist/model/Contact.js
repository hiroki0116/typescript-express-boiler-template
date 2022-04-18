"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ContactSchema = new mongoose_1.Schema({
    user: {
        type: { type: mongoose_1.Types.ObjectId, required: true, ref: 'User' },
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.default = (0, mongoose_1.model)('Contact', ContactSchema);
//# sourceMappingURL=Contact.js.map