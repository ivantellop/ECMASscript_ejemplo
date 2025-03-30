// index.js
import { registrarDestino, mostrarItinerario } from "./gestorviajes.js";

// Función para iniciar la aplicación
const iniciarApp = () => {
  // Registrar algunos viajes de prueba
  registrarDestino("Paris", "2024-06-15", "Avión", 2, "Lujo");
  registrarDestino("Londres", "2024-07-01", "Tren", 4, "Estándar");
  registrarDestino("New York", "2024-08-10", "Autobús", 1, "Económico");
  registrarDestino("Tokio", "2024-09-05", "Avión", 3, "Lujo");

  // Mostrar el itinerario
  mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();
