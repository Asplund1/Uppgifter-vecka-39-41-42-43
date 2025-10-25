import express from "express";
import dotenv from "dotenv";
dotenv.config(); // Laddar in .env-filen

const app = express();

// Läs in port från .env, annars fallback till Azure eller 8080
const port = process.env.WEBSITES_PORT || process.env.PORT || 8080;

// Root route
app.get("/", (_req, res) => res.send("Hello from App Service + ACR!"));
/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Hämtar ett hälsningsmeddelande
 *     description: Returnerar ett JSON-objekt med hälsning, miljö och tid.
 *     responses:
 *       200:
 *         description: Lyckad hämtning
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 environment:
 *                   type: string
 *                 timestamp:
 *                   type: string
 */

// === Enkel API-endpoint för frontend (Uppgift 7) ===
app.get("/api/hello", (_req, res) => {
  res.json({
    message: "Hej från backend!",
    environment: process.env.NODE_ENV || "unknown",
    timestamp: new Date().toISOString(),
  });
});

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Visa Swagger UI (index.html)
app.use("/api/docs", express.static(path.join(__dirname, "api", "docs")));

// Gör openapi.json tillgänglig
app.get("/api/docs/openapi.json", (_req, res) => {
  res.sendFile(path.join(__dirname, "docs", "openapi.json"));
});

// Start servern
app.listen(port, () => {
  console.log(`✅ Server running on ${process.env.BASE_URL || "http://localhost:" + port}`);
});