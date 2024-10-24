import React from 'react';
import { Linkedin, AtSign, Github } from 'lucide-react';

const Bio = () => {
   return <section className="bg-white text-left rounded-xl p-2
   md:p-5 shadow-md">
      <img src='profile-pic.png' alt='profile-picture' className='h-32 w-32 rounded-full' />
      <h1 className='text-lg md:text-2xl text-center md:text-left font-bold mt-3'>Arthur Stoliarchuk</h1>
      <p className='text-secondary-foreground py-2 text-center md:text-left'>I'm a Junior FullStack Engineer</p>
      <div className='flex flex-row gap-2 mt-2'>
         <a href="https://www.linkedin.com/in/arthurstoliarchuk/" target='_blank' rel="noopener noreferrer">
            <Linkedin className='text-blue-400 hover:text-blue-800 cursor-pointer' /> </a>
         <a href="mailto:arthurstoliarchuk@gmail.com" target='_blank' rel="noopener noreferrer">
            <AtSign className='text-pink-400 hover:text-pink-800 cursor-pointer' /> </a>
         <a href="https://github.com/ArthurStoliarchuk" target='_blank' rel="noopener noreferrer">
            <Github className='text-black hover:text-gray-500 cursor-pointer' /> </a>
      </div>
   </section>
}

export default Bio;