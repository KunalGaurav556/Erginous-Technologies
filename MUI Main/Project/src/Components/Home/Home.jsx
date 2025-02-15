import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainPage from '../MainPage/MainPage'
import SlideBtn from '../SlideBtns/SlideBtn'
import GainCardPosotion from '../GainCardPosition/GainCardPosotion'
import Feature from '../Intelligent/Feature'
import HarnessSection from '../HarnessSection/HarnessSection'
import GainAction from '../GainAction/GainAction'
import AutomateSection from '../AutomateSection/AutomateSection'
import DiscoverSecton from '../DiscoverSection/DiscoverSection'
import CommunitySection from '../CommunitySection/CommunitySection'
import QuestionSection from '../QuestionSection/QuestionSection'
import CardSection from '../CardSection/CardSection'
import Join from '../JionSectionLast/Join'
import Footer from '../FooterSection/FooterSection'
import './Home.css';
import { Stack } from '@mui/material'

const Home = () => {
  return (
    <>  
      <Stack className='homeMain'>

        <Stack className='NavStack'>
          <Navbar/>
        </Stack>


        <MainPage/>
        <SlideBtn/>
        <GainCardPosotion/>
        <Feature/>
        <HarnessSection/>
        <GainAction/>
        <AutomateSection/>
        <DiscoverSecton/>
        <CommunitySection/>
        <QuestionSection/>  
        <CardSection/>
        <Join/>
        <Footer/>
      </Stack>
    </>
  )
}

export default Home