/*
import React, { useRef, useEffect } from 'react';

const FiniteScrollHorizontal = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '600px',
          marginBottom: '10px',
        }}
      >
        <button onClick={scrollLeft}>◀</button>
        <button onClick={scrollRight}>▶</button>
      </div>
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          overflowX: 'hidden',
          width: '600px',
          whiteSpace: 'nowrap',
          border: '1px solid #ccc',
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            style={{
              flex: '0 0 auto',
              marginRight: '10px',
              padding: '2px',
              backgroundColor: '#f0f0f0',
              borderRadius: '5px',
              width: '250px',
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiniteScrollHorizontal;
*/


import React, { useRef } from 'react';

const FiniteScrollHorizontal = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Ajusta la velocidad de desplazamiento
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{
        display: 'flex',
        overflowX: 'hidden',
        width: '800px',
        whiteSpace: 'nowrap',
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    >
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          style={{
            border: "1px solid black",
            marginRight: '40px',
            padding: '12px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
            width: '250px',
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Item {i + 1}
        </div>
      ))}
    </div>
  );
};

export default FiniteScrollHorizontal;


