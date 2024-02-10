"use client"

import getSearchResults from "@/app/actions/getSearchResults";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import DoctorCard from "./_docComp/docCard";
import getZipCords from "@/app/actions/getZipCord";
import getClosestDoctor from "@/app/actions/getClosestDoctors";


const SearchPage = () => {
    const [formData, setFormData] = useState<Array<{ 
        doctor_id: number,
        name: string,
        last_name: string,
        email: string,
        phone: string,
        availability: string,
        photo_path: string,
        specialty_name_1: string,
        specialty_name_2: string,
        city_name: string,
    }>>([]);

    const [closestDoctor, setClosestDoctor] = useState<number | string | undefined>()

    const params = useSearchParams()

    const id = params.get('id')
    var userLatitude = params.get('latitude')
    var userLongitude = params.get('longitude')
    const specialty = params.get('specialty')
    const postalCode = params.get('zip-code')

    const getPageInfo = async () => {
        const doclocations = await fetch('/api/doctorsLocations', {
            method: 'GET'
        })
        const doctorsData = await doclocations.json();

        if(id !== null && userLatitude !== null && userLongitude !== null){
            const closestLocation = await getClosestDoctor(doctorsData, userLatitude, userLongitude)
            setClosestDoctor(closestLocation)

            const response = await getSearchResults({ id: id, location: closestLocation})
            setFormData(response)
            
        } else if(postalCode !== null){
            const cords = await getZipCords(postalCode);
            if(cords !== null){
                userLatitude = cords[1]
                userLongitude = cords[2]

                const closestLocation = await getClosestDoctor(doctorsData, userLatitude, userLongitude)
                setClosestDoctor(closestLocation)

                const response = await getSearchResults({ id: id, location: closestLocation})
                setFormData(response)
            } else {
                setClosestDoctor('Invalid Zip Code')
                console.log('Invalid Zipcode')
            }

        } else {
            console.log('Invalid location')
        }
        
    }

    useEffect(() => {
        getPageInfo()
    }, [])

    useEffect(() => {
        console.log('Closest Location', closestDoctor)
    }, [closestDoctor, formData])
    
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
                <h1 className="flex text-4xl font-bold text-white bg-blue-950 mt-10 mb-5 pt-28 pb-20 w-full justify-center">{specialty}, {formData[0]?.city_name}</h1>  
                <DoctorCard data={formData}/>
            </div>
        </div>
    )
}

export default SearchPage