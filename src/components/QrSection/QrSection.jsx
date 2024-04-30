import Image from 'next/image';
import React from 'react';
import QrImg1 from "../../assets/icon/click (1) 1.png"
import QrImg2 from "../../assets/icon/click.png"
import QrImg3 from "../../assets/icon/check 1.png"
import QrImg4 from "../../assets/icon/Vector-1.png"
const QrSection = () => {
    return (
        <div className='text-black'>
          <h2 className='text-3xl flex mt-10 justify-center font-semibold'>
          Automated QR Scanner
          </h2>
<h3 className='text-[#7a4af9] text-xl flex justify-center'>Scan & Verify The Attendees Directly By Our QR Scanning Solution.</h3>
<div className=' flex md:flex-row flex-col ml-10 mt-8 gap-6'>
    {/* card 1 */}
<div className="card bg-gray-100 w-72 shadow-xl">
  <div className="card-body">
    <Image alt="qrImg" src={QrImg1} />
    <h2 className="card-title text-2xl font-bold">One Click</h2>
    <p className='font-extralight text-gray-400'>QR verification System
</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
{/* card 2 */}
<div className="card bg-gray-100 w-72 shadow-xl">
  <div className="card-body">
    <Image alt="qrImg" src={QrImg2} />
    <h2 className="card-title text-2xl font-bold">One Time</h2>
    <p className='font-extralight text-gray-400'>QR Code
</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
{/* card 3 */}
<div className="card bg-gray-100 w-72 shadow-xl">
  <div className="card-body">
    <Image alt="qrImg" src={QrImg3} />
    <h2 className="card-title text-2xl font-bold">Easy Access</h2>
    <p className='font-extralight text-gray-400'>Easily accessible
</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
{/* card 4 */}
<div className="card bg-gray-100 w-72 shadow-xl">
  <div className="card-body">
    <Image alt="qrImg" src={QrImg4} />
    <h2 className="card-title text-2xl font-bold">Mail</h2>
    <p className='font-extralight text-gray-400'>Send Bulk Personalized mail with attachments.
</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default QrSection;