"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from "react-hot-toast";

const ClientForm: React.FC = () => {
    const params = useSearchParams()
    const router = useRouter();

    const doctor_id = params.get('doctor_id');
    const time = params.get('time');
    const time_slot = params.get('time-slot');
    
    let date: string | null = null;
    if(params.get('date')){
        date = params.get('date')
    } else if(params.get('udate')){
        date = params.get('udate')
    }

    const validateSchedule = async () => {
        const submitClient = await fetch(`/api/validate/${doctor_id}?time_slot=${time_slot}&date=${date}`, {
            method: 'GET',
        })
        const responseClient = await submitClient.json();
        console.log(responseClient)
        if(responseClient === 'Records Found'){
            router.push('/find-a-doctor/')
        }
    }

    useEffect(() => {
        validateSchedule();
    }, [])
    

    const [formData, setFormData] = useState({
        doctor_id: doctor_id,
        date: date,
        time: time,
        time_slot: time_slot,
        firstName: '',
        lastName: '',
        month: '',
        day: '',
        year: '',
        gender: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        phoneType: '',
        email: '',
        confirmEmail: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateSchedule()
        const submitClient = await fetch('/api/appointment', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        const responseClient = await submitClient.json();
        if(responseClient.affectedRows === 1){
            console.log('Appointment Succesfull');

            if(params.get('date')){
                const submitSchedule = await fetch('/api/appointment/new', {
                    method: 'POST',
                    body: JSON.stringify(formData)
                })
                const response = await submitSchedule.json();
                if(response.affectedRows === 1){
                    console.log('New Dr.Schedule Succesfull');
                }

            } else if(params.get('udate')){
                const updateSchedule = await fetch('/api/appointment/update', {
                    method: 'POST',
                    body: JSON.stringify(formData)
                })
                const response = await updateSchedule.json();
                if(response.affectedRows === 1){
                    console.log('Updated Dr.Schedule Succesfull');
                }
            }
            // const confirmationEmail = await fetch('/api/email', {
            //     method: 'POST',
            //     body: JSON.stringify(formData)
            // })
            // const confirmationResponse = await confirmationEmail.json();
            // console.log(confirmationResponse)
        }
        toast.success('Booking Confirmed!')
        router.push(`/`);    
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md ml-10">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

            <div className="mb-4">
                <label htmlFor="firstName" className="block mb-1">First Name</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="lastName" className="block mb-1">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4 grid grid-cols-3 gap-4">
                <div>
                    <label htmlFor="month" className="block mb-1">Month (MM)</label>
                    <input type="text" id="month" name="month" placeholder="MM" value={formData.month} onChange={handleChange} required maxLength={2} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="day" className="block mb-1">Day (DD)</label>
                    <input type="text" id="day" name="day" placeholder="DD" value={formData.day} onChange={handleChange} required maxLength={2} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="year" className="block mb-1">Year (YYYY)</label>
                    <input type="text" id="year" name="year" placeholder="YYYY" value={formData.year} onChange={handleChange} required maxLength={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-1">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                    <option value="">Please select a gender.</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="X">X</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="streetAddress" className="block mb-1">Street Address</label>
                <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="city" className="block mb-1">City</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="state" className="block mb-1">State</label>
                    <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
                    <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label className="block mb-1">Phone Type</label>
                <select name="phoneType" value={formData.phoneType} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                    <option value="">Please select a phone type.</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="confirmEmail" className="block mb-1">Confirm Email</label>
                <input type="email" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>

            {formData.email !== formData.confirmEmail && <p className="text-red mb-4">The emails provided do not match.</p>}
            <button type="submit" className="w-full bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        </form>
);
};

export default ClientForm;