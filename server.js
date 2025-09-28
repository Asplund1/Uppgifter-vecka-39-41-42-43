import express from "express";
const app = express();

// Port som funkar både lokalt och i App Service
const port = process.env.WEBSITES_PORT || process.env.PORT || 8080;

app.get("/", (_req, res) => res.send("Hello from App Service + ACR!"));

// === Test-endpoint för Log Stream + 500 ===
app.get('/boom', (_req, res) => {
  console.error(`[TEST-ERROR] ${new Date().toISOString()} – medvetet fel`);
  res.status(500).json({ ok: false, error: 'Boom (test 500)' });
});


app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
