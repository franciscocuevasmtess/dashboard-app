import React from 'react';

function Header() {
  // return (
  //   <header style={styles.header}>
  //     <h1>Dashboard</h1>
  //   </header>
  // );
  return (
    <header className="bg-gray-800 text-white p-5 text-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </header>
  );

}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
};

export default Header;
