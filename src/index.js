import express from "express";
import { engine } from "express-handlebars"; // Asegúrate de importar correctamente el motor de plantillas
import path from "path";
import { fileURLToPath } from "url";
import asistenciaRoutes from "./routes/asistencia.route.js";

const app = express();

// Para obtener la ruta del directorio cuando usas módulos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de express-handlebars
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware para parsear datos del formulario
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/asistencia", asistenciaRoutes);

// Ruta principal
app.get("/", (req, res) => {
  res.render("index");
});

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Iniciar el servidor
const PORT = process.env.PORT || 3001; // Cambia el puerto a 3001 para evitar conflictos
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
