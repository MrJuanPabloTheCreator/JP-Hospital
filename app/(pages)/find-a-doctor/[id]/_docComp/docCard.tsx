import React from 'react'
import DoctorAvailability from './docAvailability';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

interface Doctor {
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
}
  
interface DoctorCardProps {
    data: Doctor[];
}

const DoctorCard : React.FC<DoctorCardProps> = ({ data }) => {
    return (
        <div className="w-full">
            {data.map((item) => (
                <div key={item.doctor_id} className="flex justify-between items-center p-10 mx-48 bg-white rounded-lg mb-2 hover:shadow-lg">
                    <div className='flex w-[550px]'>
                            <img src={`/Screenshots/${item.photo_path}`} alt='Photo' className='rounded-lg'/>
                        <div className='flex flex-col justify-center ml-5 text-black text-lg'>
                            <h1 className='font-bold text-3xl'>Dr.{item.last_name}, {item.name}</h1>
                            <div className='font-medium'>
                                <p>{item.email}</p>
                                <p>{item.phone}</p>
                            </div>
                            <div className='font-semibold'>
                                <p>{item.specialty_name_1} & {item.specialty_name_2}</p>
                                <div className='flex items-center'>
                                    <MapPin size={'20'}/>
                                    <p>{item.city_name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <DoctorAvailability doctor_id={item.doctor_id}/>
                        {/* <Link href={'/'} className='flex justify-center items-center w-64 bg-slate-400 rounded-lg py-1'>
                            <p className='text-white font-semibold'>See more hours</p>
                            <div className='ml-1 p-1 bg-green-500 rounded-full h-1 w-1'/>
                        </Link> */}
                    </div>
                </div>   
            ))}
        </div>
    )
}

export default DoctorCard