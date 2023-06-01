import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";
import "../../layout/CardBox.css";
import "./Home.css";

const CustomCard = styled(Card)({
  width: "100%",
  marginBottom: "10px",
  cursor: "pointer",
});

const CustomCardMedia = styled(CardMedia)({
  height: "200px",
  objectFit: "cover",
});

const CustomCardTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "5px",
});

const CustomCardInfo = styled(Typography)({
  marginBottom: "5px",
});

const CustomCardPrice = styled(Typography)({
  fontWeight: "bold",
});

const CustomCardStars = styled(Typography)({
  color: "gold",
});

const CardBox = ({ id, image, title, info, price, score, isFree, number }) => {
  return (
    <CustomCard>
      <CustomCardMedia component="img" image={image} alt={title} />
      <CardContent>
        <CustomCardTitle variant="h5" component="div">
          {title}
        </CustomCardTitle>
        <CustomCardInfo variant="body2" color="textSecondary">
          {info}
        </CustomCardInfo>
        <CustomCardPrice variant="body2">
          Price: {price} per hour
        </CustomCardPrice>
        <CustomCardStars variant="body2">Stars: {score}</CustomCardStars>
      </CardContent>
    </CustomCard>
  );
};

const Home = () => {
  // const [stadiums, setStadiums] = useState([]);

  // useEffect(() => {
  //   axios.get("your-api-endpoint")
  //     .then(response => {
  //       setStadiums(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);


  const stadiums = [
    {
      id: 1,
      image: "stadium1.jpg",
      title: "Stadium 1",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna",
      score: 4.5,
      number: 10,
      isFree: true,
      price: 12.500,
    },
    {
      id: 2,
      image: "stadium2.jpg",
      title: "Stadium 2",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna",
      score: 4.2,
      number: 8,
      isFree: false,
      price: 12.500,
    },
    {
      id: 3,
      image: "stadium3.jpg",
      title: "Stadium 3",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna",
      score: 4.8,
      number: 12,
      isFree: true,
      price: 12.500,
    },
    {
      id: 2,
      image: "stadium2.jpg",
      title: "Stadium 2",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna",
      score: 4.2,
      number: 8,
      isFree: false,
      price: 12.500,
    },  
  ];
  

  return (
    <>
      <Navbar />
        <div className="body_page">
        <Container>
          <div id="filter" className="filter">
            
          </div>
          <div className=" grid-container">
            {stadiums.map((stadium) => (
              <CardBox
                key={stadium.id}
                id={stadium.id}
                image={stadium.image}
                title={stadium.title}
                info={stadium.information}
                price={stadium.price}
                score={stadium.score}
                isFree={stadium.isFree}
                number={stadium.number}
              />
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
