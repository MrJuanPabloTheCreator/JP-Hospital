"use client"

import { useSearchParams } from "next/navigation"

const SpecialtyPage = () => {
    const params = useSearchParams()
    const specialty_id = params.get('specialty_id')

    return(
        <div>
            {specialty_id}
        </div>
    )
}

export default SpecialtyPage;