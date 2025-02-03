import React from 'react'
import {Paper,Box,Card,CardActions,CardContent,Typography,Button, Stack, CardMedia, collapseClasses} from '@mui/material'
// import './PaperAndCard.css'
import './Global.css'

const PaperAndCard = () => {
  return (
    <>
        <Paper className='Paper'>
             <Stack spacing={2}>
                   <Box className='Box' flexDirection={'row'}>
                 <Card className='card'>
                    <CardMedia 
                    component={'img'}
                    height={"150px"}
                    width={"300px"}
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDKuQ1FORP3elBFpZ58hE6RyHswO5-nVfTQ&s'
                    />
                    <CardContent>
                        <Typography variant='h4'>
                            Know More 
                        </Typography>
                        <Typography variant='body'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, perferendis nostrum ipsam quo voluptatum, ducimus quibusdam voluptatem blanditiis perspiciatis excepturi quae esse amet dicta deleniti. Omnis eius voluptatem dolorem tempora.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Share</Button>
                        <Button>See More</Button>
                    </CardActions>
                </Card>

                <Card sx={{width:'300px',padding:'1rem'}}>
                    <CardContent>
                        <Typography variant='h4'>
                            Know More 
                        </Typography>
                        <Typography variant='body'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, perferendis nostrum ipsam quo voluptatum, ducimus quibusdam voluptatem blanditiis perspiciatis excepturi quae esse amet dicta deleniti. Omnis eius voluptatem dolorem tempora.
                        </Typography>
                    </CardContent>
                  
                    <CardActions>
                        <Button>Share</Button>
                        <Button>See More</Button>
                    </CardActions>
                    <CardMedia
                    component={"img"}
                    image='https://www.shutterstock.com/image-photo/fluffy-lion-cub-animated-style-260nw-2556807805.jpg'
                    height={"200px"}
                    width={"300px"}
                    />
                </Card>

                <Card sx={{width:'300px',padding:'1rem'}}>
                    <CardContent>
                        <Typography variant='h4'>
                            Know More 
                        </Typography>
                        <Typography variant='body'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, perferendis nostrum ipsam quo voluptatum, ducimus quibusdam voluptatem blanditiis perspiciatis excepturi quae esse amet dicta deleniti. Omnis eius voluptatem dolorem tempora.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Share</Button>
                        <Button>See More</Button>
                    </CardActions>
                </Card>
                </Box>
             </Stack>
        </Paper>
    </>
  )
}

export default PaperAndCard