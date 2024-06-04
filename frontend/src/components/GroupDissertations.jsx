import React from 'react';
import GroupCard from './GroupCard';
import { Desertation } from '../utils/Desertation'; // Import the JSON data

const GroupDissertation = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {Desertation.map((dissertation, index) => (
        <GroupCard key={index} dissertation={dissertation} />
      ))}
    </div>
  );
};

export default GroupDissertation;
