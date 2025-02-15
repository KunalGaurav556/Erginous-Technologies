import { Box, Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import './CardSection.css'
import './CardMedia.css'

const CardSection = () => {

  const obj = [
    {
      img : 'https://res.cloudinary.com/skyrev/image/upload/v1692613885/bungalion/photos/l1_dzinag.jpg',
      headline : 'HEADLIINE',
      content : 'Sed imperdiet enim ligula',
      action : 'READ MORE'
    },
    {
      img : 'https://res.cloudinary.com/skyrev/image/upload/v1692613886/bungalion/photos/l2_cdcwko.jpg',
      headline : 'HEADLINE',
      content : 'Sed imperdiet enim lingula,vitae viverra justo porta vel. Duis eget feli...',
      action : 'READ MORE'
    },
    {
      img : 'https://res.cloudinary.com/skyrev/image/upload/v1692613889/bungalion/photos/l4_hzzrmz.jpg',
      headline : 'HEADLINE',
      content : 'Sed imperdiet enim lingula,vitae viverra justo porta vel. Duis eget feli...',
      action : 'READ MORE'
    },
    {
      img :'https://res.cloudinary.com/skyrev/image/upload/v1692613890/bungalion/photos/l5_rpiapr.jpg',
      headline : 'HEADLINE',
      content : 'Sed imperdiet enim lingula,vitae viverra justo porta vel. Duis eget feli...',
      action : 'READ MORE'
    },
  ]


  return (
 <>
    <Stack className='latestHeading'>
        <Stack className='latestNewsSection'>
            <Typography className='HeadingNews' sx={{fontSize:'40px',fontWeight:'800'}}>Latest News</Typography>
            <Box className='latestNewsDotLiine'>
                < Typography className='latestNewsDot'></Typography>
                <Typography className='latestNewsLine'></Typography>
            </Box>
        </Stack>
        <Stack className='latestNewsCaption'>
            <Typography id='readMedia' fontSize={'23px'}>Read more about latest news and our special events</Typography>               
        </Stack>
    </Stack>

    <Stack direction={'row'} spacing={3} className='CardMainStack'>
      {
        obj.map((data,index)=>{
          return(
            <Card sx={{width:'280px',height:'400px'}} className='mainCard'>
              <CardContent className='cardImgSction'>
                <img src={data.img} alt="" width={'250px'} height={'190px'} id='cardImgSection'/>
              </CardContent>
              <CardContent>
                <Typography fontSize={'0.75rem'} fontWeight={'600'}>{data.headline}</Typography>
                <Typography fontSize={'1.25rem'} fontWeight={'600'} height={'80px'}>{data.content}</Typography>
              </CardContent>
              <CardActions>
                <Button fontWeight={'600'}>{data.action}</Button>
              </CardActions>
            </Card>
          )
        })
      }
    </Stack>
 </>
      
  )
}

export default CardSection