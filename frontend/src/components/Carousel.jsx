import React from 'react';
import SearchBar from './SearchBar';
import image1 from '../assets/pg3.png';
import './CarouselWithSearch.css';

const CarouselWithSearch = () => {
  return (
    <div className="relative-container">
      <div className="image-container relative">
        <img className="w-full " src={image1} alt='PG Dissertation System' />
        <div className="search-bar-container">
          <SearchBar className="search-bar" />
        </div>
      </div>
    </div>
  );
};

export default CarouselWithSearch;