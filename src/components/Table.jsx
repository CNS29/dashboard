import { TablePagination, TableSortLabel } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { PAGINATION, SORT_ORDER } from '../common/constants';

export default function TableCommon({
  rows = [],
  columns = [],
  onPageChange = () => {},
  onRowsPerPageChange = () => {},
  onSort = () => {},
}) {
  const [page, setPage] = useState(PAGINATION.PAGE);
  const [rowsPerPage, setRowsPerPage] = useState(PAGINATION.PER_PAGE);
  const [order, setOrder] = useState(SORT_ORDER.ASC);
  const [orderBy, setOrderBy] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const rows = parseInt(event.target.value, 10);
    setRowsPerPage(rows);
    onRowsPerPageChange(rows);
    setPage(PAGINATION.PAGE);
  };

  const handleSort = (field) => {
    const orderByField =
      field === orderBy
        ? order === SORT_ORDER.ASC
          ? SORT_ORDER.DESC
          : SORT_ORDER.ASC
        : SORT_ORDER.DESC;
    setOrderBy(field);
    setOrder(orderByField);
    onSort({
      sortBy: field,
      order: orderByField,
    });
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map(({ field, headerName, sortable, ...rest }) => (
              <TableCell style={rest} key={field}>
                {sortable ? (
                  <TableSortLabel
                    direction={orderBy === field ? order : SORT_ORDER.ASC}
                    onClick={() => handleSort(field)}
                  >
                    {headerName}
                  </TableSortLabel>
                ) : (
                  headerName
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              {columns.map(({ field }) => (
                <TableCell sx={{ border: 0 }} key={field}>
                  {row[field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        count={200}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
