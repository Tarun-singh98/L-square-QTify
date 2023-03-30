import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import styles from "./Player.module.css";
import image from "./Rectangle2138.png";

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  width: "100%",
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "var(--color-black)",
  backdropFilter: "blur(40px)",
  borderTop:"2px solid var(--color-white)",
  boxShadow:"5px -2px 6px rgba(255, 255, 255, 0.35)",
  fontFamily: "Poppins",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  // backgroundColor: "red",
});

const TinyText = styled(Typography)({
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: 0.2,
  color: "var(--color-white)",
});

function Player({ dataSource }) {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = "var(--color-black)";
  const navBgColor = "var(--color-white)";
  const lightIconColor = "var(--color-white)";
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "var(--color-black)",
      }}
    >
      <Widget
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img
              src={image}
              alt="can't win - Chilling Sunday"
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography
              variant="caption"
              color="var(--color-white)"
              fontWeight={500}
            >
              Artist
            </Typography>
            <Typography noWrap color="var(--color-white)">
              <b>Song Name</b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25} color="var(--color-white)">
              Album Name
            </Typography>
          </Box>
        </Box>
        <Box sx={{gap:"20px"}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: "10px",
              mb: "10px",
            }}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" htmlColor={navBgColor} />
            </IconButton>
            <Box sx={{backgroundColor:"var(--color-white)", borderRadius:"50%"}}>
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded
                  sx={{ fontSize: "3rem" }}
                  htmlColor={mainIconColor}
                />
              )}
            </IconButton>
            </Box>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" htmlColor={navBgColor} />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: 700,
              display: "flex",
              justifyContent: "baseline",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => setPosition(value)}
              sx={{
                color: "var(--color-primary)",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,
                  // transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  // "&:before": {
                  //   boxShadow: "0 2px 10px 0 rgba(0,0,0,0.4)",
                  // },
                  // "&:hover, &.Mui-focusVisible": {
                  //   boxShadow: `0px 0px 0px 8px ${
                  //     theme.palette.mode === "dark"
                  //       ? "rgb(255 255 255 / 16%)"
                  //       : "rgb(0 0 0 / 16%)"
                  //   }`,
                  // },
                  // "&.Mui-active": {
                  //   width: 20,
                  //   height: 20,
                  // },
                },
                "& .MuiSlider-rail": {
                  color: "var(--color-white)",
                },
              }}
            />
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
        </Box>
        <Box>
          <Stack
            spacing={2}
            direction="row"
            sx={{ width: 200 }}
            alignItems="center"
          >
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color:
                  "green",
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-thumb": {
                  width: 10,
                  height: 10,
                  backgroundColor: "#fff",
                  "&:before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
        </Box>
      </Widget>
    </Box>
  );
}

export default Player;
