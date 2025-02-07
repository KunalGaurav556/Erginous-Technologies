import React from 'react'
import { Stack, Typography } from '@mui/material'
import './CommunitySection.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import "@mdi/font/css/materialdesignicons.min.css";
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ForumIcon from '@mui/icons-material/Forum';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IonIcon } from '@ionic/react';
import { logoGithub } from 'ionicons/icons';

const CommunitySection = () => {
  return (
    <>
        <Stack className='communitySectionHeading'>
            <Typography fontSize={'38px'} fontWeight={'800'}>Join Us On This Exciting Journey!</Typography>
            <Stack direction={'row'} spacing={1}>
                <Typography className='communitySectionHeadinDot'></Typography>
                <Typography className='communitySectionHeadingLine'></Typography>
            </Stack>
        </Stack>

        <Stack className='communitySectionTitle'>
            <Typography fontSize={'20px'}>Developing beneficial AI systems requires people from a wide range of disciplines and backgrounds
            </Typography>
        </Stack>

        <Stack>
            <Stack direction={'row'}>
            <IonIcon className='githubCommunity' icon={logoGithub} style={{ fontSize: "230px",     color: "rgb(127, 83, 223)"}} />
                <TelegramIcon  id='teligramCommunity' sx={{ fontSize: 36, color: "#0088cc" }} />
                <YouTubeIcon id='youtubeCommunity'/>
                <PodcastsIcon id='podcastCommunity'/>
                <ForumIcon id='forumIconCommunity'/>
            </Stack>
            <Stack direction={'row'}>
                <TwitterIcon id='twitterIconcommunity'/>
                <MailIcon id='mailIconCommunity'/>
                <RedditIcon id='redditCommunity'/>
                <FacebookIcon/>
            </Stack>
        </Stack>
    </>
  )
}

export default CommunitySection