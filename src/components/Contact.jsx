// Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className='text-white flex lg:flex-col flex-row justify-between items-end relative h-screen overflow-hidden'>
      <div className='text-xs absolute right-32 top-80 bg-cover lg:block hidden'>
        <iframe src="https://lottie.host/embed/3c6e5c91-32a3-4dbf-afa8-2505707593b6/BEDtRsMEfp.json" className='w-[3rem]'></iframe>
      </div>

      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center z-10'>
        <p className='text-[#00df9a] text-2xl font-bold p-2'>
          Contact CodeMasters
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Get in Touch
        </h1>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mb-6'>
          We'd love to hear from you! Whether you have questions, feedback,feel free to reach out.
        </p>
        <div className='flex flex-col items-center'>
          <input
            type='text'
            placeholder='Your Name'
            className='p-4 w-full md:w-2/3 lg:w-1/2 mb-4 rounded-md text-black'
          />
          <input
            type='email'
            placeholder='Your Email'
            className='p-4 w-full md:w-2/3 lg:w-1/2 mb-4 rounded-md text-black'
          />
          <textarea
            placeholder='Your Message'
            className='p-4 w-full md:w-2/3 lg:w-1/2 mb-4 rounded-md text-black'
            rows='4'
          />
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
