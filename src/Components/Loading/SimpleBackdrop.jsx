import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function SimpleBackdrop({open}) {



  return (
    <div>
      <Backdrop
   sx={{
        color: '#1B51B8',
        zIndex: (theme) => theme.zIndex.drawer + 999, 
         backgroundColor: '#fff', 
      }}
        open={open}
      >
        <CircularProgress color="inherit" size={60}/>
      </Backdrop>
    </div>
  );
}
