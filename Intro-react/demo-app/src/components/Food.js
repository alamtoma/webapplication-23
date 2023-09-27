
import React from 'react';

const Food = ({ foodList }) => {
  return (
    <ul>
      {foodList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Food;
