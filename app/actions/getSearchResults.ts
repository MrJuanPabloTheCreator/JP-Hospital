"use server"

const db = require('@/app/db')

interface SearchParams {
    id: string | string[] | null;
    location: number | string | undefined;
}
  
export default async function getSearchResults(params: SearchParams) {
    const { id, location } = params
    console.log('From getSearchResults Actions - Specialty ID:', id, 'City ID:', location)
    
    const [records] = await db.query(`SELECT
    d.doctor_id,
    d.name,
    d.last_name,
    d.email,
    d.phone,
    d.availability,
    d.photo_path,
    s1.specialty_name AS specialty_name_1,
    s2.specialty_name AS specialty_name_2,
    c.city_name
FROM
    doctors d
JOIN
    doctor_specialties ds ON d.doctor_id = ds.doctor_id
JOIN
    cities c ON d.city_id = c.city_id
LEFT JOIN
    specialties s1 ON ds.specialty_id = s1.specialty_id
LEFT JOIN
    specialties s2 ON ds.specialty_id_2 = s2.specialty_id
WHERE
    (ds.specialty_id = ${id} OR ds.specialty_id_2 = ${id})
    AND d.city_id = ${location};`)
    
    return records;
}