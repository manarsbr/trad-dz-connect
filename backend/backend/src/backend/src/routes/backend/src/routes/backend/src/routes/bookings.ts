import { Router } from "express";
import prisma from "../../prisma/client";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_KEY!, { apiVersion: "2022-11-15" });
const r = Router();

r.post("/create", async (req, res) => {
  const { userId, translatorId, start, duration } = req.body;
  const amount = duration * 1000;
  const payment = await stripe.paymentIntents.create({ amount, currency: "usd" });
  const booking = await prisma.booking.create({ data: { userId, translatorId, start: new Date(start), duration, paymentIntentId: payment.id } });
  res.json({ booking, clientSecret: payment.client_secret });
});

export default r;
