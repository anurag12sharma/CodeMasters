import React from 'react';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 relative'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <iframe src="https://lottie.host/embed/fbc7dcba-bde6-40a4-9586-da06f4466778/vaM61ZGpu8.json" className='w-[30rem] h-[25rem]'></iframe>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Why We're Your</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Best Code Learning Choice?</h1>
          <p>
          Unveil the essence of CodeMasters: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
