import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { styled } from '@mui/system';
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';
import './Home.css';

const CustomCard = styled(Card)({
  width: '100%',
  marginBottom: '10px',
  cursor: 'pointer',
});

const CustomCardMedia = styled(CardMedia)({
  height: '200px',
  objectFit: 'cover',
});

const CustomCardTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '5px',
});

const CustomCardInfo = styled(Typography)({
  marginBottom: '5px',
});

const CustomCardPrice = styled(Typography)({
  fontWeight: 'bold',
});

const CustomCardStars = styled(Typography)({
  color: 'gold',
});

const CardBox = ({ id, image, title, info, price, score }) => {
  return (
    <CustomCard className='card'>
      <div className="cardInner">

      <CustomCardMedia component="img" src={image} alt={title} />
      <CardContent>
        <CustomCardTitle variant="h5" component="div">
          {title}
        </CustomCardTitle>
        <CustomCardInfo variant="body2" color="textSecondary">
          {info}
        </CustomCardInfo>
        <CustomCardPrice variant="body2">Price: {price} per hour</CustomCardPrice>
        <CustomCardStars variant="body2">Stars: {score}</CustomCardStars>
      </CardContent>
      </div>
    </CustomCard>
  );
};

const Home = () => {
  const [selectedviloyat, setSelectedviloyat] = useState('');
  const [selectedshahar, setSelectedshahar] = useState('');
  const [filteredStadiums, setFilteredStadiums] = useState([]);

  const viloyats = ['viloyat 1', 'viloyat 2', 'viloyat 3'];
  const citiesByviloyat = {
    'viloyat 1': ['shahar 1', 'shahar 2', 'shahar 3'],
    'viloyat 2': ['shahar 4', 'shahar 5', 'shahar 6'],
    'viloyat 3': ['shahar 7', 'shahar 8', 'shahar 9'],
  };
  const stadiums = [
    {
      id: 1,
      image: 'stadium1.jpg',
      title: 'Stadium 1',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna',
      score: 4.5,
      price: 12.5,
      viloyat: 'viloyat 1',
      shahar: 'shahar 1',
    },
    {
      id: 2,
      image: 'stadium2.jpg',
      title: 'Stadium 2',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna',
      score: 4.2,
      price: 12.5,
      viloyat: 'viloyat 1',
      shahar: 'shahar 2',
    },
    {
      id: 3,
      image: 'stadium3.jpg',
      title: 'Stadium 3',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna',
      score: 4.8,
      price: 12.5,
      viloyat: 'viloyat 2',
      shahar: 'shahar 4',
    },
    {
      id: 4,
      image: 'stadium2.jpg',
      title: 'Stadium 2',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna',
      score: 4.2,
      price: 12.5,
      viloyat: 'viloyat 2',
      shahar: 'shahar 5',
    },
  ];

  const handleviloyatChange = (event) => {
    const viloyat = event.target.value;
    setSelectedviloyat(viloyat);
    setSelectedshahar('');
    filterStadiums(viloyat, '');
  };

  const handleshaharChange = (event) => {
    const shahar = event.target.value;
    setSelectedshahar(shahar);
    filterStadiums(selectedviloyat, shahar);
  };

  const filterStadiums = (viloyat, shahar) => {
    if (viloyat === '' && shahar === '') {
      setFilteredStadiums(stadiums);
    } else if (viloyat !== '' && shahar === '') {
      const filteredByviloyat = stadiums.filter((stadium) => stadium.viloyat === viloyat);
      setFilteredStadiums(filteredByviloyat);
    } else if (viloyat !== '' && shahar !== '') {
      const filteredByviloyatAndshahar = stadiums.filter(
        (stadium) => stadium.viloyat === viloyat && stadium.shahar === shahar
      );
      setFilteredStadiums(filteredByviloyatAndshahar);
    } else {
      setFilteredStadiums([]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="body_page">
        <Container>
          {/* Filter */}
          <div className="filter">
            <p className='namesFilter'>{selectedviloyat ? selectedviloyat : "Viloyat"}, {selectedshahar ? selectedshahar : "Shahar/Tuman"} </p>
            <FormControl variant="outlined" sx={{ minWidth: 200, marginRight: 10 }}>
              <InputLabel>viloyat</InputLabel>
              <Select value={selectedviloyat} onChange={handleviloyatChange} label="viloyat" id="selectViloyat">
                <MenuItem value="">Barcha viloyatlar</MenuItem>
                {viloyats.map((viloyat) => (
                  <MenuItem key={viloyat} value={viloyat}>
                    {viloyat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 200, marginRight: 10 }}>
              <InputLabel>shahar</InputLabel>
              <Select
                value={selectedshahar}
                onChange={handleshaharChange}
                label="shahar"
                disabled={!selectedviloyat}
                id='selectShahar'
              >
                <MenuItem value="">Barcha shahar/tumanlar</MenuItem>
                {citiesByviloyat[selectedviloyat] &&
                  citiesByviloyat[selectedviloyat].map((shahar) => (
                    <MenuItem key={shahar} value={shahar}>
                      {shahar}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div> 
          {/* Cards */}
          <div className="grid-container">
            {filteredStadiums.map((stadium) => (
            <a href="/stadium">
              <CardBox
                  key={stadium.id}
                  id={stadium.id}
                  image={stadium.image}
                  title={stadium.title}
                  info={stadium.information}
                  price={stadium.price}
                  score={stadium.score}
                  className="card"
                  />
            </a>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
