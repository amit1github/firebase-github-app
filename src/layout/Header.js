import React from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material'
import { Menu } from '@mui/icons-material'

import {Link} from "react-router-dom"

import { UserContext } from '../Context/UserContext'



const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          {/* <Box> */}
          {/* <Link to="/"> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Git-Fire App
          </Typography>
          {/* </Link> */}
          {/* </Box> */}
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header