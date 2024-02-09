"use server"

const db = require('@/app/db')

interface SearchParams {
    id: string | string[];
}
  
export default async function getDistance() {
    // const { id } = params
    // const [records] = await db.query(`SELECT Doctors.DoctorID, Doctors.DoctorName, Doctors.DoctorLastName, Email, Phone_Number, Availability, PhotoPath
    // FROM DoctorSpecialties JOIN Doctors ON DoctorSpecialties.DoctorID = Doctors.DoctorID JOIN Specialties ON DoctorSpecialties.SpecialtyID = Specialties.SpecialtyID
    // WHERE Specialties.SpecialtyID = ${id};`)
    // return records;
}