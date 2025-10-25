// generate-docs.js
import fs from "fs";
import { swaggerSpec } from "./swaggerConfig.js";

const outputDir = "./docs";
const outputFile = `${outputDir}/openapi.json`;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(outputFile, JSON.stringify(swaggerSpec, null, 2));
console.log(`✅ Dokumentation genererad: ${outputFile}`);
