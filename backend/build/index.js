"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/api', todoRoutes_1.default);
app.use((0, cors_1.default)());
app.use(errorMiddleware_1.errorMiddleware);
db_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error("unable to connect to the database: ", err);
});
