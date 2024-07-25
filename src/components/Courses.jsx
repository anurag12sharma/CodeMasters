// Courses.jsx
import React from 'react';
import Typed from 'react-typed';

const Courses = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center relative h-max py-10 overflow-hidden'>
      <div className='text-xs absolute right-32 top-80 bg-cover lg:block hidden'>
        <iframe src="https://lottie.host/embed/3c6e5c91-32a3-4dbf-afa8-2505707593b6/BEDtRsMEfp.json" className='w-[3rem]'></iframe>
      </div>

      <div className='max-w-[800px] mt-[-96px] w-full h-fit mx-auto text-center flex flex-col justify-center z-10'>
        <p className='text-[#00df9a] text-2xl font-bold p-2'>
          Courses at CodeMasters
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
            strings={['Web Development', 'Data Science', 'Machine Learning', 'Mobile Apps', 'Cybersecurity']}
            typeSpeed={90}
            backSpeed={100}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mb-6'>Explore our courses to take your skills to the next level.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>

      <div className='max-w-[800px] w-full mx-auto text-center flex flex-col justify-center z-10'>
        <h2 className='text-3xl font-bold text-[#00df9a] mt-12'>Our Courses</h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6'>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Introduction to Programming</h3>
            <p className='text-gray-400'>Learn the basics of programming with our comprehensive introduction course. Perfect for beginners!</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Web Development</h3>
            <p className='text-gray-400'>Master the art of web development. From HTML and CSS to advanced JavaScript frameworks.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Data Structures & Algorithms</h3>
            <p className='text-gray-400'>Strengthen your problem-solving skills by learning essential data structures and algorithms.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Machine Learning</h3>
            <p className='text-gray-400'>Dive into the world of machine learning and artificial intelligence with our detailed course.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Mobile App Development</h3>
            <p className='text-gray-400'>Learn to build responsive and interactive mobile applications for iOS and Android.</p>
          </div>
          <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-600 cursor-pointer'>
            <h3 className='text-2xl font-bold mb-2'>Cybersecurity</h3>
            <p className='text-gray-400'>Understand the fundamentals of cybersecurity and how to protect systems from attacks.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
