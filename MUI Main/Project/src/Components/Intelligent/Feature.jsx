import { Box, Stack ,Typography} from '@mui/material'
import React from 'react'
import './Feature.css'
import BorderComp from '../ExtraComponents/Border'

const Feature = () => {
  return (
    <>  
        {/* Heading Section */}
        <Stack className='intelligentHaading'>
           <Typography variant='h2' className='intelligentHeadingTitle'>Intelligent AI And Content Analysis</Typography>
          <Box className="boxBorderComponent">
            <BorderComp/>
          </Box>
        </Stack><br /><br />


        {/* Title Section */}
        <Stack>
              <Typography variant='body' className='intelligentTitle'>Enable your applications to understand and generate human language.</Typography>
        </Stack>

    </>
  )
}

export default Feature