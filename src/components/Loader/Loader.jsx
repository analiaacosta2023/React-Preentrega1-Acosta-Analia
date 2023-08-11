import React from 'react'
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



function Loader(props) {


  return (
    <Box>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: "#FD90D4",
          animationDuration: '550ms',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  )
}

export default Loader