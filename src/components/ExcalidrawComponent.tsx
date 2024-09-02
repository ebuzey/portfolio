import React, { useState, useEffect } from 'react';

// Crear un mock de `process` en el entorno del navegador
if (typeof process === 'undefined') {
  window.process = { env: {} };
}

function ExcalidrawComponent() {
  const [ExcalidrawComponent, setExcalidrawComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Cargar Excalidraw dinámicamente solo en el cliente
    import('@excalidraw/excalidraw').then((module) => {
      setExcalidrawComponent(() => module.Excalidraw);
    });
  }, []);

  return (
    <div style={{ height: '500px', border: '1px solid black', borderRadius: '8px' }}>
      {ExcalidrawComponent ? <ExcalidrawComponent /> : 'Cargando Excalidraw...'}
    </div>
  );
}

export default ExcalidrawComponent;
