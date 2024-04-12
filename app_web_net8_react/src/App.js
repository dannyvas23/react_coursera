import './App.css';

// Componente de tabla principal
const DynamicTable = ({ headers, data }) => {
  const keys = Object.keys(data[0]);

  return (
    <table>
     
     <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
      </thead>

      <tbody>
             
        {data.map((dat, rowIndex) => (
          <tr key={rowIndex}>
            {keys.map((attribute, index) => (
              <td key={index}>{dat[attribute]}</td>
            ))}
          </tr>
        ))}

      </tbody>
    </table>
  );
};

function App() {
  
  const headers = ['Noombre', 'Edad', 'Correo electrónico'];
  const data = [
    { nombre: 'Juan', edad: 25, correo: 'juan@example.com' },
    { nombre: 'María', edad: 30, correo: 'maria@example.com' },
    { nombre: 'Pedro', edad: 28, correo: 'pedro@example.com' }
  ];

  return (
    <div className="App">
      <div>
      <h2>Tabla Dinámica</h2>
      <DynamicTable headers={headers} data={data} />
      </div>
    </div>
    
  );
  
}

export default App;



