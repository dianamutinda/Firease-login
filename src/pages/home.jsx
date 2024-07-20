import React from 'react';
import { auth } from '../components/firebase';

function Home({ user }) {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.reload(); 
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome {user.displayName}</h3>
          <div>
            <p>Email: {user.email}</p>
          </div>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;