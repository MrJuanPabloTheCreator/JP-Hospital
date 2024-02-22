"use client"

import { useEffect, useState } from "react"

const DoctorsPage = () => {
  // const [specialties, setSpecialties] = useState<Array<{ specialty_id: number, specialty_name: string }>>([]);
  
  // const makeGetCall = async () => {
  //   const response = await fetch('/api/specialties', {
  //     method: 'GET'
  //   })
  //   const specialtiesData = await response.json();
  //   setSpecialties(specialtiesData)
  // }

  // useEffect(() => {
  //   makeGetCall()
  // }, [])
  

  return (
    <div>
      Doctors
      {/* <div>
        {specialties.map((item) => (
          <div key={item.specialty_id}>
            <h2>{item.specialty_name}</h2>
          </div> 
        ))}
      </div> */}
    </div>
  )
}
    
  export default DoctorsPage