import React, { useState, useEffect } from "react";
import FiniteScrollHorizontal from "./FiniteScrollHorizontal";
import TableMui from "./TableMui";

const data = [
  { id: 1, usuario: "Usuario 1", edad: 25, telefono: "123456789" },
  { id: 2, usuario: "Usuario 2", edad: 30, telefono: "987654321" },
  { id: 3, usuario: "Usuario 3", edad: 35, telefono: "456123789" }
];

const App = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    setAllSelected(selectedRows.length === data.length);
  }, [selectedRows]);

  useEffect(() => {
    //const ingresoNeto = ((datosFinancieros.montoIngresos - datosFinancieros.montoEgresos - datosFinancieros.montoGastosFinancieros + Number(datosFinancieros.montoRestaGstFinanciero)))
    const ingresoNeto = ((2000 - 1000 - 300 + 0))

    const valorCP = ingresoNeto * 0.4; //TODO: valor temporal
    const taza = 0.167;
    const plazo = 12;
    //const tazaVsPlazo = Number((taza / plazo).toFixed(2));
    const tazaVsPlazo = (taza / plazo);



    const numerador = (Math.pow(1 + tazaVsPlazo, plazo) - 1);
    const denominador = (tazaVsPlazo * (Math.pow(1 + tazaVsPlazo, plazo)));
    const nuevoCupoSugerido = valorCP * (numerador / denominador);

    console.log(`NETO ${ingresoNeto}, cp ${valorCP}, tazaPla ${tazaVsPlazo}, nuevoCupo ${nuevoCupoSugerido}`);

    const todo = valorCP * ((Math.pow(1 + tazaVsPlazo, plazo) - 1) / (tazaVsPlazo * (Math.pow(1 + tazaVsPlazo, plazo))));

    console.log(`Num ${numerador}, Den ${denominador}, todo ${todo}`);

  }, []);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(data.map(row => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const toggleRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleRowCheckboxChange = (id) => {
    toggleRow(id);
    if (allSelected && selectedRows.length !== data.length) {
      setAllSelected(false);
    }
  };

  const handleSelectAllCheckboxChange = () => {
    toggleSelectAll();
    setAllSelected(!allSelected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Rows:", selectedRows);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const DropdownMenu = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }

    return (
      <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          ⋮
        </button>
        {isOpen && (
          <div className="dropdown-content show">
            {items.map((item, index) => (
              <a href="#" key={index}>
                {item.label}
                {item.hasSubMenu && <span style={{ color: 'green' }}> ▼</span>}
              </a>
            ))}
          </div>
        )}
      </div>
    );

  }

  const menuItems = [
    { label: 'Download' },
    { label: 'Delete' },
    { label: 'Rename' },
    { label: 'Copy to' },
    { label: 'Move to' },
    { label: 'Copy link' },
    { label: 'Folder Color', hasSubMenu: true },
    { label: 'Permissions' },
  ];

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  useEffect(() => {
    const handleKeyDown = (event) => {
      /*if (event.ctrlKey) {
        console.log("HOLA");
      }*/
      if (event.ctrlKey && event.key === '1') {
        event.preventDefault();
        document.getElementById('input1').focus();
      }

    };

    // Agregar el evento keydown
    document.addEventListener('keydown', handleKeyDown);

    // Limpiar el evento keydown
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);




  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            id="input1"
            type="checkbox"
            checked={allSelected}
            onChange={handleSelectAllCheckboxChange}
            tabIndex="1"
          />
          Seleccionar todo
        </label>
        <table>
          <thead>
            <tr>
              <th>Seleccionar</th>
              <th>Usuario</th>
              <th>Edad</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowCheckboxChange(row.id)}
                  />
                </td>
                <td>{row.usuario}</td>
                <td>{row.edad}</td>
                {/* <td>{row.telefono} </td> */}
                <td><DropdownMenu items={menuItems}></DropdownMenu></td>

              </tr>
            ))}
          </tbody>
        </table>

        <a href="https://www.freecodecamp.org/espanol/news/lista-de-codigos-de-teclas-en-javascript/" target="_blank">ATAJOS TECLADO</a><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          required
        />
        <button type="submit" tabIndex="2">Enviar</button>
      </form>

      <br />
      <br />
      <br />



      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Ocultar' : 'Mostrar'}
        </button>
        <div className={`sliding-div ${isVisible ? 'visible' : 'hidden'}`}>
          Este es el contenido del div.
        </div>
      </div>


      <br />
      <br />
      <br />

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", width: "100%" }}>
        <FiniteScrollHorizontal />
      </div>


      <br />
      <br />

            <TableMui></TableMui>

    </div>
  );
};

export default App;
