import React from 'react';

function AvatarCard({ firstName, image, email }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center h-full">
      <img
        src={image}
        alt={firstName}
        className="w-24 h-24 rounded-full mb-4 object-cover bg-gray-100"
      />
      <h2 className="text-lg font-semibold text-gray-800">{firstName}</h2>
      <p className="text-sm text-gray-500">{email}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
        Edit
      </button>
    </div>
  );
}

export default AvatarCard;
