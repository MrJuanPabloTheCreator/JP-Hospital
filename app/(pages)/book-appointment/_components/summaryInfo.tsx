"use client"

import getDoctorInfo from "@/app/actions/getDoctorInfo";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";


const SummaryInfo = () => {
    const params = useSearchParams()

    const doctor_id = params.get('doctor_id');
    const time = params.get('time');
    var date;
    if(params.get('date')){
        date = params.get('date')
    } else if(params.get('udate')){
        date = params.get('udate')
    }

    const [formData, setFormData] = useState<{ 
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
    }>();

    const getDocInfo = async () => {
        const response = await getDoctorInfo(doctor_id)
        setFormData(response[0])
    }

    useEffect(() => {
        getDocInfo()
    }, [doctor_id])

    return (
        <div className="text-lg font-semibold">
            <img src={`/Screenshots/${formData?.photo_path}`} alt='Photo' className='rounded-lg w-40'/>
            <div className='flex flex-col text-black w-60 my-3'>
                <h1 className='font-bold text-3xl'>Dr.{formData?.last_name}, {formData?.name}</h1>
                <div className='font-medium'>
                    <p>{formData?.specialty_name_1} & {formData?.specialty_name_2}</p>
                </div>
            </div>
            <div>
                <h1 className="text-slate-600">Date and Time</h1>
                <p>{date} / {time}</p>
            </div>
            <div>
                <h1 className="text-slate-600">Location</h1>
                <p>{formData?.city_name}</p>
            </div>
        </div>
    )
}

export default SummaryInfo;