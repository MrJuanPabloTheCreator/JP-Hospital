import getAvailability from "@/app/actions/getDoctorAvailability";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


interface DoctorAvailabilityProps {
    doctor_id: number;
}


const DoctorAvailability: React.FC<DoctorAvailabilityProps> = ({doctor_id}) => {
    const currentDate: Date = new Date();

    const [activeDate, setActiveDate] = useState<Date>(currentDate)
    const [formattedDate, setFormattedDate] = useState<String>(currentDate.toISOString().slice(0, 10))
    const [availability, setAvailability] = useState<Array<{
        doctor_id: number | undefined,
        date: Date | undefined,
        time_slot_1: number | undefined, 
        time_slot_2: number | undefined, 
        time_slot_3: number | undefined, 
        time_slot_4: number | undefined, 
        time_slot_5: number | undefined, 
        time_slot_6: number | undefined, 
        time_slot_7: number | undefined, 
        time_slot_8: number | undefined
    }>>([])

    const addDay = function (){
        const nextDay = new Date(activeDate);
        nextDay.setDate(nextDay.getDate() + 1);

        setActiveDate(nextDay);
    }

    const lessDay = function (){
        const nextDay = new Date(activeDate);
        nextDay.setDate(nextDay.getDate() - 1);

        setActiveDate(nextDay);
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getAvailability(doctor_id, activeDate.toISOString().slice(0, 10));
            setAvailability(data)
        }
        getData();
        setFormattedDate(activeDate.toISOString().slice(0, 10));
    }, [doctor_id, activeDate])

    return (
        <div>
            <div className="flex justify-between items-center mx-2">
                <button className="bg-pink-700 text-white px-2 py-1 rounded-lg" onClick={lessDay}>
                    <ChevronsLeft />
                </button>
                <div className="flex flex-col">
                    <p className="font-semibold text-md text-blue-900">{activeDate.toLocaleString('en-US', { weekday: 'long' })}</p>
                    <p className="font-bold text-lg text-blue-900">{activeDate.toLocaleString('en-US', { month: 'short' })} {activeDate.toLocaleString('en-US', { day: 'numeric' })}</p>
                </div>
                <button className="bg-pink-700 text-white px-2 py-1 rounded-lg" onClick={addDay}>
                    <ChevronsRight />
                </button>
            </div>
            {availability.length >= 1 ? (
                availability.map((item) => (
                    <div key={item.doctor_id}>
                        <div className="bg-white p-2 rounded-xl font-medium">
                            <div className="grid grid-cols-3 gap-2 h-40">
                                {item.time_slot_1 === 1 ? (
                                    <button disabled={true} className='p-1 rounded-lg'/>
                                ):( 
                                    <Link 
                                        href={`/book-appointment?doctor_id=${doctor_id}&udate=${formattedDate}&time=${'8:00 AM'}&time-slot=${1}`} 
                                        className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                        8:00 AM
                                    </Link>
                                )}
                                {item.time_slot_2 === 1 ? (
                                    <button disabled={true} className='p-1 rounded-lg'/>
                                ):( 
                                    <Link 
                                        href={`/book-appointment?doctor_id=${doctor_id}&udate=${formattedDate}&time=${'9:00 AM'}&time-slot=${2}`} 
                                        className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                        9:00 AM
                                    </Link>
                                )}
                                {item.time_slot_3 === 1 ? (
                                    <button disabled={true} className='p-1 rounded-lg'/>
                                ):( 
                                    <Link 
                                        href={`/book-appointment?doctor_id=${doctor_id}&udate=${formattedDate}&time=${'10:00 AM'}&time-slot=${3}`} 
                                        className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                        10:00 AM
                                    </Link>
                                )}
                                {item.time_slot_4 === 1 ? (
                                    <button disabled={true} className='p-1 rounded-lg'/>
                                ):( 
                                    <Link 
                                        href={`/book-appointment?doctor_id=${doctor_id}&udate=${formattedDate}&time=${'11:00 AM'}&time-slot=${4}`} 
                                        className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                        11:00 AM
                                    </Link>
                                )}
                                {item.time_slot_5 === 1 ? (
                                    <button disabled={true} className='p-1 rounded-lg'/>
                                ):( 
                                    <Link 
                                        href={`/book-appointment?doctor_id=${doctor_id}&udate=${formattedDate}&time=${'12:00 PM'}&time-slot=${5}`} 
                                        className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                        12:00 PM
                                    </Link>
                                )}
                                {item.time_slot_6 === 1 ? (
                                    <button disabled={true} className='p-1 rounded-lg'/>
                                ):( 
                                    <Link 
                                        href={`/book-appointment?doctor_id=${doctor_id}&udate=${formattedDate}&time=${'2:00 PM'}&time-slot=${6}`} 
                                        className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                        2:00 PM
                                    </Link>
                                )}
                                {item.time_slot_7 === 1 ? (
                                    <button disabled={true} className='p-1 rounded-lg'/>
                                ):( 
                                    <Link 
                                        href={`/book-appointment?doctor_id=${doctor_id}&udate=${formattedDate}&time=${'3:00 PM'}&time-slot=${7}`} 
                                        className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                        3:00 PM
                                    </Link>
                                )}
                                {item.time_slot_8 === 1 ? (
                                    <button disabled={true} className='p-1 rounded-lg'/>
                                ):( 
                                    <Link 
                                        href={`/book-appointment?doctor_id=${doctor_id}&udate=${formattedDate}&time=${'4:00 PM'}&time-slot=${8}`} 
                                        className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                        4:00 PM
                                    </Link>
                                )}
                                <button disabled={true} className='p-1 rounded-lg'/> 
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="bg-white p-2 rounded-xl font-medium">
                            <div className="grid grid-cols-3 gap-2 h-40">
                                <Link 
                                    href={`/book-appointment?doctor_id=${doctor_id}&date=${formattedDate}&time=${'8:00 AM'}&time-slot=${1}`} 
                                    className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                    8:00 AM
                                </Link>
                                <Link 
                                    href={`/book-appointment?doctor_id=${doctor_id}&date=${formattedDate}&time=${'9:00 AM'}&time-slot=${2}`} 
                                    className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                    9:00 AM
                                </Link>
                                <Link 
                                    href={`/book-appointment?doctor_id=${doctor_id}&date=${formattedDate}&time=${'10:00 AM'}&time-slot=${3}`} 
                                    className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                    10:00 AM
                                </Link>
                                <Link 
                                    href={`/book-appointment?doctor_id=${doctor_id}&date=${formattedDate}&time=${'11:00 AM'}&time-slot=${4}`} 
                                    className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                    11:00 AM
                                </Link>
                                <Link 
                                    href={`/book-appointment?doctor_id=${doctor_id}&date=${formattedDate}&time=${'12:00 PM'}&time-slot=${5}`} 
                                    className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                    12:00 AM
                                </Link>
                                <Link 
                                    href={`/book-appointment?doctor_id=${doctor_id}&date=${formattedDate}&time=${'2:00 PM'}&time-slot=${6}`} 
                                    className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                    2:00 PM
                                </Link>
                                <Link 
                                    href={`/book-appointment?doctor_id=${doctor_id}&date=${formattedDate}&time=${'3:00 PM'}&time-slot=${7}`} 
                                    className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                    3:00 PM
                                </Link>
                                <Link 
                                    href={`/book-appointment?doctor_id=${doctor_id}&date=${formattedDate}&time=${'4:00 PM'}&time-slot=${8}`} 
                                    className='flex items-center justify-center p-1 rounded-lg text-black bg-slate-200 hover:text-white hover:bg-pink-700'>
                                    4:00 PM
                                </Link>
                                <button disabled={true} className='p-1 rounded-lg'/> 
                            </div>
                        </div>
            )}
        </div>
    )
}

export default DoctorAvailability