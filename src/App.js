// import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/Homepage";
import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./Components/Header";
function App() {
    
//   const classess = useStyles();
  const mystyle ={
    background:"#14161a",
    color : "white",
    minHeight : "100vh"
  }
  return (
    <BrowserRouter>
      <div style={mystyle}>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/coins/:id" element={<CoinPage />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
