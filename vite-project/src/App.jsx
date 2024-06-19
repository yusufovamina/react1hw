import React from 'react';
import UserProfile from './UserProfile';

const App = () => {
  const userName = 'Ali Aliyev';
  const userSkills = ['JavaScript', 'C#', 'Python'];

  return (
    <div>
      <UserProfile name={userName} skills={userSkills} />
    </div>
  );
};

export default App;
