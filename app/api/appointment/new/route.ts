import { NextRequest, NextResponse } from "next/server";
const db = require('../../../db')

export async function POST(req: NextRequest) {
    const formData = await req.json();
    const { doctor_id, date, time_slot } = formData;
    // console.log(doctor_id, date, time_slot)
    
    const [records] = await db.query(`INSERT INTO doctor_schedule (doctor_id, date, time_slot_${time_slot}) VALUES (${doctor_id}, '${date}', 1);`)
    return new NextResponse(JSON.stringify(records));
}