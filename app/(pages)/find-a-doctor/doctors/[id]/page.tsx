"use client"

import { useSearchParams } from "next/navigation"

const DoctorPage = () => {
  const params = useSearchParams()
  const id = params.get('id')

  return (
    <div>
      {id}
    </div>
  )
}
    
  export default DoctorPage