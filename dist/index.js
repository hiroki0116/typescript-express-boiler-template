"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const db_helper_1 = require("./dbhelpers/db.helper");
const app = (0, express_1.default)();
(0, db_helper_1.dbConnect)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
console.log(process.env.DB_CLOUD);
const port = process.env.PORT || 8000;
app.listen(port);
console.log('Express WebApi listening on port ' + port);
//# sourceMappingURL=index.js.map