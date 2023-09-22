import { Box, createTheme } from "@mui/material";
import "./App.css";
import NavBar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import backgroundImage from "./assets/banner-bg.png";
import HeroSection from "./components/HeroSection";
const Theme = createTheme({
  palette: {
    primary: {
      main: "#144552",
    },
    secondary: {
      main: "#390000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <NavBar />
        <Box>
          <HeroSection />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
