"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Contacts_1 = require("../controllers/Contacts");
const router = express_1.default.Router();
router.get('/', Contacts_1.getContacts);
module.exports = router;
//# sourceMappingURL=contacts.js.map