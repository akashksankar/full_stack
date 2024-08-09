import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
          <Typography variant="h6">Akash</Typography>
          <Link to='/l'>
            <Button variant="contained">login</Button>
          </Link>
          <Link to='/Sign'>
            <Button variant='contained'>Signup</Button>
          </Link>
          <Link to='/State'>
            <Button variant='contained'>State</Button>
          </Link>
          <Link to='/w'>
            <Button variant='contained'>Welcome</Button>
          </Link>
          <Link to='/a'>
            <Button variant='contained'>API</Button>
          </Link>
              </Toolbar>
          </AppBar>
          <br></br><br></br>
    </div>
  )
}

export default Navbar