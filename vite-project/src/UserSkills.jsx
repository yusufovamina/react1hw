import React from 'react';

const UserSkills = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default UserSkills;
