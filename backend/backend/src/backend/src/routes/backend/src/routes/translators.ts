import { Router } from "express";
import prisma from "../../prisma/client";
const r = Router();

// Lister traducteurs
r.get("/", async (req, res) => {
  const list = await prisma.user.findMany({ where: { role: "TRANSLATOR" } });
  res.json(list);
});

// Enregistrer profil traducteur
r.post("/", async (req, res) => {
  const { userId, specialties, languages, rate } = req.body;
  const profile = await prisma.translatorProfile.create({ data: { userId, specialties, languages, rate } });
  res.json(profile);
});

export default r;
