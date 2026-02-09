import express from "express";
import { config } from "dotenv";

// Load environment variables first
config();

import { connectDB } from "./config/db.js";

const app = express()
const PORT = 5001;

//Import Routes
import movieRoutes from "./routes/movieRoutes.js"

//API routes
app.use("/movies",movieRoutes)

// Connect to database and start server
connectDB().then(() => {
    const server = app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`)
    })
}).catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
});