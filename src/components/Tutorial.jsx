// Tutorials.jsx
import React from 'react';
import Typed from 'react-typed';

const Tutorials = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center relative h-max overflow-hidden py-10'>
      <div className='text-xs absolute right-32 top-80 bg-cover lg:block hidden'>
        <iframe src="https://lottie.host/embed/3c6e5c91-32a3-4dbf-afa8-2505707593b6/BEDtRsMEfp.json" className='w-[3rem]'></iframe>
      </div>

      <div className='max-w-[800px] mt-[-96px] w-full h-fit text-center flex flex-col justify-center z-10'>
        <p className='text-[#00df9a] text-2xl font-bold p-2'>
          Tutorials at CodeMasters
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Learn, Code, Succeed
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            Master
          </p>
          <Typed
            className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-2 pl-2'
            strings={['React', 'JavaScript', 'CSS', 'Node.js', 'Python']}
            typeSpeed={90}
            backSpeed={100}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mb-6'>Explore our tutorials to enhance your skills and knowledge.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>

      <div className='max-w-[800px] w-full mx-auto text-center flex flex-col justify-center z-10'>
        <h2 className='text-3xl font-bold text-[#00df9a] mt-12'>Our Tutorials</h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 '>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>React Basics</h3>
            <p className='text-gray-400'>Get started with React by learning the fundamentals and building simple applications.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Advanced JavaScript</h3>
            <p className='text-gray-400'>Deep dive into advanced JavaScript concepts and enhance your coding proficiency.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>CSS Flexbox & Grid</h3>
            <p className='text-gray-400'>Master CSS Flexbox and Grid to create responsive and modern web layouts.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Node.js for Beginners</h3>
            <p className='text-gray-400'>Learn the basics of Node.js and start building server-side applications.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Python Data Analysis</h3>
            <p className='text-gray-400'>Explore data analysis with Python using libraries like pandas and NumPy.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>DevOps Essentials</h3>
            <p className='text-gray-400'>Understand the fundamentals of DevOps and learn essential tools and practices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
