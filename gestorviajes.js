// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (
  destino,
  fecha,
  transporte,
  personas = 1,
  alojamiento = "Económico"
) => {
  const nuevoViaje = {
    destino,
    fecha,
    transporte,
    personas,
    alojamiento,
    costo: calcularCosto(destino, transporte, personas, alojamiento),
  };

  destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte, personas, alojamiento) => {
  let costoBase = 0;

  // Costo base por destino
  const tarifasDestino = {
    Paris: 500,
    Londres: 400,
    "New York": 600,
    Tokio: 700,
    Madrid: 450,
  };

  costoBase = tarifasDestino[destino] || 300; // Valor por defecto si el destino no está en la lista

  // Costo adicional por tipo de transporte
  const tarifasTransporte = {
    Avión: 250,
    Tren: 150,
    Autobús: 50,
  };

  costoBase += tarifasTransporte[transporte] || 0;

  // Costo adicional por alojamiento
  const tarifasAlojamiento = {
    Económico: 50,
    Estándar: 100,
    Lujo: 200,
  };

  costoBase += tarifasAlojamiento[alojamiento] || 0;

  // Aplicar descuento si hay más de 3 personas
  if (personas >= 3) {
    costoBase *= 0.9; // 10% de descuento
  }

  return costoBase * personas;
};

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
  if (destinos.length === 0) {
    console.log("No hay viajes registrados.");
    return;
  }

  console.log("✈️ Itinerario de Viajes: ");
  destinos.forEach(
    ({ destino, fecha, transporte, personas, alojamiento, costo }) => {
      console.log(`Destino: ${destino}`);
      console.log(`Fecha: ${fecha}`);
      console.log(`Transporte: ${transporte}`);
      console.log(`Alojamiento: ${alojamiento}`);
      console.log(`Personas: ${personas}`);
      console.log(`Costo Total: $${costo}`);
      console.log("---------------------------");
    }
  );
};
