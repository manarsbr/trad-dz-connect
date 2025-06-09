import { Router } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/client";
const r = Router();

r.post("/signup", async (req, res) => {
  const { email, password, role } = req.body;
  const user = await prisma.user.create({ data: { email, password, role } });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
  res.json({ token });
});

r.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where:{ email }});
  if (!user || user.password !== password) return res.status(400).json({ error: "Invalid" });
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
  res.json({ token });
});

export default r;
