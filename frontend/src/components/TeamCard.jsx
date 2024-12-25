import React from 'react';

const TeamCard = ({ name, title, image }) => {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{name}</h3>
      <p className="text-gray-600 text-center">{title}</p>
     
    </div>
  );
};

export default TeamCard;
