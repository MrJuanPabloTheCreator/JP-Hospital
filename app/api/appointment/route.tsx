import { NextRequest, NextResponse } from "next/server";
const db = require('../../db')

export async function POST(req: NextRequest) {
    const formData = await req.json();
    const { doctor_id, date, time, time_slot, firstName, lastName, day, year, month, gender, city, streetAddress, state, zipCode, phoneNumber, phoneType, confirmEmail } = formData;
    // console.log(doctor_id, date, time, time_slot, firstName, lastName, day, year, month, gender, city, state, zipCode, phoneNumber, phoneType, confirmEmail)
    
    const [records] = await db.query(`INSERT INTO clients (doctor_id, date, time, time_slot, firstName, lastName, month, day, year, gender, streetAddress, city, state, zipCode, phoneNumber, phoneType, email)
    VALUES (${doctor_id}, '${date}', '${time}', '${time_slot}', '${firstName}', '${lastName}', '${month}', '${day}', '${year}', '${gender}', '${streetAddress}', '${city}', '${state}', '${zipCode}', '${phoneNumber}', '${phoneType}', '${confirmEmail}');`);
    return new NextResponse(JSON.stringify(records));
}