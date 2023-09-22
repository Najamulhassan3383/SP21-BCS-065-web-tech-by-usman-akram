import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import bannerImage from "../assets/header-img.svg";

const Banner = styled("img")({
  width: "100%",
  height: "100%",
});

//make an animation in which the at start the first text, second text and third does not appear,
//after 1 second the first text appears, after 2 seconds the second text appears and after 3 seconds the third text appears
// they should appear at the same place, like tranform from one text to another by transformx and transformy and overflow hidden
// and the banner image should be on the right side of the screen
// and the text should be on the left side of the screen

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  padding: "0 5rem",
});

function HeroSection() {
  return (
    <Container>
      <Box sx={{ width: "40%" }}>
        <Typography variant="h4" sx={{ color: "white" }}>
          Hi, I'm <br />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Najam ul Hassan
          </Typography>
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "lighter",
            lineHeight: "2rem",
          }}
        >
          Crafting digital experiences and unraveling the mysteries of AI –
          Where innovation meets creativity.
        </Typography>
      </Box>

      <Box sx={{ width: "40%" }}>
        <Banner src={bannerImage} alt="banner" />
      </Box>
    </Container>
  );
}

export default HeroSection;
