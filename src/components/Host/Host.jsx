import Image from 'next/image';
import React from 'react';
import hostImg from "../../assets/Group 29.png"
import check from "../../assets/icon/check 1.png"
const Host = () => {
    return (
        <div className='bg-[#7a4af9] max-w-6xl h-[900px] md:h-[574px] flex md:flex-row flex-col items-center p-10 gap-10 text-white'>
            <Image src={hostImg} alt='hostImg' /> 
            <div>
                <h2 className='text-3xl'>Host Your Event Easily & Automatically <br /> With Us</h2>
                <h3>We Provide The Best Event Ticking & Management Solutions</h3>
                <p className='flex items-center mt-4 mb-1'><Image src={check}  className='' alt='check1' /> Host Your Event With Easy steps</p>
                <p className='flex items-center mt-4 mb-1'><Image src={check} className='' alt='check2' /> Host Your Event With Easy steps</p>
                <p className='flex items-center mt-4 mb-1'><Image src={check}  className='' alt='check3' /> Host Your Event With Easy steps</p>
                <p className='flex items-center mt-4 mb-1'><Image src={check}  className='' alt='check4' /> Host Your Event With Easy steps</p>
            </div>
        </div>
    );
};

export default Host;