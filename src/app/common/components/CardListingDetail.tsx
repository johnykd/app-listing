import { FormListingStyled, RowDetailItem, RowDetailItemLabel, RowDetailItemValue } from '@/app/createList/creatListStyled'
import React from 'react'
import AlertIcon from '../icons/AlertIcon'
import EditIcon from '../icons/EditIcon'
import UploadIcon from '../icons/UploadIcon'
import {Box,Typography,Button,Grid,Stack} from '@mui/material';

const CardListingDetail = () => {
  return (
    <>
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
    </>
  )
}

export default CardListingDetail