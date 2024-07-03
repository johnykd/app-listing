import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Box,Typography} from '@mui/material';
import NoListingIcon from '@/app/common/icons/NoListinIcon';

const columns: GridColDef[] = [
  { field: 'productName', headerName: 'PRODUCT NAME', width: 200 },
  { field: 'productDetail', headerName: 'PRODUCT DETAIL', width: 180 },
  {
    field: 'price',
    headerName: 'PRICE',
    type: 'number',
    width: 120,
  },
  {
    field: 'quantity',
    headerName: 'QUANTITY',
    sortable: false,
    width: 120,
  },
  {
    field: 'type',
    headerName: 'TYPE',
    sortable: false,
    width: 120,
  },
];

export const rowsMock = [
  { id: 1, productName: 'Nike Dunk Low', productDetail: 'us7 | Brand new', price: 'xx,xxx' ,quantity:1, type:'ask'},
];

const TableListItems = ({rowsData}:any) => {
  return (
    <>
    {
        rowsData.length !==0 ? (
            <DataGrid
            rows={rowsData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        ):(
            
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
                <NoListingIcon />
                <Typography mt={4} variant='body1' component='p'>You currently have no Listing & pre-order listing</Typography>
            </Box>
        )
    }
    
    </>
  )
}

export default TableListItems