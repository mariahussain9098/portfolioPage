import React from 'react';
import myPic from '../assets/images/bg.jpg';

function MyFigure() {
  return (
    <div className='pr-44 flex items-end relative'>
      <figure>
        <img src={myPic} alt="Profile Image" />
      </figure>
      <div className="bg-white w-96 h-96 lg:w-[1000px] lg:h-[1000px] rounded-full absolute -right-32 -bottom-80 -z-10 overflow-hidden"></div>
    </div>
  );
}

export default MyFigure;
