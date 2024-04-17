import React, { useState, useEffect } from 'react';

// Definir HOC fuera de la función componente
const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

// Componentes que reciben mousePosition como prop
const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>({mousePosition.x}, {mousePosition.y})</p>
  );
};

// Envolver componentes con HOC
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

const App_con_HOC = () => {
  return (
    <div className="App">
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
};

export default App_con_HOC;