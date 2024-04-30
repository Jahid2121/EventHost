import Image from "next/image";
import verified from "../../assets/icon/fi-sr-shield-check.png"
import rocketPay from "../../assets/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo 1.png"
import bkash from "../../assets/image 9.png"
import nogod from "../../assets/Group 40.png" 

const Payments = () => {
    return (
        <div>
            <div className='text-black mt-10 mb-32 md:overflow-hidden flex mx-auto items-center bg-gradient-to-b from-white via-white to-[#F1F3FF] flex-col    md:w-[1160px] rounded-xl md:h-[700px] '>
                <h2 className=' text-4xl font-bold'>SIMPLIFY TICKETING</h2>
                <p className=' text-[#7a4af9] '>First Ever Unique QR Ticketing <br />Platform For Event Registration & Booking
                    Secure Payment with</p>
                <div className="bg-[#7a4af9] flex text-white btn hover:bg-[#7a4af9] mt-2">
                    <Image src={verified} alt="verified Image" />
                    Secure Payment with
                </div>

                    <div className="flex flex-col gap-6 mt-12 relative">
                        {/* payment option div 1 */}
                        <div  className="w-[360px] h-[513px] bg-[#8C3494]    md:absolute rounded-3xl right-64     z-10 top-28">
                        <div  className="flex  flex-col justify-center items-center ">

<div className=" bg-white w-20 h-4 mt-4 rounded-lg"></div>
<Image src={rocketPay} alt="rocket" className="  mt-36" />
</div>  
                        </div>
                        {/* payment option div 2 */}
                        <div className="w-[360px] h-[513px] bg-[#ED0A80] z-20  border  top-8 rounded-3xl">
                            <div  className="flex  flex-col justify-center items-center ">

                        <div className=" bg-white w-20 h-4 mt-4 rounded-lg"></div>
                        <Image src={bkash} alt="rocket" className="  mt-36 " />
                        </div>  
                        </div>
                        {/* payment option div 3 */}
                        <div className="w-[360px] h-[513px] bg-green-700 bg-gradient-to-t from-[#ED1C24] top-28 rounded-3xl to-[#F7941D]     md:absolute left-64 z-10">
                            <div  className="flex  flex-col justify-center items-center ">

                        <div className=" bg-white w-20 h-4 mt-4 rounded-lg"></div>
                        <Image src={nogod} alt="rocket" className="  mt-36 " />
                        </div>  
                        </div>
                    </div>
            </div>
        </div>

    );
};

export default Payments;