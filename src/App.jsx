import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AvatarCard from './components/AvatarCard';
import Modal from './components/Modal';

function App() {
  const [avatars, setAvatars] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  const cartoonAvatars = [
    'https://api.dicebear.com/7.x/bottts/svg?seed=Chandu',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Karthik',
    'https://api.dicebear.com/7.x/bottts/svg?seed=Vishnu'
  ];

  const users = ['Chandu', 'Karthik', 'Vishnu'].map((name, i) => ({
    id: i + 1,
    firstName: name,
    email: `${name.toLowerCase()}@gmail.com`,
    image: cartoonAvatars[i]
  }));

  setAvatars(users);
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 p-6">
      <Header />

    <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">


     {avatars.map((avatar) => (
  <div key={avatar.id} className="h-full">
    <AvatarCard
      firstName={avatar.firstName}
      image={avatar.image || avatar.avatar}
      email={avatar.email}
    />
  </div>
))}

      </div>

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-xl transform transition duration-300 hover:scale-105"
        aria-label="Create New Avatar"
      >
        + Create New Avatar
      </button>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
