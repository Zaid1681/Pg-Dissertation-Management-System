/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CounterCard = ({ title }) => {
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalStudents((prevCount) => {
        const newCount = prevCount + 1;
        return newCount > 73 ? 73 : newCount;
      });
    }, 50);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <NavLink>
      <div className="h-full w-full rounded-lg border border-stroke py-6 px-7.5 shadow-default" style={{ backgroundColor: '#24303f' }}>

        <div className="flex items-end justify-between ">
          <div>
            <h4 className="text-title-md font-bold text-white m-4">
              {title}
            </h4>
            <span className="text-sm font-medium text-white">
              Total Students: {totalStudents}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CounterCard;
