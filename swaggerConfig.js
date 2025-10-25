import { fileURLToPath } from "url";
import { dirname } from "path";
import swaggerJSDoc from "swagger-jsdoc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Andreas Backend API",
      version: "1.0.0",
      description: "Automatiskt genererad dokumentation via Swagger JSDoc",
    },
  },
  apis: [`${__dirname}/server.js`], // Den fil som innehåller dina routes
};

export const swaggerSpec = swaggerJSDoc(options);
