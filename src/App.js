import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Hellow</h1>} />
            <Route path="/services" element={<h1>services</h1>} />
            <Route path="/customsoftware" element={<h1>customsoftware</h1>} />
            <Route path="/mobileapps" element={<h1>mobileapps</h1>} />
            <Route path="/websites" element={<h1>websites</h1>} />
            <Route path="/revolution" element={<h1>revolution</h1>} />
            <Route path="/about" element={<h1>Hellow</h1>} />
            <Route path="/contact" element={<h1>Hellow</h1>} />
            <Route path="/estimate" element={<h1>Hellow</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
