import express from "express";
import http from "http";
import { Server } from "socket.io";
import prisma from "../prisma/client";
import authRoutes from "./routes/auth";
import bookingRoutes from "./routes/bookings";
import translatorRoutes from "./routes/translators";
import setupSocket from "./socket";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/translators", translatorRoutes);
app.use("/bookings", bookingRoutes);

setupSocket(io);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Backend: http://localhost:${PORT}`));
