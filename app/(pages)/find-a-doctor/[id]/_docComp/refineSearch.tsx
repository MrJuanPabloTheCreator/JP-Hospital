"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import LocationInput from "@/app/(pages)/find-a-doctor/[id]/_docComp/locationInput";


const RefineSearch = () => {
    const params = useSearchParams()
    const specialty = params.get('specialty')

    const [formData, setFormData] = useState<Array<{ specialty_id: number, specialty_name: string }>>([]);
    const [specialtyId, setSpecialtyId] = useState<Number | undefined>();
    const [specialtyName, setSpecialtyName] = useState<string | undefined>(specialty ? specialty : undefined);
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
        //   toast.error('Specialty or Location has not being selected')
          console.error("Specialty ID, and user Location is undefined");
        }
    };

    const handleLocationSelect = (currentLocation: GeolocationCoordinates | string | void | undefined) => {
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
        <div className="flex flex-col space-y-2 mx-2">
            <div className="flex justify-center mt-2 space-x-2 w-full">
                <h2 className="text-xl font-semibold text-blue-950">Refine Search</h2>
                <VscSettings className="text-pink-700" size={28}/>
            </div>
            <div>
                <button 
                    className="w-full flex border-2 py-2" 
                    onClick={() => {specialties ? (setSpecialties(false)) : (setSpecialties(true))}}
                >
                    <p className="w-full flex justify-between items-center font-semibold mx-2">
                        {specialtyName ? specialtyName : 'Select Specialty'}
                        {specialties ? (<RiArrowDropUpLine size={28}/>):(<RiArrowDropDownLine size={28}/>)}
                    </p>
                </button>
                {specialties ? (
                    <div className="h-[400px] overflow-scroll w-full">
                        {formData.map((item) => (
                            <div key={item.specialty_id} className="border-b-2">
                                <button className="p-2" onClick={() => {setSpecialtyId(item.specialty_id), setSpecialtyName(item.specialty_name), setSpecialties(false)}}>{item.specialty_name}</button>
                            </div>
                        ))}  
                    </div>
                    ) : ('')
                }
            </div>
            <LocationInput onSelect={handleLocationSelect} style=""/>
            <button className="py-2 text-xl font-semibold text-white bg-pink-700" onClick={search}>Search</button>
        </div>
    )
}

export default RefineSearch