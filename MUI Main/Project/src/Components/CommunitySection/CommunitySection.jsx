import React from "react";
import { Stack, SvgIcon, Typography } from "@mui/material";
import "./CommunitySection.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import "@mdi/font/css/materialdesignicons.min.css";
import SendIcon from "@mui/icons-material/Send";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ForumIcon from "@mui/icons-material/Forum";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IonIcon } from "@ionic/react";
import { logoGithub } from "ionicons/icons";
import './CommunityMedia.css';

const CommunitySection = () => {
  return (
    <>
      <Stack className="communitySectionHeading">
        <Typography id='joinMedia' fontSize={"38px"} fontWeight={"800"}>
          Join Us On This Exciting Journey!
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <Typography className="communitySectionHeadinDot"></Typography>
          <Typography className="communitySectionHeadingLine"></Typography>
        </Stack>
      </Stack>

      <Stack className="communitySectionTitle">
        <Typography id='developeMedia' fontSize={"26px"}>
          Developing beneficial AI systems requires people from a wide range of
          disciplines and backgrounds.
        </Typography>
      </Stack>

      <Stack className="communitySectionAllLogoSection">
        <Stack direction={"row"} className="upperSideCommunitySection">
          <Stack className="svGithub">
            <svg
              width="320px"
              height="400px"
              viewBox="0 0 345 343"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="main"
                stroke="none"
                stroke-width="1"
                fill-rule="evenodd"
                fill="rgb(101, 31, 255)"
                transform="rotate(-90, 172.5, 171.5)"
                opacity={"0.5"}
              >
                <path
                  d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </svg>

            <Stack className="githubStackCommunity">
              <IonIcon
                className="githubCommunity"
                icon={logoGithub}
                style={{ fontSize: "150px", color: "rgb(101, 31, 255)" }}
              />

              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(101, 31, 255)"
              >
                Github
              </Typography>
            </Stack>
          </Stack>

          {/* Teligram Community */}

          <Stack className="teliMainCommunity">
            <Stack className="teligramCommunity">
              {/* <SvgIcon style={{ transform: "rotate(0deg)" }}>
                <use href="/images/decoration/circle-medium.svg#main"></use>
              </SvgIcon> */}

              <svg
                width="260px"
                height="343px"
                viewBox="0 0 345 343"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="main"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                  fill="rgb(0, 229, 255)"
                  opacity={"0.6"}
                >
                  <path
                    d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </svg>

              <Stack className="teligramIconCommunity">
                <SendIcon
                  sx={{ fontSize: "80px", color: "rgb(0, 229, 255)" }}
                />
                <Typography
                  className=""
                  fontSize={"18px"}
                  fontWeight={"600"}
                  color="rgb(0, 229, 255)"
                >
                  Teligram
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* YoutubeCommunitySection */}

          <Stack className="teliMainCommunity Youtube">
            <Stack className="teligramCommunity">

              <svg
                width="200px"
                height="200px"
                viewBox="0 0 345 343"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="main"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                  fill="rgb(255, 64, 129)"
                  opacity={"0.6"}
                  transform="rotate(110, 172.5, 171.5)"
                >
                  <path
                    d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </svg>

              <Stack className="YoutubeIconCommunity">
                <YouTubeIcon
                  sx={{ fontSize: "50px", color: "rgb(255, 64, 129)" }}
                />
                <Typography
                  className=""
                  fontSize={"18px"}
                  fontWeight={"600"}
                  color="rgb(255, 64, 129)"
                >
                  Teligram
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="teliMainCommunity podcast">
            <Stack className="teligramCommunity">
              <svg
                width="260px"
                height="200px"
                viewBox="0 0 345 343"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="main"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                  fill="rgb(255, 64, 129)"
                  opacity={"0.6"}
                  transform="rotate(-50, 172.5, 171.5)"
                >
                  <path
                    d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </svg>

              <Stack className="YoutubeIconCommunity">
                <PodcastsIcon
                  sx={{ fontSize: "50px", color: "rgb(255, 64, 129)" }}
                />
                <Typography
                  className=""
                  fontSize={"18px"}
                  fontWeight={"600"}
                  color="rgb(255, 64, 129)"
                >
                  Teligram
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="svGithub Discorrd">
            <svg
              width="320px"
              height="343px"
              viewBox="0 0 345 343"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="main"
                stroke="none"
                stroke-width="1"
                fill-rule="evenodd"
                fill="rgb(101, 31, 255)"
                transform="rotate(20, 172.5, 171.5)"
                opacity={"0.5"}
              >
                <path
                  d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </svg>

            <Stack className="githubStackCommunity">
              <ForumIcon
                className="githubCommunity"
                style={{ fontSize: "150px", color: "rgb(101, 31, 255)" }}
              />

              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(101, 31, 255)"
              >
                Discord
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction={"row"} className="lowerCommunityIcon">
          <Stack className=" Twitter">
            <Stack className="teligramCommunity">
              <svg
                width="260px"
                height="343px"
                viewBox="0 0 345 343"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="main"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                  fill="rgb(0, 229, 255)"
                  opacity={"0.6"}
                  transform="rotate(200, 172.5, 171.5)"
                >
                  <path
                    d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </svg>

              <Stack className="teligramIconCommunity" id='twitterC'>
                <TwitterIcon
                  sx={{ fontSize: "80px", color: "rgb(0, 229, 255)" }}
                />
                <Typography
                  className=""
                  fontSize={"18px"}
                  fontWeight={"600"}
                  color="rgb(0, 229, 255)"
                >
                  Teligram
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="teliMainCommunity Mail">
            <Stack className="teligramCommunity">
              {/* <SvgIcon style={{ transform: "rotate(0deg)" }}>
                <use href="/images/decoration/circle-medium.svg#main"></use>
              </SvgIcon> */}

              <svg
                width="200px"
                height="200px"
                viewBox="0 0 345 343"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="main"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                  fill="rgb(255, 64, 129)"
                  opacity={"0.6"}
                  transform="rotate(190, 172.5, 171.5)"
                >
                  <path
                    d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </svg>

              <Stack className="YoutubeIconCommunity">
                <MailIcon
                  sx={{ fontSize: "50px", color: "rgb(255, 64, 129)" }}
                />
                <Typography
                  className=""
                  fontSize={"18px"}
                  fontWeight={"600"}
                  color="rgb(255, 64, 129)"
                >
                  Teligram
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="svGithub Reddit">
            <svg
              width="320px"
              height="343px"
              viewBox="0 0 345 343"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="main"
                stroke="none"
                stroke-width="1"
                fill-rule="evenodd"
                fill="rgb(101, 31, 255)"
                transform="rotate(120, 172.5, 171.5)"
                opacity={"0.5"}
              >
                <path
                  d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                  id="Combined-Shape"
                ></path>
              </g>
            </svg>

            <Stack className="githubStackCommunity">
              <RedditIcon
                className="githubCommunity"
                style={{ fontSize: "150px", color: "rgb(101, 31, 255)" }}
              />

              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(101, 31, 255)"
              >
                Discord
              </Typography>
            </Stack>
          </Stack>

          <Stack className="teliMainCommunity facebook">
            <Stack className="teligramCommunity">
              {/* <SvgIcon style={{ transform: "rotate(0deg)" }}>
                <use href="/images/decoration/circle-medium.svg#main"></use>
              </SvgIcon> */}

              <svg
                width="260px"
                height="343px"
                viewBox="0 0 345 343"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="main"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                  fill="rgb(0, 229, 255)"
                  opacity={"0.6"}
                  transform="rotate(90, 172.5, 171.5)"
                >
                  <path
                    d="M151.028325,2.84217094e-14 C162.07402,2.84217094e-14 171.028325,8.7787304 171.028325,19.6078431 C171.028325,30.4369559 162.07402,40 151.028325,40 L151.302,39.997 L151.377122,40.4744384 C128.458128,44.0702097 106.196256,53.7556343 87.1309499,69.7533257 C31.2850943,116.613563 24.0139073,199.888909 70.8902991,255.754017 C117.766691,311.619125 201.039526,318.919016 256.885381,272.058779 C312.731237,225.198542 320.002424,141.923196 273.126032,86.0580879 C259.640094,69.9861726 243.141754,57.9338248 225.150723,50.0342658 L225.301057,49.6912708 C219.45996,46.071889 215.528325,39.3749442 215.528325,32.1078431 C215.528325,21.2787304 224.258773,12.5 235.028325,12.5 C237.189258,12.5 239.268093,12.8534425 241.210776,13.5059726 L241.246769,13.4252475 C264.686693,23.7173992 286.181837,39.4200551 303.752241,60.3596472 C364.826383,133.144975 355.352925,241.642453 282.592681,302.695546 C209.832438,363.74864 101.338232,354.237785 40.2640901,281.452458 C-20.8100516,208.66713 -11.336594,100.169652 61.4236498,39.1165584 C86.0871661,18.4214109 114.85653,5.8340923 144.493079,1.0706938 C146.541069,0.376836974 148.739809,2.84217094e-14 151.028325,2.84217094e-14 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </svg>

              <Stack className="teligramIconCommunity">
                <FacebookIcon
                  sx={{ fontSize: "80px", color: "rgb(0, 229, 255)" }}
                />
                <Typography
                  className=""
                  fontSize={"18px"}
                  fontWeight={"600"}
                  color="rgb(0, 229, 255)"
                >
                  Teligram
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack> 


      {/* Media Query */}

      <Stack className="gitMainMedia">
        <Stack className="gitLogo">
              <IonIcon
                className="githubCommunity"
                icon={logoGithub}
                style={{ fontSize: "100px", color:'rgb(101, 31, 255)' }}
              />

              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(101, 31, 255)"
              >
                Github
              </Typography>
        </Stack>

        <Stack className="gitLogo" id='TeligramMedia'>
            <SendIcon
                  sx={{ fontSize: "100px", color: "rgb(0, 229, 255)" }}
                />
              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(0, 229, 255)"
              >
                Teligram
              </Typography>
        </Stack>


        <Stack className="gitLogo" id='TeligramMedia'>
              <TwitterIcon
                  sx={{ fontSize: "100px", color: "rgb(0, 229, 255)" }}
                />
              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color= "rgb(0, 229, 255)"
              >
                Twitter
              </Typography>
        </Stack>

        <Stack className="gitLogo" id='mailMedia'>
              <MailIcon
                  sx={{ fontSize: "100px", color: "rgb(255, 64, 129)" }}
                />
              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(255, 64, 129)"
              >
                Mail
              </Typography>
        </Stack>

        <Stack className="gitLogo">
              <RedditIcon
                  sx={{ fontSize: "100px", color:"rgb(101, 31, 255)" }}
                />
              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(101, 31, 255)"
              >
                Reddit
              </Typography>
        </Stack>

        <Stack className="gitLogo"  id='TeligramMedia'>
              <FacebookIcon
                  sx={{ fontSize: "100px", color: " rgb(0, 229, 255)" }}
                />
              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color=" rgb(0, 229, 255)"
              >
                Facebook
              </Typography>
        </Stack>

        <Stack className="gitLogo" id='mailMedia' >
              <YouTubeIcon
                  sx={{ fontSize: "100px", color: "rgb(255, 64, 129)" }}
                />
              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(255, 64, 129)"
              >
                Mail
              </Typography>
        </Stack>

        <Stack className="gitLogo" id='mailMedia'>
              <PodcastsIcon
                  sx={{ fontSize: "100px", color: "rgb(255, 64, 129)" }}
                />
              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(255, 64, 129)"
              >
                Podcast
              </Typography>
        </Stack>

        <Stack className="gitLogo">
              <ForumIcon
                  sx={{ fontSize: "100px", color: "rgb(101, 31, 255)" }}
                />
              <Typography
                className="githubTypoCommunity"
                fontSize={"20px"}
                fontWeight={"600"}
                color="rgb(101, 31, 255)"
              >
                Discord
              </Typography>
        </Stack>
      </Stack>

    </>
  );
};

export default CommunitySection;
