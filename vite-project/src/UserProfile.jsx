import React from 'react';
import UserName from './UserName';
import UserSkills from './UserSkills';

const UserProfile = ({ name, skills }) => {
  return (
    <div>
      <UserName name={name} />
      <UserSkills skills={skills} />
    </div>
  );
};

export default UserProfile;
