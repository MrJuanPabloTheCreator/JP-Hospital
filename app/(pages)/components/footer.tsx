
const Footer = () => {
  return (
    <div className="bg-custgray py-10 px-5 text-gray-400 flex flex-col text-sm">
      <h1 className="text-white text-lg font-bold flex justify-center">Explore JP Hospital</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 justify-center max-w-[1300px] border-b-2 border-gray-400 py-10">
          <div className="grid grid-rows-6 gap-2">
            <p className="text-white font-bold">Patient Care</p>
            <p>Conditions We Treat</p>
            <p>Locations</p>
            <p>Emergency Care</p>
            <p>Virtual Urgent Care</p>
            <p>Insurance & Billing</p>
          </div>
          <div className="grid grid-rows-6 gap-2">
            <p className="text-white font-bold">About Us</p>
            <p>Our Story </p>
            <p>Jobs</p>
            <p>Vendor & Supplier Information</p>
            <p>Contact Us</p>
          </div>
          <div className="grid grid-rows-6 gap-2">
            <p className="text-white font-bold">How to Help</p>
            <p>Give</p>
            <p>Volunteer</p>
            <p>Blood Donation</p>
            <p>Organ & Tissue Donation</p>
          </div>
          <div className="grid grid-rows-6 gap-2">
            <p className="text-white font-bold">Stay Connected</p>
            <p>JP Hospital Health App </p>
            <p>NewsHub</p>
            <p>Press Releases</p>
            <p>Media Contacts </p>
            <p>Events</p>
          </div>
          <div className="grid grid-rows-6 gap-2">
            <p className="text-white font-bold">Education & Research</p>
            <p>JP Grossman School of Medicine</p>
            <p>JP Grossman Long Island School of Medicine</p>
            <p>JP Health Sciences Library</p>
            <p>JP University</p>
          </div>
        </div>
      </div>
      <div className="mx-72 mt-5">
        <h1 className="text-white font-bold text-lg">JP Hospital</h1>
      </div>
    </div>
  )
}

export default Footer