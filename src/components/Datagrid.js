import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
  },
  {
    field: 'website',
    headerName: 'Website',
    width: 160,
  },
];


export default function CustomDataGrid() {

    const data = [] /* TO DO */

    return (
        <Box sx={{ width: '100%' }}>
        <DataGrid
            autoHeight
            rows={data}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
                },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
        />
        </Box>
    );
}
