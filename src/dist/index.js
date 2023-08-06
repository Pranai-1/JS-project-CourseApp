"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const admin_1 = __importDefault(require("./routes/admin"));
const course_1 = __importDefault(require("./routes/course"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/admin", admin_1.default);
app.use("/admin/courses", course_1.default);
const port = 3000;
mongoose_1.default.connect('mongodb://127.0.0.1:27017/courses', { dbName: "courses" });
app.listen(port, () => { console.log(`server running on port ${port}`); });