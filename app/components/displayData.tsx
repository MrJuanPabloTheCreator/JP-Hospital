"use client"

import { useState, useEffect } from "react";
import Modal from "./modalComp";

export default function DisplayData(){
    const [formData, setFormData] = useState<Array<{ id: number, name: string, employee_code: string, salary: number }>>([]);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    const makeGetCall = async () => {
        const response = await fetch('/api/call', {
          method: 'GET'
        })
        const newData = await response.json();
        setFormData(newData)
    }

    const toggleOpenClose = (id: number) => {
        setSelectedItemId((prevId) => (prevId === id ? null : id));
    }

    useEffect(() => {
        makeGetCall();
    }, []);

    return (
        <div className="bg-slate-700 p-2 rounded-lg m-2 grid grid-cols-2">
            {formData.map((item) => (
                <div key={item.id} className="p-1">
                    <li className="text-white">
                        ID: {item.id}, Name: {item.name}, Employee Code: {item.employee_code}, Salary: {item.salary}
                        <button onClick={() => toggleOpenClose(item.id)} className="ml-5 bg-black rounded-lg py-1 px-2">Edit</button>
                        <div>
                            {selectedItemId === item.id && <Modal onClose={() => toggleOpenClose(item.id)} id={item.id}/>}
                        </div>
                    </li>
                </div>
            ))}
        </div>
    );
};