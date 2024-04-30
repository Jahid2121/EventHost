import React from 'react';
import Links from '../Links/Links';
import Image from 'next/image';

const Navbar = () => {
    return (
      <div className='text-white rounded-2xl mb-10 relative bg-gradient-to-r from-[#7a4af9] via-[#784eed] to-[#b8a5eb] flex items-center justify-between'>

      {/* Left border line */}
      <div className="hidden md:block" style={{
        position: 'absolute',
        top: '8px',
        left: '25%',
        width: '50%',
        height: '70%',
        borderLeft: '1px dashed white',
        borderRight: '1px dashed white'
      }}></div>
    
      {/* Logo */}
      <div className='text-2xl pl-9'>
        <span className='font-light'>Event</span><span className='font-bold'>Host</span>
      </div>
    
      {/* Links */}
      <div className="hidden md:flex">
        <Links />
      </div>
    
      <div className="flex items-center space-x-4 pr-4 md:pr-7">
        <div className="avatar">
          <div className="w-7 rounded-full">
            <Image width={100} height={100} src="https://i.ibb.co/5M9kg9t/Professional-Profile.png" alt='avatar' />
          </div>
        </div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">3</span>
          </div>
        </div>
      </div>
    
      <div className="md:hidden flex items-center">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    
    </div>
    
    );
};

export default Navbar;