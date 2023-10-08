import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function Messages() {
  return (
    <Box sx={{display:"flex",flexDirection:"column",width:"50%",height:"100%",justifyContent:"center",alignItems:"center",margin:"auto",gap:"1rem"}}>
      <Box>
        <img src="images/messengar.png" alt="messengar" />
      </Box>
      <Typography variant='h3'> Your Messages </Typography>
      <Typography variant='p'> Send private photos and messages to a friend or group </Typography>
      <Button  variant="contained" >SEND MESSAGE</Button>
    </Box>
  )
}
