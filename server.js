import express from "express";
const app = express();

// Port som funkar både lokalt och i App Service
const port = process.env.WEBSITES_PORT || process.env.PORT || 8080;

app.get("/", (_req, res) => res.send("Hello from App Service + ACR!"));

/**
 * Medvetet fel för uppgift 1–2:
 * - Loggas som console.error (syns i Log Stream)
 * - Svarar 500 (syns i Metrics/Alerts)
 */
app.get('/boom', (_req, res) => {
  console.error(`[TEST-ERROR] ${new Date().toISOString()} – medvetet fel`);
  res.status(500).json({ ok: false, error: 'Boom (test 500)' });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
