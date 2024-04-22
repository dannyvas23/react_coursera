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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={allSelected}
            onChange={handleSelectAllCheckboxChange}
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
                <td>{row.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default App;
