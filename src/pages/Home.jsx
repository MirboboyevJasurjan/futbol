import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Container } from "@mui/material";
import CardBox from "../layout/CardBox";

function Home() {
  const stadiums = [
    {
      id: 1,
      image: "stadium1.jpg",
      title: "Stadium 1",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna",
      score: 4.5,
      number: 10,
      isFree: true,
      price: 12.500
    },
    {
      id: 2,
      image: "stadium2.jpg",
      title: "Stadium 2",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna",
      score: 4.2,
      number: 8,
      isFree: false,
      price: 12.500
    },
    {
      id: 3,
      image: "stadium3.jpg",
      title: "Stadium 3",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna",
      score: 4.8,
      number: 12,
      isFree: true,
      price: 12.500
    }
  ];

  return (
    <>
      <Navbar />
      <Container>
        <div className="body_page">

          {stadiums.map((e,i) => {
            <CardBox 
              id={e.id}
              image={e.image}
              title={e.title}
              info={e.information}
              price={e.price}
              score={e.score}
              isFree={e.isFree}
              number={e.number}
            />
          })}

        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
