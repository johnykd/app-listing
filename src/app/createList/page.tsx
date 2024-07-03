"use client"
import React, { useEffect, useState } from 'react'
import {Box,Typography,Button,Grid,Stack} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import UploadIcon from '../common/icons/UploadIcon';
import EditIcon from '../common/icons/EditIcon';
import AlertIcon from '../common/icons/AlertIcon';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import RightIcon from '../common/icons/RightIcon';
import { FormListingStyled, CircleNumber, RowDetailItem, RowDetailItemLabel, RowDetailItemValue } from './creatListStyled';
import { accessoriesEquipmentItems, apparelEquipmentItems, apparelSizeItems, bagsEquipmentItems, categoryItems, collectiblesSizeItems, conditionItems, packagingItems, shoesEquipmentItems, shoesSizeItems,listItemsData } from '../mock/createList';
import TableListItems, { rowsMock } from '../common/components/TableListItems';

const CreateListing = () => {
  const [category, setCategory] = React.useState('');
  const [size, setSize] = React.useState('');
  const [condition, setCondition] = React.useState('');
  const [equipment, setEquipment] = React.useState('');
  const [packaging, setPackaging] = React.useState('');
  const [sizeItems, setSizeItems] = useState(shoesSizeItems)
  const [equipmentItems, setEquipmentItems] = useState(shoesEquipmentItems)
  const [listItems, setListItems] = useState(listItemsData)
  const [inputs, setInputs] = useState({})
  const [isDisableSubmit, setIsDisableSubmit] = useState(true)
  const [itemsNumber, setItemsNumber] = useState(0)
  const [rowsData, setRowsData] = useState([] as any)
  
  const addListItems = () => {
    const addItems = [
      ...listItems,
      {inputs}
    ]
    setListItems(addItems)
    setItemsNumber(listItems.length)
  };

  const handleChangeCategory = (e: SelectChangeEvent) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    addListItems();
    setRowsData(rowsMock)
    console.log("list",listItems)


  }

  useEffect(() => {
    if(category){
      setIsDisableSubmit(false)
    }
    if(category === 'shoes'){
      setSizeItems(shoesSizeItems)
      setEquipmentItems(shoesEquipmentItems)
    }
    else if(category === 'apparel'){
      setSizeItems(apparelSizeItems)
      setEquipmentItems(apparelEquipmentItems)
    }
    else if(category === 'collectibles' ){
      setSizeItems(collectiblesSizeItems)
      setEquipmentItems(shoesEquipmentItems)
    }
    else if(category === 'accessories' ){
      setSizeItems(collectiblesSizeItems)
      setEquipmentItems(accessoriesEquipmentItems)
    }
    else if(category === 'bags'){
      setSizeItems(collectiblesSizeItems)
      setEquipmentItems(bagsEquipmentItems)
    }

    setInputs({
      category,
      size,
      condition,
      equipment,
      packaging
    })
   
  }, [category, condition, size,equipment,packaging]);
  
  return (
    <>
      <Box sx={{margin:4}}>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              <Typography variant="h4">
                Add Listing
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Box sx={{display:'flex',justifyContent:'space-between'}}>   
                <Box>
                  <Typography variant="body2">
                  Total
                  </Typography>
                  <Typography variant="h6">
                  {itemsNumber} Items
                  </Typography>
               </Box>
                <Box>
                  <Button sx={{marginRight:1}} variant="contained" color='error' disabled>Cancel</Button>
                  <Button variant="outlined" disabled={itemsNumber==0}>Submit</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
               <FormListingStyled>
                  <Typography variant="h6" component="h1" gutterBottom>
                  Search a product to add
                  </Typography>
                  <FormControl sx={{mr:1, minWidth: '40%',mt:4}}>
                    <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                    <Select
                      name='category'
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={category}
                      label="Category"
                      onChange={handleChangeCategory}
                    >
                    {
                      categoryItems.map((item) =>(
                        <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                      ))
                    }
                    </Select>
                  </FormControl>
                </FormListingStyled>
                <FormListingStyled>
                  <Box sx={{display:'flex'}}>
                    <CircleNumber sx={{mr:2}}>
                    <Typography variant="body1">
                      1
                      </Typography>
                    </CircleNumber>
                    <Box>
                      <Button variant="outlined" >Place ask</Button>
                      <Button variant="outlined" disabled>Pre-order</Button>
                    </Box>
                  </Box>
                  <Box sx={{display:'flex', mt:2}}>
                    <CircleNumber sx={{mr:2}}>
                    <Typography variant="body1">
                      2
                      </Typography>
                    </CircleNumber>
                    <Typography variant="h5">
                      Product detail
                      </Typography>
                  </Box>
                    <FormControl sx={{mr:1, minWidth: '40%',mt:4}}>
                      <InputLabel id="demo-simple-select-required-label">Select Size</InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={size}
                        label="Size"
                        onChange={e => setSize(e.target.value)}
                      >
                      {
                        sizeItems.map((item) => (
                          <MenuItem key={item.id} value={item.size}>{item.sizeText}</MenuItem>
                        ))
                      }
                      </Select>
                    </FormControl>
                  <FormControl sx={{ minWidth: '40%',mt:4}}>
                    <InputLabel id="demo-simple-select-required-label">Condition</InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={condition}
                      label="Condition"
                      onChange={e => setCondition(e.target.value)}
                    >
                    {
                    conditionItems.map((item) =>(
                      <MenuItem key={item.id} value={item.value}>{item.text}</MenuItem>
                    ))
                   }
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: '90%',mt:4}}>
                    <InputLabel id="demo-simple-select-required-label">Equipment</InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={equipment}
                      label="Equipment"
                      onChange={e => setEquipment(e.target.value)}
                    >
                    {
                      equipmentItems.map((item) => (
                        <MenuItem key={item.id} value={item.equipment}>{item.equipmentText}</MenuItem>
                      ))
                    }
                    </Select>
                  </FormControl>
                  {
                    category ==='collectibles' && (
                      <FormControl sx={{ minWidth: '90%',mt:4}}>
                        <InputLabel id="demo-simple-select-required-label">Packaging</InputLabel>
                        <Select
                          labelId="demo-simple-select-required-label"
                          id="demo-simple-select-required"
                          value={packaging}
                          label="Packaging"
                          onChange={e => setPackaging(e.target.value)}
                        >
                        {
                          packagingItems.map((item) => (
                            <MenuItem key={item.id} value={item.value}>{item.text}</MenuItem>
                          ))
                        }
                        </Select>
                      </FormControl>
                    ) 
                  }
                  <Typography variant="h5" mt={2}>
                    Price
                  </Typography>
                  <Box>
                  <Grid container spacing={4}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={3}>
                      <Box>
                        <Typography variant="caption">
                        Lowest ask
                        </Typography>
                        <Typography variant="body1">
                        B xx,xxx
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box>
                      <Typography variant="caption">
                      Highest ask
                      </Typography>
                      <Typography variant="body1">
                      B xx,xxx
                      </Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={3}>
                    <Box>
                      <Typography variant="caption">
                      Last sale
                      </Typography>
                      <Typography variant="body1">
                      B xx,xxx
                      </Typography>
                    </Box>
                    </Grid>
                  </Grid>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Input price</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">฿</InputAdornment>}
                        label="price"
                      />
                  </FormControl>
                    
                  </Box>
                </FormListingStyled>
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Product has defected?" />
                </FormGroup>
                <FormListingStyled>
                  <Box>
                    <Typography variant="h5">
                    Images
                    </Typography>
                    <Typography variant="caption">
                    A maximum of 10 images can be uploaded.
                    </Typography>
                  </Box>
                  <Box sx={{display:'flex',border:'1px solid',padding:6,borderRadius:4,mt:4}}>
                    <UploadIcon/>
                    <Box sx={{ml:2}}>
                      <Typography variant="h5">
                      Upload product images
                      </Typography>
                      <Typography variant="caption">
                      (Drag and drop to upload or browse files)
                      </Typography>
                    </Box>
                  </Box>
                </FormListingStyled>
                <FormListingStyled>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <Typography variant="h5">
                        Shipping Address
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{display:'grid',gridAutoFlow:'column'}}>
                    <Box>
                      <Typography variant="h5">
                      SASOM user
                      </Typography>
                      <Typography variant="caption">
                        (+66123456789) 101 ถนน สุขุมวิท 101/1 Khwaeng Bang Chak, 
                        Phra Khanong,Bangkok 10260
                      </Typography>
                    </Box>
                    <EditIcon/>
                    </Grid>
                  </Grid>
                 </FormListingStyled>
                 <FormListingStyled>
                  <Stack spacing={2}>
                    <RowDetailItem>
                      <RowDetailItemLabel>
                        <Typography variant="body1"  component="p">
                          Subtotal
                        </Typography>
                      </RowDetailItemLabel>
                      <RowDetailItemValue>
                        <Typography variant="body1" component="span">
                          B x,xxxx
                        </Typography>
                      </RowDetailItemValue>
                    </RowDetailItem>
                    <RowDetailItem>
                      <RowDetailItemLabel>
                        <Typography variant="body1"  component="p">
                        Shipping fee
                        </Typography>
                      </RowDetailItemLabel>
                      <RowDetailItemValue>
                        <Typography variant="body1" component="span">
                          B - - -
                        </Typography>
                      </RowDetailItemValue>
                    </RowDetailItem>
                    <RowDetailItem>
                      <RowDetailItemLabel>
                        <Typography variant="body1"  component="p">
                        Transaction fee
                        </Typography>
                      </RowDetailItemLabel>
                      <RowDetailItemValue>
                        <Typography variant="body1" component="span">
                          B xxxx
                        </Typography>
                      </RowDetailItemValue>
                    </RowDetailItem>
                    <RowDetailItem>
                      <RowDetailItemLabel>
                        <Typography variant="body1"  component="p">
                        Payment processing fee
                        </Typography>
                      </RowDetailItemLabel>
                      <RowDetailItemValue>
                        <Typography variant="body1" component="span">
                          B xxxx
                        </Typography>
                      </RowDetailItemValue>
                    </RowDetailItem>
                    <RowDetailItem>
                      <RowDetailItemLabel>
                        <Typography variant="h5" color="rgba(0, 185, 0, 1)" component="p">
                        Total Payout
                        </Typography>
                      </RowDetailItemLabel>
                      <RowDetailItemValue>
                        <Typography variant="h5"  color="rgba(0, 185, 0, 1)" component="span">
                          B x,xxx
                        </Typography>
                      </RowDetailItemValue>
                    </RowDetailItem>
                    <Box sx={{mt:2,display:'flex',alignItems:'center',backgroundColor:'#F8F9FA',borderRadius:4,py:2,px:3,gap:2}}>
                      <AlertIcon/>
                      <Typography variant="body1"  component="p">
                          Shipping fee will be based on the shipping method selected when confirming order.
                        </Typography>
                    </Box>
                  </Stack>
                 
                 </FormListingStyled>
                 <Box>
                   <Button type='submit' variant="contained" size="large" sx={{borderRadius:3, backgroundColor:'black'}} endIcon={<RightIcon/>} disabled={isDisableSubmit}>Add Listing</Button>
                 </Box>
                </Stack>
               </form>
            </Grid>
            <Grid item xs={7}>
               <FormListingStyled sx={{height:400}}>
                  <TableListItems rowsData={rowsData}/>
                </FormListingStyled>
            </Grid>
          </Grid>
      </Box>
    </>
  )
}

export default CreateListing