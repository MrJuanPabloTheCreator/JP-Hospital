"use client"

import { ChangeEvent, useState } from "react"

export default function EmployeeForm(){
    const [name, setName] = useState<string>('')
    const [employeeCode, setEmployeeCode] = useState<string>('')
    const [salary, setSalary] = useState<string>('')

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

        await fetch('/api/call', {
          method: 'POST',
          body: JSON.stringify({name: name, employee_code: employeeCode, salary: salary})
        })
        window.location.reload();
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
                        className="ml-2 rounded-lg"
                    />
                </label>
                <label>
                    Employee Code
                    <input
                        type="text"
                        name="code"
                        value={employeeCode}
                        onChange={handleEmployeeCodeChange}
                        className="ml-2 rounded-lg"
                    />
                </label>
                <label>
                    Salary
                    <input
                        type="text"
                        name="Salary"
                        value={salary}
                        onChange={handleSalaryChange}
                        className="ml-2 rounded-lg"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}