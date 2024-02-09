"use client"

import { ChangeEvent, useEffect, useState } from "react"

interface UpdateProps {
    id: number;
}

const UpdateEmployee: React.FC<UpdateProps> = ({id}) => {
    const [name, setName] = useState<string>('')
    const [employeeCode, setEmployeeCode] = useState<string>('')
    const [salary, setSalary] = useState<string>('')

    useEffect(() => {
        const makeGetCall = async () => {
            const response = await fetch(`/api/call/${id}`, {
                method: 'POST',
                body: JSON.stringify({ id })
            });
    
            const newData = await response.json();
            setName(newData[0].name);
            setEmployeeCode(newData[0].employee_code);
            setSalary(newData[0].salary);
           
        };
        makeGetCall();
    }, [id]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        setName(value);
    };
    
    const handleEmployeeCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        setEmployeeCode(value);
    };
    
    const handleSalaryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        setSalary(value);
    };
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fetchFunction = await fetch(`/api/call/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({id: id, name: name, employee_code: employeeCode, salary: salary})
        })

        const response = fetchFunction.json();
        console.log(response)
        window.location.reload();
        return response
    }

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2'>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        className="ml-2 rounded-lg text-black"
                    />
                </label>
                <label>
                    Employee Code
                    <input
                        type="text"
                        name="code"
                        value={employeeCode}
                        onChange={handleEmployeeCodeChange}
                        className="ml-2 rounded-lg text-black"
                    />
                </label>
                <label>
                    Salary
                    <input
                        type="text"
                        name="Salary"
                        value={salary}
                        onChange={handleSalaryChange}
                        className="ml-2 rounded-lg text-black"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateEmployee