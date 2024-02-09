"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LocationInput from "./_components/locationInput";


const FindDoctor = () => {
  const [formData, setFormData] = useState<Array<{ specialty_id: number, specialty_name: string }>>([]);
  const [specialtyId, setSpecialtyId] = useState<Number | undefined>();
  const [specialtyName, setSpecialtyName] = useState<string | undefined>();
  const [location, setLocation] = useState<GeolocationCoordinates | string | undefined>();

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
      console.error("Specialty ID, and user Location is undefined");
    }
  };

  const handleLocationSelect = (currentLocation: GeolocationCoordinates | string | undefined) => {
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
          <p className="text-xl text-slate-400 mt-2">Navigating Wellness: Search Specialty and/or Location.</p>
          <div className="flex mt-4">
            <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder={specialtyName ? specialtyName: 'Select Speciality'} />
              </SelectTrigger>
              <SelectContent>
                {formData.map((item) => (
                    <div key={item.specialty_id} className="border-b-2">
                      <button className="p-2" onClick={() => {setSpecialtyId(item.specialty_id), setSpecialtyName(item.specialty_name)}}>{item.specialty_name}</button>
                    </div>
                ))}
              </SelectContent>
            </Select>
            <LocationInput onSelect={handleLocationSelect}/>
            <Button className="ml-5 bg-pink-700" onClick={search}>
              Search
            </Button>
          </div>
        </div>  
      </div>
    )
  }
  
export default FindDoctor