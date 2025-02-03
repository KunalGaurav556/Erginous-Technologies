import React from 'react'
import {Box,Button,List,ListItem,ListItemText} from '@mui/material'

const ListMUI = () => {
  return (
    <>  
        <Button variant='contained' color='secondary'>Menu</Button>
        <List sx={{bgcolor:'gray', width:'250px'}} >
            <ListItem>
                <ListItemText>Home</ListItemText>
            </ListItem>

            <ListItem>
                <ListItemText>About</ListItemText>
            </ListItem>

            <ListItem>
                <ListItemText>Contact</ListItemText>
            </ListItem>

            <ListItem>
                <ListItemText>Services</ListItemText>
            </ListItem>
        </List>
    </>
  )
}

export default ListMUI