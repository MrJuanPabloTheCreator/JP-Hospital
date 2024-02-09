"use client"

import { ChangeEvent, useState } from "react";

export default function DeleteEmployee(){
    const [id, setId] = useState<string>('');

    const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    };

    const deleteCall = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fetchFunction = await fetch('/api/call',{
            method: 'DELETE',
            body: JSON.stringify({id: id})
        })
        
        const response = fetchFunction.json();
        window.location.reload();
        return response
    }


    return (
        <div>
            <form onSubmit={deleteCall}>
                <label>
                    Delete Employee by ID
                    <input
                        type="text"
                        name="id"
                        value={id}
                        onChange={handleIdChange}
                        className="ml-2 rounded-lg"
                    />
                </label>
                <button type="submit">Delete</button>
            </form>
        </div>
    )
}