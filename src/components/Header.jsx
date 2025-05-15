import React from 'react';

export default function Header({ userName }) {
  return (
    <header className="mb-10 text-center">
      <h1 className="text-4xl font-extrabold text-purple-700">
        Welcome back, {userName}! <span role="img" aria-label="wave">👋</span>
      </h1>
      <p className="text-lg text-gray-700 mt-2">Here’s your AI dashboard.</p>
    </header>
  );
}
