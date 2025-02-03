import React from 'react'
import {FormControlLabel,Box,Checkbox,FormGroup} from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import { useState } from 'react'
import { Co2Sharp, Javascript } from '@mui/icons-material';

const CheckBoxMUI = () => {
    const [check,setCheck] = useState(false);
    const [skills,setSkills] = useState("");

    const [Dummy,setDummy] = useState([])

    const HandleChange =(e) =>{
        if( check===false){
            setCheck(true)
        }
        else{
            setCheck(false);
        }
        console.log(check);
    }

    const HandleSkills =(e)=>{
      setSkills(e.target.value)
      setDummy([...skills,Dummy])
      console.log(Dummy);
    }
    
  return (
    <>
        <h3>Learning CheckBox MUI</h3>
        <Box>
            <FormControlLabel  control={<Checkbox color='secondary' variant='outlined' onClick={HandleChange}/>} label='I accept terms and Conditions'>    
            </FormControlLabel> <br />
        </Box>

        <Box>
          <FormControlLabel control={<Checkbox
            icon={<BookmarkBorderIcon/>}
            checkedIcon = {<BookmarkIcon/>}
            onChange={HandleChange}
          />} label='Click here to Bookmark'></FormControlLabel>

        </Box>

        <Box>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={HandleSkills}/>} value={"HTML"} label='HTML'></FormControlLabel>
                <FormControlLabel control={<Checkbox onChange={HandleSkills}/>} value={"CSS"} label="CSS"></FormControlLabel>
                <FormControlLabel control={<Checkbox onChange={HandleSkills}/>} value={"JavaScript"} label="Javascript"></FormControlLabel>
                <FormControlLabel control={<Checkbox onChange={HandleSkills}/>} value={"React"} label='React'></FormControlLabel>
            </FormGroup>
        </Box>
    </>
  )
}

export default CheckBoxMUI;