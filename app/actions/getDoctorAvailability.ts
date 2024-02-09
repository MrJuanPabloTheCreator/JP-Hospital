"use server"

const db = require('@/app/db')

export default async function getAvailability(doctor_id: number, date: string){
    // console.log('From getDoctorAvailavility Actions - doctor_id:', doctor_id, 'date:', date)
    const [availability] = await db.query(`select doctor_id, date, time_slot_1, time_slot_2, time_slot_3, time_slot_4, time_slot_5, time_slot_6, time_slot_7, time_slot_8  from doctor_schedule where doctor_id =${doctor_id} and date='${date}';`)
    
    return availability
}