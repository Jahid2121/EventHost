import React from 'react';
import img1 from "../../assets/Rectangle 8.png"
import Image from 'next/image';
import ticket from "../../assets/icon/Vector.png";
const Banner = () => {
    return (
        <div>
             <div className="carousel w-full md:w-[1152px] h-[400px]">
            <div id="slide1" className="carousel-item relative w-full">
                <Image src={img1} alt='bannerImage' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba( 21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-3xl font-bold'>CMA Fest</h2>
                        <p>Make memories that will last a lifetime. See your favorite artists live at CMA Fest!</p>
                        <div className='flex '>
                            <button className="btn  bg-[#7a4af9] hover:bg-[#7a4af9] text-white font-normal mr-5">
                                <span className='flex items-center gap-3'><Image src={ticket} alt='ticket' />
                                Get Ticket</span></button>
                            <button  className="btn btn-outline ">Explore All Events</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
        
        </div>
    );
};

export default Banner;