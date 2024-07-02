"use client"
import React from 'react'
import {Box,Typography,alpha,Button,Grid,Stack,Card} from '@mui/material';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import UploadIcon from '../icons/UploadIcon';
import EditIcon from '../icons/EditIcon';
import AlertIcon from '../icons/AlertIcon';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import RightIcon from '../icons/RightIcon';

const FormListingStyled = styled(Box)(() => ({
  borderRadius: '16px',
  padding: 24,
  backgroundColor: '#FFFFFF',
  boxShadow: `0px 12px 12px 0px ${alpha('#000', 0.04)}`
}));

const CircleNumber = styled(Box)(() => ({
  borderRadius: '50%',
  width: 12,
  height: 12,
  padding: 10,
  backgroundColor: '#F3F4F6',
  display:'flex',
  alignItems: 'center'
}));

export const RowDetailItem = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflowWrap: 'break-word' as const,
}));

export const RowDetailItemLabel = styled(Box)(() => ({
  flex: '0 1 50%',
}));

export const RowDetailItemValue = styled(Box)(() => ({
  flex: '0 1 50%',
  textAlign: 'right' as const,
}));

const categoryItems: any[] = [
  { id: 1, name: 'shoes' },
  { id: 2, name: 'apparel' },
  { id: 3, name: 'collectibles'},
  { id: 4, name: 'accessories'},
  { id: 4, name: 'bags'},
];

interface IShoesSizeItems {
  id: number;
  size: number;
  sizeText: string;
}

const shoesSizeItems: IShoesSizeItems[] = [
  { id: 1, size: 4.5 ,sizeText: '4.5 US' },
  { id: 2, size: 5 ,sizeText: '5 US' },
  { id: 3, size: 5.5 ,sizeText: '5.5 US' },
  { id: 4, size: 6 ,sizeText: '6 US' },
  { id: 5, size: 6.5 ,sizeText: '6.5 US' },
  { id: 5, size: 7 ,sizeText: '7 US' },
];

interface IConditionItems {
  id: number;
  value: string;
  text: string;
}

const conditionItems: IConditionItems[] = [
  {
    id: 1,
    value: "brand_new",
    text: "Brand new"
  },
  {
    id: 2,
    value: "like_new",
    text: "Pre-owned"
  }
]

interface IEquipmentItems {
  id: number;
  equipment: string;
  equipmentText: string;
}

const shoesEquipmentItems: IEquipmentItems[] = [
  {
    id: 1,
    equipment: "ORIGINAL_BOX_NO_DEFECT",
    equipmentText: "Box"
  },
  {
    id: 2,
    equipment: "ORIGINAL_BOX_WITH_DEFECT",
    equipmentText: `Box (defect)"`
  }
]

const CreateListing = () => {
  const { createList, handleSubmit, formState: { errors } } = useForm();
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
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
                  0 Item
                  </Typography>
               </Box>
                <Box>
                  <Button sx={{marginRight:1}} variant="contained">Cancel</Button>
                  <Button variant="outlined">Submit</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Stack spacing={4}>
               <FormListingStyled>
                  <Typography variant="h6" component="h1" gutterBottom>
                  Search a product to add
                  </Typography>
                <FormControl required sx={{ m: 1, minWidth: '90%',mt:4}}>
                  <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={age}
                    label="Category"
                    onChange={handleChange}
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
                      <Button variant="outlined">Place ask</Button>
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
                    <FormControl required sx={{mr:1, minWidth: '40%',mt:4}}>
                      <InputLabel id="demo-simple-select-required-label">Select Size</InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={age}
                        label="Size"
                        onChange={handleChange}
                      >
                      {
                        shoesSizeItems.map((item) => (
                          <MenuItem key={item.id} value={item.size}>{item.sizeText}</MenuItem>
                        ))
                      }
                      </Select>
                    </FormControl>
                  <FormControl required sx={{ minWidth: '40%',mt:4}}>
                    <InputLabel id="demo-simple-select-required-label">Condition</InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={age}
                      label="Condition"
                      onChange={handleChange}
                    >
                    {
                    conditionItems.map((item) =>(
                      <MenuItem key={item.id} value={item.value}>{item.text}</MenuItem>
                    ))
                   }
                    </Select>
                  </FormControl>
                  <FormControl required sx={{ minWidth: '90%',mt:4}}>
                    <InputLabel id="demo-simple-select-required-label">Equipment</InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      value={age}
                      label="Equipment"
                      onChange={handleChange}
                    >
                    {
                      shoesEquipmentItems.map((item) => (
                        <MenuItem key={item.id} value={item.equipment}>{item.equipmentText}</MenuItem>
                      ))
                    }
                    </Select>
                  </FormControl>
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
                   <Button variant="contained" size="large" sx={{borderRadius:3, backgroundColor:'rgba(27, 27, 27, 1)'}} endIcon={<RightIcon/>} disabled>Add Listing</Button>
                 </Box>

              </Stack>
            </Grid>
            <Grid item xs={7}>
               <FormListingStyled sx={{height:400}}>
                 
                </FormListingStyled>
            </Grid>
          </Grid>
      </Box>

    </>
  )
}

export default CreateListing