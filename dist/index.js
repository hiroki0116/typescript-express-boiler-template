"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', function (req, res) {
    res.send('Yappiiii');
});
var port = process.env.PORT || 8000;
app.listen(port);
console.log('Express WebApi listening on port ' + port);
//# sourceMappingURL=index.js.map