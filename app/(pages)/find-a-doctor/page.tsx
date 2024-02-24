"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LocationInput from "@/app/(pages)/find-a-doctor/_components/locationInput";
import toast from "react-hot-toast";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const FindDoctor = () => {
  const [formData, setFormData] = useState<Array<{ specialty_id: number, specialty_name: string }>>([]);
  const [specialtyId, setSpecialtyId] = useState<Number | undefined>();
  const [specialtyName, setSpecialtyName] = useState<string | undefined>();
  const [location, setLocation] = useState<GeolocationCoordinates | string | undefined>();
  const [specialties, setSpecialties] = useState<boolean>(false);

  const router = useRouter();

  const makeGetCall = async () => {
    const response = await fetch('/api/specialties', {
      method: 'GET'
    })
    const newData = await response.json();
    setFormData(newData)
  }

  const search = () => {
    if (specialtyId !== undefined && location !== undefined && typeof location === 'object') {
      router.push(`/find-a-doctor/result?id=${encodeURIComponent(specialtyId.toString())}&specialty=${encodeURIComponent(specialtyName ?? '')}&latitude=${encodeURIComponent(location?.latitude?.toString())}&longitude=${encodeURIComponent(location?.longitude?.toString())}`);
    } else if(specialtyId !== undefined && location !== undefined && typeof location === 'string'){
      router.push(`/find-a-doctor/result?id=${encodeURIComponent(specialtyId.toString())}&specialty=${encodeURIComponent(specialtyName ?? '')}&zip-code=${location}`);
    } else {
      toast.error('Specialty or Location has not being selected')
      console.error("Specialty ID, and user Location is undefined");
    }
  };

  const handleLocationSelect = (currentLocation: GeolocationCoordinates | string | undefined | void) => {
    if (typeof currentLocation === 'object'){
      setLocation(currentLocation)
      console.log('GeolocationCoordinates =>', currentLocation);
    } else if (typeof currentLocation === 'string') {
      setLocation(currentLocation)
      console.log('Number =>', currentLocation);
    } else {
      console.log('Undefined =>');
    }
    console.log('Selected location:', currentLocation);
  };

  useEffect(() => {
    // console.log(specialtyId)         //undefined
    // console.log("User's location:", location);
  }, [specialtyId, location]);

  useEffect(() => {
    makeGetCall();
  }, []);

    return (
      <div className="flex justify-center">
        <div className="mt-10 flex flex-col items-center justify-center py-28 bg-blue-950 w-full">
          <h1 className="text-6xl font-bold text-white">Find a Doctor</h1>
          <p className="text-xl text-slate-400 mt-2">Search by Specialty and Location and find the closest professional.</p>
          <div className="flex mt-4 space-x-5">
            <div className="w-[300px]">
                <button 
                    className="w-full flex border-2 py-1 bg-white rounded-lg" 
                    onClick={() => {specialties ? (setSpecialties(false)) : (setSpecialties(true))}}
                >
                    <p className="w-full flex justify-between items-center mx-2">
                        {specialtyName ? specialtyName : 'Select Specialty'}
                        {specialties ? (<RiArrowDropUpLine size={28}/>):(<RiArrowDropDownLine size={28}/>)}
                    </p>
                </button>
                {specialties ? (
                    <div className="absolute w-[300px] mt-1 h-[250px] overflow-y-scroll bg-white">
                        {formData.map((item) => (
                            <div key={item.specialty_id} className="border-b-2">
                                <button className="p-2" onClick={() => {setSpecialtyId(item.specialty_id), setSpecialtyName(item.specialty_name), setSpecialties(false)}}>{item.specialty_name}</button>
                            </div>
                        ))}  
                    </div>
                    ) : ('')
                }
            </div>
            <LocationInput onSelect={handleLocationSelect} style={'rounded-lg outline-white'}/>
            <Button className=" bg-pink-700" onClick={search}>
              Search
            </Button>
          </div>
        </div>  
      </div>
    )
  }
  
export default FindDoctor