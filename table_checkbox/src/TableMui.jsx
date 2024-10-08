import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';

const customTheme = createTheme({
    components: {
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {
            backgroundColor: '#E6F3FF', // Light blue background
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            fontSize: '11px',
            /*padding: "0px"*/
          },
        },
      },
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            fontFamily: 'Karbon, sans-serif',
            fontSize: '17px',
            textAlign: 'center', // Center align body text
          
          },
        },
      },
      MUIDataTable: {
        styleOverrides: {
          root: {
            '& .css-1q1u3t4-MuiTableRow-root': {
              borderSpacing: '0 1rem',
              borderCollapse: 'separate'
            },
            '& .css-1ex1afd-MuiTableCell-root ': {
                borderBottom: "0px",
                borderSpacing: '0 1rem',
              borderCollapse: 'separate'
            },
            '& .css-1ygcj2i-MuiTableCell-root ': {
                padding: "0px",
                textAlign: "center"
            },
            '& .css-1w1rijm-MuiButtonBase-root-MuiButton-root ': { //Boton
                width: "100%"
            },
          },
        },
      },
      
    },
  });

const TableMui = (props) =>{
    const columns = [
        {
          name: "name",
          label: "Name",
        },
        {
          name: "company",
          label: "Company",
        },
        {
          name: "city",
          label: "City",
        },
        {
          name: "state",
          label: "State",
        },
      ];
    
      const data = [
        ["John Doe", "Test Corp", "Yonkers", "NY"],
        ["Joe Smith", "Logistics LLC", "San Francisco", "CA"],
        /*["Jane Doe", "Tech Inc", "Seattle", "WA"],
        ["Chris Paul", "Finance Co", "Los Angeles", "CA"],*/
      ];
    
      const options = {
        filter: false,
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        selectableRows: 'none',
        elevation: 0,
        tableBodyHeight: '100%',
        tableBodyMaxHeight: '100%',
        textLabels: {
          body: {
            noMatch: "Sorry, no matching records found",
          },
        },
      };
    
      return (
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <MUIDataTable
            title={""}
            data={data}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      );
}


export default TableMui