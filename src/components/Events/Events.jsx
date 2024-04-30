import Link from "next/link";
import React from "react";
import img2 from "../../assets/Rectangle 16.png";
import img3 from "../../assets/Rectangle 16-1.png";
import img4 from "../../assets/Rectangle 16-2.png";
import ticket from "../../assets/icon/Vector.png";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

const Events = () => {
  return (
    <div className="text-black bg-gray-100">
      <h2 className="text-3xl flex mt-10 justify-center font-semibold">
        Events
      </h2>
      <div className="flex justify-center items-center gap-6 mt-2">
        <p>All</p>
        <p>For you</p>
        <p>This Day</p>
        <p>This Week</p>
        <p className="bg-[#7a4af9] text-white p-1 rounded-xl">Music</p>
        <p>union</p>
      </div>

      <div className="flex flex-col md:flex-row ml-4">
        {/* card 1 */}
        <div
          style={{ borderRadius: "0px 0px 4px 18px" }}
          className="container bg-artificialNavyBlue shadow-xl border border-white "
        >
          <Image src={img2} alt="img2" />

          <div className="card-body">
            <div
              style={{
                width: "100%",
                borderTop: "2px dashed #7a4af9",
              }}
            ></div>
            <div className="flex">
              <div>
                <p className="badge badge-primary bg-[#7a4af9] text-white mb-3">
                  Music
                </p>
                <p className="text-sm flex items-center mb-4">
                  <CiLocationOn /> Celebrity Convention Hall
                </p>
                <h2 className="card-title text-black ">
                  Roufian&apos;s HSC-24 Rag <br /> Day
                </h2>
              </div>
              <div className="flex bg-white h-24 flex-col items-center">
                <span>Apr</span>{" "}
                <span className="text-4xl text-[#7a4af9] font-semibold">
                  20
                </span>{" "}
                <span>10:00 PM</span>
              </div>
            </div>
            <div className="card-actions justify-start mt-3 items-center">
              <button className="p-2 rounded-md  bg-[#7a4af9] hover:bg-[#7a4af9] text-white font-normal mr-5">
                <span className="flex items-center gap-3">
                  <Image src={ticket} alt="ticket" />
                  See Ticket
                </span>
              </button>
              <div className="flex bg-white rounded-xl items-center">
                <span className="text-2xl text-[#7a4af9] font-semibold">
                  20
                </span>{" "}
                <span className="flex flex-col">
                  Seat <span>Left</span>
                </span>
              </div>
              <button className="text-[#7a4af9] font-medium">See More</button>
            </div>
          </div>

          <div></div>
        </div>
        {/* card 2 */}
        <div
          style={{ borderRadius: "0px 0px 4px 18px" }}
          className="container bg-artificialNavyBlue shadow-xl border border-white "
        >
          <Image src={img3} alt="img2" />

          <div className="card-body">
            <div
              style={{
                width: "100%",
                borderTop: "2px dashed #7a4af9",
              }}
            ></div>
            <div className="flex">
              <div>
                <p className="badge badge-primary bg-[#7a4af9] text-white mb-3">
                  Music
                </p>
                <p className="text-sm flex items-center mb-4">
                  <CiLocationOn /> Celebrity Convention Hall
                </p>
                <h2 className="card-title text-black ">
                  Roufian&apos;s HSC-24 Rag <br /> Day
                </h2>
              </div>
              <div className="flex bg-white h-24 flex-col items-center">
                <span>Apr</span>{" "}
                <span className="text-4xl text-[#7a4af9] font-semibold">
                  20
                </span>{" "}
                <span>10:00 PM</span>
              </div>
            </div>
            <div className="card-actions justify-start mt-3 items-center">
              <button className="p-2 rounded-md  bg-[#7a4af9] hover:bg-[#7a4af9] text-white font-normal mr-5">
                <span className="flex items-center gap-3">
                  <Image src={ticket} alt="ticket" />
                  See Ticket
                </span>
              </button>
              <div className="flex  bg-white rounded-xl items-center">
                <span className="text-2xl bg-white text-[#7a4af9] font-semibold">
                  20
                </span>{" "}
                <span className="flex flex-col">
                  Seat <span>Left</span>
                </span>
              </div>
              <button className="text-[#7a4af9] font-medium">See More</button>
            </div>
          </div>

          <div></div>
        </div>
        {/* card 3 */}
        <div
          style={{ borderRadius: "0px 0px 4px 18px" }}
          className="container bg-artificialNavyBlue shadow-xl border border-white "
        >
          <Image src={img4} alt="img2" />

          <div className="card-body">
            <div
              style={{
                width: "100%",
                borderTop: "2px dashed #7a4af9",
              }}
            ></div>
            <div className="flex">
              <div>
                <p className="badge badge-primary bg-[#7a4af9] text-white mb-3">
                  Music
                </p>
                <p className="text-sm flex items-center mb-4">
                  <CiLocationOn /> Celebrity Convention Hall
                </p>
                <h2 className="card-title text-black ">
                  Roufian&apos;s HSC-24 Rag <br /> Day
                </h2>
              </div>
              <div className="flex bg-white h-24 flex-col items-center">
                <span>Apr</span>{" "}
                <span className="text-4xl text-[#7a4af9] font-semibold">
                  20
                </span>{" "}
                <span>10:00 PM</span>
              </div>
            </div>
            <div className="card-actions justify-start mt-3 items-center">
              <button className="p-2 rounded-md  bg-[#7a4af9] hover:bg-[#7a4af9] text-white font-normal mr-5">
                <span className="flex items-center gap-3">
                  <Image src={ticket} alt="ticket" />
                  See Ticket
                </span>
              </button>
              <div className="flex bg-white rounded-xl items-center">
                <span className="text-2xl text-[#7a4af9] font-semibold">
                  20
                </span>{" "}
                <span className="flex flex-col">
                  Seat <span>Left</span>
                </span>
              </div>
              <button className="text-[#7a4af9] font-medium">See More</button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Events;
