"use client"

import Link from "next/link";

interface SpecialtyCardProps{
    specialty_id: number,
    specialty_name: string, 
    index: number,
}

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({specialty_id, specialty_name, index}) => {
    return(
        <Link href={`/specialties/specialty?specialty_id=${specialty_id}`}>
            <div className="bg-white p-3 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold">{index + 1}.{specialty_name}</h2>
            </div>
        </Link>
    )
}

export default SpecialtyCard;