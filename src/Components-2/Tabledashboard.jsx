import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { colors } from '@mui/material';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        style={{color: 'white' }}
      >
        {theme.direction === 'rtl' ? <LastPageIcon  /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        style={{color: 'white' }}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        style={{color: 'white' }}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        style={{color: 'white' }}
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon style={{color: 'white' }} />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, Contact, Country) {
  return { name, Contact, Country };
}

const rows = [
  createData('Company ', ' Contact ' , 'Country'),
  createData('Paula Reyes  ', 'Justin' , 'England'),
  createData('Alfreds Futlerkiste ', 'Maria Anders' , 'Germany'),
  createData('Centro Commercial Moctezuma ', 'Franciso ' , 'Mexico'),
  createData('Rajesh Singh', 'Mohan' , 'India'),
  createData('Justin Wright ', 'Paula Reyes ' , 'Paris'),
  createData('Paula Reyes ', 'Justin Wright ' , 'Australia'),
  createData('Company ', ' Contact ' , 'Country'),
  createData('Paula Reyes  ', 'Justin' , 'England'),
  createData('Alfreds Futlerkiste ', 'Maria Anders' , 'Germany'),
  createData('Centro Commercial Moctezuma ', 'Franciso ' , 'Mexico'),
  createData('Rajesh Singh', 'Mohan' , 'India'),
  createData('Justin Wright ', 'Paula Reyes ' , 'Paris'),
  createData('Paula Reyes ', 'Justin Wright ' , 'Australia'),
]
// .sort((a, b) => (a.Contact < b.Contact ? -1 : 1));

export default function Tabledashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (

    <TableContainer component={Paper} >

      <div className='gradientdark'>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}  >
              <TableCell component="th" scope="row"  style={{color: 'white' }}>
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 ,color:"white"}} align="right">
                {row.Contact}
              </TableCell>
              <TableCell style={{ width: 160 ,color:'white' }} align="right">
                {row.Country}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }} >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination style={{color: 'white' }}
              rowsPerPageOptions={[5,10, 
                //25,
               , { label: 'All', value: -1 }
               
              ]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
               
            />
          </TableRow>
        </TableFooter>
      </Table>

      </div>
    </TableContainer>
  );
}