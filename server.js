// server.js
import express from "express";
const app = express();

// Port som funkar både lokalt och i App Service
const port = process.env.WEBSITES_PORT || process.env.PORT || 8080;

// === Root route ===
// Används ofta av App Service för att verifiera att containern kör
app.get("/", (_req, res) => res.send("Hello from App Service + ACR!"));

// === Enkel API-endpoint för frontend (Uppgift 7) ===
app.get("/api/hello", (_req, res) => {
  res.json({
    message: "Hej från backend!",
    environment: process.env.NODE_ENV || "unknown",
    timestamp: new Date().toISOString(),
  });
});

// === Test-endpoint för Log Stream + 500 ===
app.get("/boom", (_req, res) => {
  console.error(`[TEST-ERROR] ${new Date().toISOString()} – medvetet fel`);
  res.status(500).json({ ok: false, error: "Boom (test 500)" });
});

// === Starta servern ===
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
