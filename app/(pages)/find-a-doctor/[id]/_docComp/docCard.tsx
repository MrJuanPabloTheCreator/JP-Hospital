import React from 'react'
import DoctorAvailability from './docAvailability';
import { FaMapPin } from 'react-icons/fa';
import Link from 'next/link';

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

const DoctorCard: React.FC<DoctorCardProps> = ({ data }) => {
    return (
        <div className="w-full space-y-3">
            {data.map((item) => (
                <div key={item.doctor_id} className="flex justify-between items-center p-10 bg-white hover:shadow-lg">
                    <div className='flex w-[550px]'>
                            <img src={`/Screenshots/${item.photo_path}`} alt='Photo'/>
                        <div className='flex flex-col justify-center ml-5'>
                            <Link href={`/find-a-doctor/doctors/search?id=${item.doctor_id}`} className='font-bold text-3xl text-blue-900 hover:underline'>Dr.{item.last_name}, {item.name}</Link>
                            <a target="_blank" href={'/specialties'} className='text-lg font-sm hover:underline'>{item.specialty_name_1} & {item.specialty_name_2}</a>
                            <a className='hover:underline' href={`mailto:${item.email}`}>{item.email}</a>
                            <p>{item.phone}</p>
                            <div className='flex items-center font-bold hover:underline'>
                                <FaMapPin size={'20'} className='text-pink-700'/>
                                <a target="_blank" href={`https://www.google.com/maps/place/${item.city_name}`}>
                                    {item.city_name}
                                </a>
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