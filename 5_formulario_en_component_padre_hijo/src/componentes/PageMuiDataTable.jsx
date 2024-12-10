import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Box, IconButton } from "@mui/material"
import { BorderColor } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { useState } from 'react';


const theme = createTheme({
  components: {
      MuiTableCell: {
          styleOverrides: {
              root: {
                  fontFamily: 'Karbon, sans-serif !important',
                  borderBottom: 'none',
                  marginLeft: '5px',
                  margingRight: '5px',
                  textAlign: "center !important", // Centra el texto
                  '&:first-of-type': {
                      borderTopLeftRadius: '7px',
                      borderBottomLeftRadius: '7px',
                  },
                  '&:last-of-type': {
                      borderTopRightRadius: '7px',
                      borderBottomRightRadius: '7px',
                  },
                  '& .MuiButtonBase-root': {
                      width: "100%",
                      marginLeft: "0px",
                      marginRight: "0px",
                  },
              },
              head: {
                  color: `#FFF !important`,
                  textAlign: "center !important", // Centra el texto
                  '& *': {
                      color: `#FFF !important`,
                      fontFamily: 'Karbon-Bold, sans-serif',
                      textAlign: "center !important", // Centra el texto
                      fontSize: '17px', // Aquí defines el tamaño de la fuente de los encabezados
                  },
              },
          }
      },
      MuiTableBody: {
          styleOverrides: {
              root: {
                  '& .MuiTableRow-root': {
                      backgroundColor: "#A3A3A3",
                      borderRadius: '7px',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      border: `1px solid #A3A3A3`,
                  },
                  '& .MuiTableCell-body': {
                      fontSize: '16px',
                      padding: '0.8rem', //Separacion texto y bordes de cada fila
                      textAlign: "center"
                  },
                  '& .MuiTypography-root': {
                      fontSize: '16px',
                      padding: '0px',
                      textAlign: "center",
                      fontFamily: 'Karbon-Bold, sans-serif',
                  }
              }
          }
      },
      MUIDataTableHeadCell: {
          styleOverrides: {
              root: {
                  color: "#FFF !important",
                  '& .MuiTableSortLabel-root': {
                      color: "#FFF !important",
                      padding: '0px'
                  },
                  '& .MuiTableSortLabel-icon': {
                      color: "#FFF !important",
                      padding: '0px'
                  },
              },
          },
      },
      MUIDataTable: {
          styleOverrides: {
              root: {
                  boxShadow: 'none',
                  borderRadius: '15px',
              },
              paper: {
                  boxShadow: 'none',
                  borderRadius: '15px',
              }
          }
      },
      MuiTableHead: {
          styleOverrides: {
              root: {
                  '& .MuiTableCell-head': {
                      color: "#FFF",
                      backgroundColor: "#005CD1",
                      textAlign: "center !important", // Centra el texto
                      '& .MuiTableSortLabel-root': {
                          color: "#FFF",
                          justifyContent: 'center', // Asegura que el icono de ordenación esté centrado
                          position: "relative",
                          height: '100% !important'
                      },
                  }
              }
          }
      },
      MuiTableBodyRow: {
          styleOverrides: {
              root: {
                  borderRadius: '7px',
              }
          }
      }
  }
})

const PageMuiDataTable = ({ titulo = "", columnas, data, msg }) => {

const [columns, setColumns] = useState(columnas);
const [rows, setRows] = useState(data);

const options = {
  filter: false,
  search: false,
  download: false,
  print: false,
  viewColumns: false,
  selectableRows: 'none',
  pagination: false,
  elevation: 0,
  tableBodyHeight: '100%',
  tableBodyMaxHeight: '100%',
  setTableProps: () => ({
    padding: 'none',
    style: {
      boxShadow: 'none',
      textAlign: "center",
      borderRadius: '15px',
      borderSpacing: '0 0.5rem',
      borderCollapse: 'separate',
      backgroundColor: "#005CD1",
    }
  }),
  textLabels: {
    body: {
      noMatch: msg ? msg : "Lo sentimos, no existe información para mostrar.",
      toolTip: "Ordenar",
      columnHeaderTooltip: column => `Ordenar por ${column.label}`
    },
  },
}


return (
  <ThemeProvider theme={theme}>
    <MUIDataTable
      title={titulo}
      data={rows}
      columns={columns}
      options={options}
    />
  </ThemeProvider>
);
}


export default PageMuiDataTable;
