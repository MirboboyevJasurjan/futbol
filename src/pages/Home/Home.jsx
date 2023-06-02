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
    <CustomCard>
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
    </CustomCard>
  );
};

const Home = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredStadiums, setFilteredStadiums] = useState([]);

  const regions = ['Region 1', 'Region 2', 'Region 3'];
  const citiesByRegion = {
    'Region 1': ['City 1', 'City 2', 'City 3'],
    'Region 2': ['City 4', 'City 5', 'City 6'],
    'Region 3': ['City 7', 'City 8', 'City 9'],
  };
  const stadiums = [
    {
      id: 1,
      image: 'stadium1.jpg',
      title: 'Stadium 1',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna',
      score: 4.5,
      price: 12.5,
      region: 'Region 1',
      city: 'City 1',
    },
    {
      id: 2,
      image: 'stadium2.jpg',
      title: 'Stadium 2',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna',
      score: 4.2,
      price: 12.5,
      region: 'Region 1',
      city: 'City 2',
    },
    {
      id: 3,
      image: 'stadium3.jpg',
      title: 'Stadium 3',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna',
      score: 4.8,
      price: 12.5,
      region: 'Region 2',
      city: 'City 4',
    },
    {
      id: 4,
      image: 'stadium2.jpg',
      title: 'Stadium 2',
      information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam sem ut urna',
      score: 4.2,
      price: 12.5,
      region: 'Region 2',
      city: 'City 5',
    },
  ];

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setSelectedCity('');
    filterStadiums(region, '');
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    filterStadiums(selectedRegion, city);
  };

  const filterStadiums = (region, city) => {
    if (region === '' && city === '') {
      setFilteredStadiums(stadiums);
    } else if (region !== '' && city === '') {
      const filteredByRegion = stadiums.filter((stadium) => stadium.region === region);
      setFilteredStadiums(filteredByRegion);
    } else if (region !== '' && city !== '') {
      const filteredByRegionAndCity = stadiums.filter(
        (stadium) => stadium.region === region && stadium.city === city
      );
      setFilteredStadiums(filteredByRegionAndCity);
    } else {
      setFilteredStadiums([]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="body_page">
        <Container>
          <div className="filter">
            <FormControl variant="outlined" sx={{ minWidth: 200, marginRight: 10 }}>
              <InputLabel>Region</InputLabel>
              <Select value={selectedRegion} onChange={handleRegionChange} label="Region">
                <MenuItem value="">All Regions</MenuItem>
                {regions.map((region) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ minWidth: 200, marginRight: 10 }}>
              <InputLabel>City</InputLabel>
              <Select
                value={selectedCity}
                onChange={handleCityChange}
                label="City"
                disabled={!selectedRegion}
              >
                <MenuItem value="">All Cities</MenuItem>
                {citiesByRegion[selectedRegion] &&
                  citiesByRegion[selectedRegion].map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

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
