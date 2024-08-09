import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const Statebase = () => {
  var [val, setval] = useState("Akash")
  var [name, setname]=useState()
  const handleinput = (e) => {
    setval(e.target.value)
    console.log(e.target.value)
  }
  const submit = () => {
      setname(val)
    }
  
  return (
    <div>
      <Typography varient='h3'>Welcome {name}</Typography> <br/>
     
        <TextField id="outlined-basic" label="Enter Your Name" onChange={handleinput} variant="outlined" /> <br></br><br></br>
      <Button variant="contained" onClick={submit}>Submit</Button>
       
  
      </div>
  )
}

export default Statebase