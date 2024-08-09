import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'



const Api = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
        })
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>id</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>UserName</TableCell>
                          <TableCell>City</TableCell>
                          <TableCell>email </TableCell>
                          <TableCell>Phone</TableCell>
                      
                        
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val)=>{
                          return (<TableRow>
                              <TableCell>{val.id}</TableCell>
                             <TableCell>{ val.name}</TableCell>
                              <TableCell>{val.username}</TableCell>
                              <TableCell>{val.address.city}</TableCell>
                              <TableCell>{ val.email}</TableCell>
                              <TableCell>{val.phone}</TableCell>
                              
                         </TableRow>
                         
                         )

                      })}
                    
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Api