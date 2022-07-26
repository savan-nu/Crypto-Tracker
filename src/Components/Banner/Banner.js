import { Container, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  const banner = {
    backgroundImage: "url(./banner2.jpg)",
  };
  const bannerContent = {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  };
  const tagline = {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <div style={banner}>
      <Container style={bannerContent}>
        <div style={tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "#CCCC33",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Find Your Favorite Crypto Get Ready to Invest..
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
