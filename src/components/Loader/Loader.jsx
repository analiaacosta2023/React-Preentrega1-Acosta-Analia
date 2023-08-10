import React from 'react'
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';



function Loader(props) {

   
  return (
    <div><CircularProgress
    variant="determinate"
    sx={{
      color: (theme) =>
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    }}
    size={40}
    thickness={4}
    {...props}
    value={100}
  />
  <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#FD90D4' : '#256a76'),
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      /></div>
  )
}

export default Loader