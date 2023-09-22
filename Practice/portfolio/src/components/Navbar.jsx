import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../assets/logo.svg";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const pages = ["Home", "Skills", "Projects", "Contact"];

function ResponsiveAppBar() {
  const Logo = styled("img")({
    width: "50px",
    height: "50px",
  });
  const customedTheme = useTheme();
  const [activeButton, setActiveButton] = useState("Home");

  const handleClick = (page) => {
    setActiveButton(page);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none !important" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Logo src={logo} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page)}
                variant="text"
                sx={{
                  my: 2,
                  color: activeButton === page ? "white" : "gray",
                  display: "block",
                  position: "relative", // Added position relative
                  "&:hover": {
                    backgroundColor:
                      activeButton === page
                        ? customedTheme.palette.primary.main
                        : "transparent",
                  },
                  // Added CSS transitions for the underline effect
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: customedTheme.palette.primary.main,
                    transform:
                      activeButton === page ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "bottom left",
                    transition: "transform 0.5s ease-in",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* lets connect button/ */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                backgroundColor: customedTheme.palette.primary.main,
              }}
            >
              Lets Connect
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
