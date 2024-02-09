import Link from "next/link"
import ImageSlider from "./components/slider"


const HomePage = () => {
  const images = [
    'AdobeStock_661787170.jpeg',
    'AdobeStock_526157669.jpeg',
    'AdobeStock_516988312.jpeg',
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <ImageSlider images={images}/>
      <div className="flex items-center justify-center text-white bg-blue-950 w-full">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-0 py-16">
          <div className="flex flex-col items-center justify-between md:px-16">
            <div className="flex flex-col items-center md:w-full">
              <p className="font-bold text-2xl">Find a doctor</p>
              <p>Discover Your Healing Partner - Find a Doctor Today.</p>
            </div>
            <Link href={'/find-a-doctor'} className="mt-2 py-2 flex justify-center w-full md:w-48 bg-pink-700 rounded-lg font-semibold">Find a Doctor</Link>
          </div>
          <div className="flex flex-col items-center justify-between md:px-16 md:border-x-2 border-pink-700">
            <div className="flex flex-col items-center md:w-full">
              <p className="font-bold text-2xl">Book an appointment</p>
              <p>Book an Appointment now with a JP Hospital doctor.</p>
            </div>
            <Link href={'/request-appointment'} className="mt-2 py-2 flex justify-center w-full md:w-48 bg-pink-700 rounded-lg font-semibold">Book an Appointment</Link>
          </div>
          <div className="flex flex-col items-center justify-between md:px-16">
            <div className="flex flex-col items-center md:w-full">
              <p className="font-bold text-2xl">Patien Care</p>
              <p>Your Wellness, Our Priority - Elevating Patient Care.</p>
            </div>
            <Link href={'/about'} className="mt-2 py-2 flex justify-center w-full md:w-48 bg-pink-700 rounded-lg font-semibold">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage