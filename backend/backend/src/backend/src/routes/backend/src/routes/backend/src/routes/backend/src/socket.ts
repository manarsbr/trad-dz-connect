import { Server } from "socket.io";
export default function setupSocket(io: Server) {
  io.on("connection", socket => {
    socket.on("join", ({ bookingId }) => socket.join(bookingId));
    socket.on("message", ({ bookingId, text, sender }) => {
      io.to(bookingId).emit("message", { text, sender });
    });
  });
}
