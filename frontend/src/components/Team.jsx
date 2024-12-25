import React from 'react';
import TeamCard from './TeamCard';

// Import images from the assets folder
import member1Image from '../assets/man.jpg'; // Replace with actual file names
import member2Image from '../assets/man.jpg';
import member3Image from '../assets/woman.jpg';
import member4Image from '../assets/man.jpg';
import member5Image from '../assets/woman.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Abdirisaq Bootan',
      title: 'Backend Developer',
      image: member1Image, // Image imported from assets
    },
    {
      name: 'Mohamed Aweys',
      title: 'Frontend Developer',
      image: member2Image,
    },
    {
      name: 'Muniiro Abdinuur',
      title: 'Frontend Developer',
      image: member3Image,
    },
    
    {
      name: 'Mohamed Abdiraxman',
      title: 'Backend Developer, DB Handler',
      image: member4Image,
    },
    {
        name: 'Luul Abdulahi',
        title: 'Frontend Developer',
        image: member5Image,
      },
  ];

  return (
    <div id="team" className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            image={member.image} // Pass the imported image
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
