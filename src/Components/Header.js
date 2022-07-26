import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
const style = {
  flex: 1,
  color: "gold",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
};
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const nevigate = useNavigate();
  const { currency, setCurrency } = CryptoState();
  console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => {
                nevigate("/");
              }}
              variant="h6"
              style={style}
            >
              Crypto Tracker
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
