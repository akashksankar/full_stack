import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome2 = () => {
    var [val, setval]=useState()
    const inpt1 = () => {
        setval("React")
    }
    const inpt2 = () => {
        setval("Angular")

    }
    const inpt3 = () => {
        setval("View")
    }
    useEffect(() => { 
        inpt2()
    },[])
    return (


      <div> 
          
            <Typography varient='h3'>Welcome { val}</Typography>
          <Button variant="contained" color='primary' onClick={inpt1}>React </Button>
          <Button variant="contained" color='secondary' onClick={inpt2}>Angular</Button>
          <Button variant="contained" color='success' onClick={inpt3}>View</Button>
 </div>
  )
}

export default Welcome2