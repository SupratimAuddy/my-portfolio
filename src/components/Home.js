// src/components/Home.js
import React from 'react';
import profileImage from './profile.jpg';

function Home() {
  return (
    <div className="text-center">
      <img src={profileImage} alt="Profile" className="rounded-circle" width="150" height="150" />
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Supratim Auddy, a passionate web developer with experience in building dynamic web applications.</p>
    </div>
  );
}

export default Home;
