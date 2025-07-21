import { app } from "./server.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export { __filename, __dirname };

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
