import styled from "@emotion/styled";
import {Box,alpha} from '@mui/material';

export const FormListingStyled = styled(Box)(() => ({
    borderRadius: '16px',
    padding: 24,
    backgroundColor: '#FFFFFF',
    boxShadow: `0px 12px 12px 0px ${alpha('#000', 0.04)}`
  }));

export const CircleNumber = styled(Box)(() => ({
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