import React from 'react'
import { Avatar, Stack } from '@mui/material'
import rootShouldForwardProp from '@mui/material/styles/rootShouldForwardProp'

const AvatarMUI = () => {
  return (
    <>
        <Stack spacing={3} direction={"row"}>
            <Stack spacing={3} direction={"row"}>
                <Avatar>AK</Avatar>
                <Avatar>CK</Avatar>
            </Stack>
        </Stack>
    </>
  )
}

export default AvatarMUI