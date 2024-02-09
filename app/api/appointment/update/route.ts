import { NextRequest, NextResponse } from "next/server";
const db = require('../../../db')

export async function POST(req: NextRequest) {
    const formData = await req.json();
    const { doctor_id, date, time_slot } = formData;
    // console.log(doctor_id, date, time_slot)
    
    const [records] = await db.query(`UPDATE doctor_schedule SET time_slot_${time_slot} = 1 where doctor_id = ${doctor_id} and date = '${date}';`);
    return new NextResponse(JSON.stringify(records));
}