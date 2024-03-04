import Link from "next/link"
import ImageSlider from "./components/slider"
import { FaLocationDot, FaUserDoctor } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";


const HomePage = () => {
  const images = [
    '/AdobeStock_661787170.jpeg',
    '/AdobeStock_526157669.jpeg',
    '/AdobeStock_516988312.jpeg',
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <ImageSlider images={images}/>
      <div className="flex items-center justify-center text-white bg-blue-950 w-full">
        <div className="flex flex-col md:flex-row justify-between py-16 2xl:py-8 3xl:py-28 w-full 2xl:mx-24">
          <div className="flex flex-col items-center justify-between mx-24 md:mx-0 md:px-10">
            <div className="flex flex-col items-center md:w-full">
              <p className="font-bold text-2xl 3xl:text-3xl">Find a doctor</p>
              <p className="3xl:text-xl">Discover Your Healing Partner - Find a Doctor Today.</p>
            </div>
            <Link href={'/find-a-doctor'} className="mt-2 py-2 flex justify-center w-full bg-pink-700 rounded-lg font-semibold">
              Find a Doctor
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between mx-24 md:mx-0 md:px-10 md:border-x-2 border-pink-700">
            <div className="flex flex-col items-center md:w-full">
              <p className="font-bold text-2xl 3xl:text-3xl">Book an appointment</p>
              <p className="3xl:text-xl">Book an Appointment now with a JP Hospital doctor.</p>
            </div>
            {/* <Link href={'/request-appointment'} className="mt-2 py-2 flex justify-center w-full md:w-48 bg-pink-700 rounded-lg font-semibold">Book an Appointment</Link> */}
            <div className="mt-2 py-2 flex justify-center bg-pink-700 w-full rounded-lg font-semibold">Book an Appointment</div>
          </div>
          <div className="flex flex-col items-center justify-between mx-24 md:mx-0 md:px-10">
            <div className="flex flex-col items-center md:w-full">
              <p className="font-bold text-2xl 3xl:text-3xl">Patient Care</p>
              <p className="3xl:text-xl">Your Wellness, Our Priority - Elevating Patient Care.</p>
            </div>
            <Link href={'/about'} className="mt-2 py-2 flex justify-center bg-pink-700 w-full rounded-lg font-semibold">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-20 space-y-5 items-center justify-center">
        <h1 className="font-bold text-3xl text-blue-900">Explore</h1>
        <div className="flex flex-col md:flex-row 2xl:w-[1000px] justify-between text-blue-900">
          <div className="flex items-center w-64 h-64 rounded-full border-[5px] border-blue-900">
            <div className="m-5 h-full w-full flex flex-col space-y-2 items-center justify-center">
              <FaHospital size={44}/>
              <a href="/specialties" className="text-xl font-semibold hover:underline">20 Specialties</a>
            </div>
          </div>
          <div className="flex items-center w-64 h-64 rounded-full border-[5px] border-blue-900">
            <div className="m-5 h-full w-full flex flex-col space-y-2 items-center justify-center">
              <FaUserDoctor size={44}/>
              <a href="/find-a-doctor/doctors" className="text-xl font-semibold hover:underline">Over 100 Professionals</a>
            </div>
          </div>
          <div className="flex items-center w-64 h-64 rounded-full border-[5px] border-blue-900">
            <div className="m-5 h-full w-full flex flex-col space-y-2 items-center justify-center">
              <FaLocationDot size={44}/>
              <p className="text-xl font-semibold">Presence in 10 Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage