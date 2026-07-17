import express from "express";
import cors from "cors";

import { systemRoutes } from "./modules/system";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", systemRoutes);

export default app;
