import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
      
      <div>
          <h1>LOGIN HERE!</h1>
              <TextField variant='outlined' label='name' /><br/><br/>
              <TextField variant='outlined' label='age' /><br/><br/>
          <TextField variant='outlined' label='number' /><br /><br />
          <TextField variant='outlined' label='Password' /><br /><br />
          <Button variant="text">press</Button>
          <Button variant="contained">login</Button>
<Button variant="outlined">go back</Button>
          
          </div>
  )
}

export default Signup2