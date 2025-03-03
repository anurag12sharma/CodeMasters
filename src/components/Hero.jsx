import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white flex lg:flex-col flex-row justify-between items-end relative h-screen overflow-hidden'>
      <div className='text-xs absolute right-32 top-80 bg-cover lg:block hidden'>
        <iframe src="https://lottie.host/embed/3c6e5c91-32a3-4dbf-afa8-2505707593b6/BEDtRsMEfp.json" className='w-[3rem]'></iframe>
      </div>
     
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center z-10'>
        <p className='text-[#00df9a] text-2xl font-bold p-2'>
          Welcome to CodeMasters
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Empowering Coders Enabling Dreams
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            Learn to
          </p>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-2 pl-2'
            strings={['Code', 'Develop', 'Build']}
            typeSpeed={90}
            backSpeed={100}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Choose CodeMasters for an unparalleled coding experience.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
