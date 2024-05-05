import React from 'react';

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-44 py-3 mb-5 cursor-pointer'>
      <header className='text-[#EDA751] font-bold text-lg'>Maria Hussain</header>
      <ul className='flex gap-10 ml-auto'> 
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
      </ul>
    </nav>
  );
}

export default Navbar;
