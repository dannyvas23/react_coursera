import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Box, IconButton } from "@mui/material"
import { BorderColor } from '@mui/icons-material';


const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          marginLeft: '5px',
          margingRight: '5px',
          '&:first-of-type': {
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
          },
          '&:last-of-type': {
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
          },
        },
        head: {
          color: '#FFF !important',
          '& *': {
            color: '#FFF !important',
          },
        },
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
            marginBottom: '0.8rem', // Añade espacio entre las filas
          },
          '& .MuiTableCell-body': {
            fontSize: '0.875rem',
            padding: '1rem',
            textAlign: "center"
          }
        }
      }
    },


    

    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#E6F3FF',
          fontFamily: 'Karbon-Bold, sans-serif',
          color: '#FFF',
          '& .MuiTableSortLabel-root': {
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            color: '#FFF',
          },
          '& .MuiTableSortLabel-icon': {
            color: '#FFF !important',
          },
        },
      },
  },
    MUIDataTable: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: '#005CD1',          
          fontFamily: 'Karbon-Bold, sans-serif',
          
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
            color: '#FFF',
            fontWeight: 600,
            fontSize: '0.875rem',
            backgroundColor: '#005CD1',
            fontFamily: 'Karbon-Bold, sans-serif',
            textAlign: 'center',
            
          },
        }
      }
    },
    /*MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            //marginBottom: '0.4rem',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
          },
          '& .MuiTableCell-body': {
            fontSize: '0.875rem',
            padding: '1rem',
            
          }
        }
      }
    },*/
    /*MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        }
      }
    },*/
    MuiTableBodyRow: {
      styleOverrides: {
        root: {
          
          borderRadius: '15px',
          //borderSpacing: '0 2rem',
          //borderCollapse: 'separate',
        }
      }
    }
  }
})


const PageMuiDataTable = (props) => {

  const columns = [
    {
      name: "identificacion",
      label: "Identificacion",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "nombreImpreso",
      label: "Nombre Impreso",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "numeroTarjeta",
      label: "Número de tarjeta",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "tipoTarjeta",
      label: "Tipo de tarjeta",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "estado",
      label: "Estado 231242143 34324",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "acciones",
      label: "Acciones",
      options: {
        filter: false,
        sort: false,
        customBodyRender: () => (
          <Box sx={{ display: 'flex', gap: 1 }}>
        
            <span className="text-blue-500 cursor-pointer ml-2">PIN</span>
          </Box>
        )
      }
    }
  ]

  const data = [
    {
      identificacion: "115021479",
      nombreImpreso: "DANIEL PENA BUSTOS",
      numeroTarjeta: "2330380300031021",
      tipoTarjeta: "PRINCIPAL",
      estado: "ACTIVA",
    },
    {
      identificacion: "115021479",
      nombreImpreso: "KRYSTEL PENA",
      numeroTarjeta: "2330380300200709",
      tipoTarjeta: "ADICIONAL",
      estado: "ACTIVA",
    }
  ]

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
        borderSpacing: '0 0.8rem',
        borderCollapse: 'separate',
        backgroundColor: '#F8F8F8', // Cambia 'transparent' al color que desees
      }
    })
  }


  return (
    <div style={{ padding: "15px", backgroundColor: "yellow" }}>
    <ThemeProvider theme={theme}>
      <MUIDataTable
        title={""}
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>
    </div>
  );
}


export default PageMuiDataTable;