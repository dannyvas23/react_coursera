import React, { useState, useEffect } from "react";

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
                {item.hasSubMenu && <span style={{ color: 'blue' }}> ▼</span>}
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

        <a href="https://www.freecodecamp.org/espanol/news/lista-de-codigos-de-teclas-en-javascript/" target="_blank">ATAJOS TECLADO</a><br/>
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

      {/* <div className="dropdown">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          ⋮
        </button>
        {isOpen && (
          <div className="dropdown-content show">
            <a href="#">Download</a>
            <a href="#">Delete</a>
            <a href="#">Rename</a>
            <a href="#">Copy to</a>
            <a href="#">Move to</a>
            <a href="#">Copy link</a>
            <a href="#">
              Folder Color <span style={{ color: 'blue' }}>Reset</span>
            </a>
            <a href="#">Permissions</a>
          </div>
        )}
      </div> */}

      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Ocultar' : 'Mostrar'}
        </button>
        <div className={`sliding-div ${isVisible ? 'visible' : 'hidden'}`}>
          Este es el contenido del div.
        </div>


      </div>


    </div>
  );
};

export default App;
