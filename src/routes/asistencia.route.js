import { Router } from "express";

const router = Router();

// Modelo de ejemplo
let asistencias = [];

// Mostrar lista de asistencias
router.get("/list", (req, res) => {
  res.render("asistencia/list", { asistencias });
});

// Formulario para agregar asistencia
router.get("/add", (req, res) => {
  res.render("asistencia/add");
});

// Procesar nueva asistencia
router.post("/add", (req, res) => {
  const nuevaAsistencia = {
    id: asistencias.length + 1,
    nombre: req.body.nombre,
    fecha: req.body.fecha,
  };
  asistencias.push(nuevaAsistencia);
  res.redirect("/asistencia/list");
});

// Formulario para editar asistencia
router.get("/edit/:id", (req, res) => {
  const asistencia = asistencias.find((a) => a.id == req.params.id);
  res.render("asistencia/edit", { asistencia });
});

// Procesar edición de asistencia
router.post("/edit/:id", (req, res) => {
  const asistencia = asistencias.find((a) => a.id == req.params.id);
  asistencia.nombre = req.body.nombre;
  asistencia.fecha = req.body.fecha;
  res.redirect("/asistencia/list");
});

// Eliminar asistencia
router.get("/delete/:id", (req, res) => {
  asistencias = asistencias.filter((a) => a.id != req.params.id);
  res.redirect("/asistencia/list");
});

// Exportar el router por defecto
export default router;
