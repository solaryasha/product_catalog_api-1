"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const phones_1 = require("./route/phones");
const PORT = 5000;
const app = (0, express_1.default)();
app.use('/phones', phones_1.phoneRouter);
app.listen(PORT, () => {
    console.log(`API is ready on http://localhost:${PORT}`);
});
