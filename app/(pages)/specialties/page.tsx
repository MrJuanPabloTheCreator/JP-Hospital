"use client"

import { useEffect, useState } from "react"
import SpecialtyCard from "./specialtyCard";

const SpecialtiesPage = () => {
  const [specialties, setSpecialties] = useState<Array<{ specialty_id: number, specialty_name: string }>>([]);
  
  const makeGetCall = async () => {
    const response = await fetch('/api/specialties', {
      method: 'GET'
    })
    const specialtiesData = await response.json();
    setSpecialties(specialtiesData)
  }

  useEffect(() => {
    makeGetCall()
  }, [])
  

  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-3 gap-2 w-[1000px]">
        {specialties.map((item, index) => (
          <div key={item.specialty_id}>
            <SpecialtyCard specialty_id={item.specialty_id} specialty_name={item.specialty_name} index={index}/>
          </div> 
        ))}
      </div>
    </div>
  )
}
    
export default SpecialtiesPage