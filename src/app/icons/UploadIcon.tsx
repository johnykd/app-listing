import { Box, SvgIcon,  } from '@mui/material';
import { memo } from 'react';

function UploadIcon() {
  return (
    <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="32" fill="#E5E7EB" />
    <path
      d="M41 35V36.2C41 37.8802 41 38.7202 40.673 39.362C40.3854 39.9265 39.9265 40.3854 39.362 40.673C38.7202 41 37.8802 41 36.2 41H27.8C26.1198 41 25.2798 41 24.638 40.673C24.0735 40.3854 23.6146 39.9265 23.327 39.362C23 38.7202 23 37.8802 23 36.2V35M37 28L32 23M32 23L27 28M32 23V35"
      stroke="#6C737F"
      strokeOpacity="0.5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
}

export default memo(UploadIcon);
