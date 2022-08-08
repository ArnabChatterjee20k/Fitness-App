import React from 'react'
import { Box , Stack , Typography } from '@mui/material'

import Logo from "../assets/assets/images/Logo-1.png"
const Footer = () => {
  return (
    <Box mg="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pt="20px" mt="10px">
          Made with ❤ by Arnab Chatterjee
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer